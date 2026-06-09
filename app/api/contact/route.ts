import { infos } from "@/data/infos";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
const NAME_REGEX = /^[\p{L}\s'\-]{1,100}$/u;

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

// Adresse d'expédition (domaine vérifié dans Resend)
const FROM_EMAIL = "projets@standbyme.fr";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();
    const { nom, prenom, email, entreprise, projet, message } = body;

    if (!nom || !prenom || !email || !entreprise) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants" },
        { status: 400 },
      );
    }

    if (!EMAIL_REGEX.test(String(email).trim())) {
      return NextResponse.json(
        { error: "Adresse email invalide" },
        { status: 400 },
      );
    }

    if (
      !NAME_REGEX.test(String(nom).trim()) ||
      !NAME_REGEX.test(String(prenom).trim())
    ) {
      return NextResponse.json(
        { error: "Nom ou prénom invalide (caractères non autorisés)" },
        { status: 400 },
      );
    }

    if (
      String(entreprise).trim().length < 1 ||
      String(entreprise).trim().length > 150
    ) {
      return NextResponse.json(
        { error: "Nom d'entreprise invalide" },
        { status: 400 },
      );
    }

    const safeNom = escapeHtml(String(nom).trim());
    const safePrenom = escapeHtml(String(prenom).trim());
    const safeEmail = escapeHtml(String(email).trim());
    const safeEntreprise = escapeHtml(String(entreprise).trim());
    const safeProjet = projet
      ? escapeHtml(String(projet).trim().slice(0, 200))
      : null;
    const safeMessage = message
      ? escapeHtml(String(message).trim().slice(0, 1000))
      : null;

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1a1a1a; border-bottom: 2px solid #e0e0e0; padding-bottom: 10px;">
          Nouvelle demande de devis - Stand By Me
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr style="border-bottom: 1px solid #f0f0f0;">
            <td style="padding: 10px 5px; color: #666; font-weight: bold; width: 35%;">Nom</td>
            <td style="padding: 10px 5px; color: #1a1a1a;">${safeNom}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f0f0f0;">
            <td style="padding: 10px 5px; color: #666; font-weight: bold;">Prénom</td>
            <td style="padding: 10px 5px; color: #1a1a1a;">${safePrenom}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f0f0f0;">
            <td style="padding: 10px 5px; color: #666; font-weight: bold;">Email</td>
            <td style="padding: 10px 5px; color: #1a1a1a;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
          </tr>
          <tr style="border-bottom: 1px solid #f0f0f0;">
            <td style="padding: 10px 5px; color: #666; font-weight: bold;">Entreprise</td>
            <td style="padding: 10px 5px; color: #1a1a1a;">${safeEntreprise}</td>
          </tr>
          ${
            safeProjet
              ? `<tr style="border-bottom: 1px solid #f0f0f0;">
            <td style="padding: 10px 5px; color: #666; font-weight: bold;">Salon / Projet</td>
            <td style="padding: 10px 5px; color: #1a1a1a;">${safeProjet}</td>
          </tr>`
              : ""
          }
          ${
            safeMessage
              ? `<tr>
            <td style="padding: 10px 5px; color: #666; font-weight: bold; vertical-align: top;">Message</td>
            <td style="padding: 10px 5px; color: #1a1a1a; white-space: pre-line;">${safeMessage}</td>
          </tr>`
              : ""
          }
        </table>
        <p style="margin-top: 30px; font-size: 12px; color: #aaa;">
          Ce message a été envoyé depuis le formulaire de contact du site <a href="https://www.standbyme.fr">standbyme.fr</a>
        </p>
      </div>
    `;

    await resend.emails.send({
      from: FROM_EMAIL,
      to: infos.emailCallback,
      replyTo: [String(email).trim()],
      subject: `Demande de devis - ${safePrenom} ${safeNom} (${safeEntreprise})`,
      html: emailHtml,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Erreur API contact:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message" },
      { status: 500 },
    );
  }
}

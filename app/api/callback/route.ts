import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { infos } from "@/data/infos";

const PHONE_REGEX = /^[\d\s().+\-]{6,20}$/;

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
    const { telephone } = body;

    if (!telephone || typeof telephone !== "string") {
      return NextResponse.json(
        { error: "Numéro de téléphone obligatoire" },
        { status: 400 },
      );
    }

    const cleanPhone = String(telephone).trim();

    if (!PHONE_REGEX.test(cleanPhone)) {
      return NextResponse.json(
        {
          error:
            "Numéro de téléphone invalide (chiffres, espaces, +, -, () uniquement)",
        },
        { status: 400 },
      );
    }

    const safePhone = escapeHtml(cleanPhone);

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1a1a1a; border-bottom: 2px solid #e0e0e0; padding-bottom: 10px;">
          Demande de rappel - Stand By Me
        </h2>
        <p style="font-size: 16px; color: #1a1a1a; margin-top: 20px;">
          Un visiteur souhaite être rappelé au :
        </p>
        <p style="font-size: 24px; font-weight: bold; color: #1a1a1a;">
          <a href="tel:${safePhone}">${safePhone}</a>
        </p>
        <p style="font-size: 14px; color: #666;">
          Rappel demandé le ${new Date().toLocaleDateString("fr-FR", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
        <p style="margin-top: 30px; font-size: 12px; color: #aaa;">
          Ce message a été envoyé depuis le bouton "Être rappelé" du site <a href="https://www.standbyme.fr">standbyme.fr</a>
        </p>
      </div>
    `;

    await resend.emails.send({
      from: FROM_EMAIL,
      to: infos.emailCallback,
      subject: `Demande de rappel - ${safePhone}`,
      html: emailHtml,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Erreur API callback:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi" },
      { status: 500 },
    );
  }
}

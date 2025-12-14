import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { menuItems } from "@/data/menu";

import Hero from "@/components/Hero";
import ClientSection from "@/components/ClientSection";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import NumbersSection from "@/components/NumbersSection";
import MapMonde from "@/components/MapMonde";

export const metadata = {
  title:
    "Stand By Me - Standiste Paris | Création Stand Sur Mesure | Salon Événementiel",
  description:
    "Stand By Me, standiste expert à Paris, conçoit et réalise des stands sur mesure pour salons, foires et événements. Spécialiste stand VR/AR, showroom, retail. Conception créative, montage professionnel. Devis gratuit.",
  keywords:
    "standiste Paris, création stand sur mesure, stand événementiel, salon professionnel, foire exposition, stand VR, showroom Paris, retail design, montage stand, conception stand, agence événementielle Paris, stand modulaire, design événementiel",
  openGraph: {
    title: "Stand By Me - Standiste Paris | Création Stand Sur Mesure",
    description:
      "Standiste expert à Paris spécialisé dans la création de stands sur mesure pour salons, foires et événements. Innovation VR/AR, design créatif.",
    type: "website",
    locale: "fr_FR",
    siteName: "Stand By Me",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stand By Me - Standiste Paris | Création Stand Sur Mesure",
    description:
      "Standiste expert à Paris pour vos stands de salon, foires et événements. Spécialiste VR/AR et design créatif.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.standbyme.fr",
    languages: {
      fr: "https://www.standbyme.fr/fr",
      en: "https://www.standbyme.fr/en",
    },
  },
};

export default function Home() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav dark light-after-scroll transparent stick-fixed wow-menubar wch-unset">
            <Header links={menuItems} />
          </nav>

          <main id="main">
            <Hero />
            <MapMonde />
            <NumbersSection />
            <ClientSection />
            <Team />
            <Testimonials />
            <Contact />
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}

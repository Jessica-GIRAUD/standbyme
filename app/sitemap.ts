import { MetadataRoute } from "next";

const BASE_URL = "https://www.standbyme.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["fr", "en"];

  const routes = [
    { path: "", changeFrequency: "weekly" as const, priority: 1.0 },
    { path: "/realisations", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/savoir-faire", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/outdoor", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/politique-de-confidentialite", changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const localizedEntries = locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${BASE_URL}/${locale}${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${BASE_URL}/${l}${route.path}`])
        ),
      },
    }))
  );

  // Landing page FR uniquement
  const landingPages = [
    {
      url: `${BASE_URL}/fr/stand-sur-mesure-salon-professionnel`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
      alternates: {
        languages: {
          fr: `${BASE_URL}/fr/stand-sur-mesure-salon-professionnel`,
        },
      },
    },
  ];

  return [...localizedEntries, ...landingPages];
}

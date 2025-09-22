import createNextIntlPlugin from "next-intl/plugin";

const nextConfig = {
  images: {
    // Activer l'optimisation des images
    unoptimized: false,
    // Formats supportés pour l'optimisation
    formats: ["image/webp", "image/avif"],
    // Tailles d'images générées automatiquement
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Domaines autorisés pour les images externes (si nécessaire)
    remotePatterns: [],
    // Cache des images optimisées pendant 60 jours
    minimumCacheTTL: 5184000,
  },
  // Configuration pour améliorer les performances
  experimental: {
    optimizePackageImports: ["swiper", "bootstrap"],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);

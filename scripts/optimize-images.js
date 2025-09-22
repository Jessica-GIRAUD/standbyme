const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// Configuration d'optimisation
const OPTIMIZATION_CONFIG = {
  jpeg: {
    quality: 85,
    progressive: true,
    mozjpeg: true,
  },
  png: {
    quality: 90,
    compressionLevel: 9,
    progressive: true,
  },
  webp: {
    quality: 85,
    effort: 6,
  },
};

// Dossiers à traiter
const IMAGE_DIRECTORIES = ["public/assets/images", "public/assets/css"];

// Extensions supportées
const SUPPORTED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".tiff"];

async function optimizeImage(inputPath, outputPath, options = {}) {
  try {
    const ext = path.extname(inputPath).toLowerCase();
    const outputExt = path.extname(outputPath).toLowerCase();

    let pipeline = sharp(inputPath);

    // Redimensionner si nécessaire (pour les très grandes images)
    const metadata = await pipeline.metadata();
    if (metadata.width > 2048) {
      pipeline = pipeline.resize(2048, null, {
        withoutEnlargement: true,
        fit: "inside",
      });
    }

    // Appliquer l'optimisation selon le format de sortie
    switch (outputExt) {
      case ".jpg":
      case ".jpeg":
        pipeline = pipeline.jpeg(OPTIMIZATION_CONFIG.jpeg);
        break;
      case ".png":
        pipeline = pipeline.png(OPTIMIZATION_CONFIG.png);
        break;
      case ".webp":
        pipeline = pipeline.webp(OPTIMIZATION_CONFIG.webp);
        break;
      default:
        // Garder le format original avec optimisation
        if (ext === ".jpg" || ext === ".jpeg") {
          pipeline = pipeline.jpeg(OPTIMIZATION_CONFIG.jpeg);
        } else if (ext === ".png") {
          pipeline = pipeline.png(OPTIMIZATION_CONFIG.png);
        }
    }

    // Éviter d'écrire sur le même fichier que l'entrée
    const finalOutputPath =
      inputPath === outputPath ? `${outputPath}.tmp` : outputPath;
    await pipeline.toFile(finalOutputPath);

    // Calculer la réduction de taille
    const originalStats = fs.statSync(inputPath);
    const optimizedStats = fs.statSync(finalOutputPath);
    const reduction = (
      ((originalStats.size - optimizedStats.size) / originalStats.size) *
      100
    ).toFixed(1);

    // Si on a écrit dans un fichier temporaire, remplacer l'original
    if (finalOutputPath !== outputPath) {
      fs.renameSync(finalOutputPath, outputPath);
    }

    console.log(
      `✅ ${path.relative(process.cwd(), inputPath)}: ${formatBytes(
        originalStats.size
      )} → ${formatBytes(optimizedStats.size)} (-${reduction}%)`
    );

    return {
      original: originalStats.size,
      optimized: optimizedStats.size,
      reduction: parseFloat(reduction),
    };
  } catch (error) {
    console.error(
      `❌ Erreur lors de l'optimisation de ${inputPath}:`,
      error.message
    );
    return null;
  }
}

function formatBytes(bytes) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

async function processDirectory(dirPath) {
  const fullPath = path.join(process.cwd(), dirPath);

  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  Le dossier ${dirPath} n'existe pas`);
    return [];
  }

  const files = fs.readdirSync(fullPath, { withFileTypes: true });
  const results = [];

  for (const file of files) {
    const filePath = path.join(fullPath, file.name);

    if (file.isDirectory()) {
      // Traitement récursif des sous-dossiers
      const subResults = await processDirectory(path.join(dirPath, file.name));
      results.push(...subResults);
    } else if (file.isFile()) {
      const ext = path.extname(file.name).toLowerCase();

      if (SUPPORTED_EXTENSIONS.includes(ext)) {
        // Créer une sauvegarde si elle n'existe pas
        const backupPath = filePath + ".backup";
        if (!fs.existsSync(backupPath)) {
          fs.copyFileSync(filePath, backupPath);
        }

        // IMPORTANT: Toujours lire depuis la sauvegarde et écrire sur l'original
        const result = await optimizeImage(backupPath, filePath);
        if (result) {
          results.push(result);
        }

        // Créer aussi une version WebP pour les JPG/PNG à partir de la sauvegarde
        if ([".jpg", ".jpeg", ".png"].includes(ext)) {
          const webpPath = filePath.replace(ext, ".webp");
          const webpResult = await optimizeImage(backupPath, webpPath);
          if (webpResult) {
            console.log(
              `📸 Version WebP créée: ${path.relative(process.cwd(), webpPath)}`
            );
          }
        }
      }
    }
  }

  return results;
}

async function main() {
  console.log("🚀 Démarrage de l'optimisation des images...\n");

  let totalResults = [];

  for (const directory of IMAGE_DIRECTORIES) {
    console.log(`📁 Traitement du dossier: ${directory}`);
    const results = await processDirectory(directory);
    totalResults.push(...results);
    console.log("");
  }

  // Statistiques finales
  if (totalResults.length > 0) {
    const totalOriginal = totalResults.reduce((sum, r) => sum + r.original, 0);
    const totalOptimized = totalResults.reduce(
      (sum, r) => sum + r.optimized,
      0
    );
    const averageReduction =
      totalResults.reduce((sum, r) => sum + r.reduction, 0) /
      totalResults.length;

    console.log("📊 RÉSUMÉ DE L'OPTIMISATION:");
    console.log(`   Images traitées: ${totalResults.length}`);
    console.log(`   Taille originale: ${formatBytes(totalOriginal)}`);
    console.log(`   Taille optimisée: ${formatBytes(totalOptimized)}`);
    console.log(
      `   Économie totale: ${formatBytes(
        totalOriginal - totalOptimized
      )} (-${averageReduction.toFixed(1)}%)`
    );
    console.log("\n✨ Optimisation terminée avec succès !");
    console.log(
      "\n💡 Conseil: Les fichiers originaux ont été sauvegardés avec l'extension .backup"
    );
    console.log(
      "   Vous pouvez les supprimer une fois que vous êtes satisfait du résultat."
    );
  } else {
    console.log("ℹ️  Aucune image à optimiser trouvée.");
  }
}

// Exécuter le script
main().catch(console.error);

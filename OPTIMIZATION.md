# Guide d'Optimisation des Images

Ce document explique comment optimiser les images de votre projet Next.js pour améliorer les performances de chargement.

## 🚀 Installation et Configuration

### 1. Installer les dépendances

```bash
npm install sharp
```

### 2. Configuration Next.js

Le fichier `next.config.mjs` a été configuré pour :

- ✅ Activer l'optimisation automatique des images
- ✅ Supporter les formats WebP et AVIF
- ✅ Définir des tailles d'images optimisées
- ✅ Configurer la qualité à 80% (bon compromis taille/qualité)
- ✅ Cache des images optimisées pendant 60 jours

## 📸 Optimisation des Images Existantes

### Script d'optimisation automatique

Exécutez le script pour optimiser toutes les images existantes :

```bash
npm run optimize-images
```

Ce script va :

- 🔄 Créer des sauvegardes de vos images originales (`.backup`)
- 🗜️ Compresser les images avec des paramètres optimisés
- 📱 Créer des versions WebP pour les JPG/PNG
- 📊 Afficher des statistiques détaillées d'optimisation
- 📏 Redimensionner les images trop grandes (>2048px)

### Résultats attendus

- **JPEG** : Compression avec mozjpeg, qualité 85%, progressif
- **PNG** : Compression niveau 9, qualité 90%
- **WebP** : Qualité 85%, effort 6 (meilleure compression)

## 🎯 Optimisations Appliquées

### 1. Composant Image Next.js

Tous les composants utilisent maintenant le composant `Image` optimisé avec :

- `width` et `height` définis explicitement
- `sizes` responsives pour différents breakpoints
- `priority` pour les images above-the-fold
- `placeholder="blur"` pour une meilleure UX

### 2. Formats d'images modernes

- **WebP** : ~25-35% plus léger que JPEG
- **AVIF** : ~50% plus léger que JPEG (support navigateur croissant)
- Fallback automatique vers les formats originaux

### 3. Lazy Loading

- Chargement différé automatique pour les images hors viewport
- Priority loading pour les images critiques

## 📊 Mesure des Performances

### Avant optimisation

- Images non-optimisées
- Formats lourds (PNG/JPEG non-compressés)
- Pas de lazy loading

### Après optimisation

- Réduction moyenne de 30-60% de la taille des images
- Formats modernes (WebP/AVIF)
- Chargement optimisé et progressif

## 🛠️ Maintenance

### Nouvelles images

Pour les nouvelles images ajoutées :

1. Placez-les dans `public/assets/images/`
2. Utilisez le composant `Image` de Next.js
3. Exécutez `npm run optimize-images` si nécessaire

### Nettoyage des sauvegardes

Une fois satisfait des résultats, vous pouvez supprimer les fichiers `.backup` :

```bash
find public/assets -name "*.backup" -delete
```

## 🔧 Configuration Avancée

### Ajuster la qualité

Modifiez les paramètres dans `scripts/optimize-images.js` :

```javascript
const OPTIMIZATION_CONFIG = {
  jpeg: { quality: 85 }, // 60-95
  png: { quality: 90 }, // 60-100
  webp: { quality: 85 }, // 60-95
};
```

### Ajouter de nouveaux dossiers

Ajoutez des dossiers dans `IMAGE_DIRECTORIES` :

```javascript
const IMAGE_DIRECTORIES = [
  "public/assets/images",
  "public/assets/css",
  "public/uploads", // Nouveau dossier
];
```

## 📈 Bonnes Pratiques

1. **Utilisez toujours le composant `Image` de Next.js**
2. **Définissez `width` et `height` explicitement**
3. **Utilisez `sizes` pour les images responsives**
4. **Ajoutez `priority` pour les images critiques**
5. **Préférez WebP/AVIF pour les nouvelles images**
6. **Optimisez régulièrement avec le script**

## 🆘 Dépannage

### Erreur "Sharp not found"

```bash
npm install sharp --save
```

### Images floues

Vérifiez que `width` et `height` correspondent aux dimensions réelles

### Performances toujours lentes

1. Vérifiez que `unoptimized: false` dans `next.config.mjs`
2. Assurez-vous que Sharp est installé
3. Utilisez les DevTools pour analyser le chargement des images

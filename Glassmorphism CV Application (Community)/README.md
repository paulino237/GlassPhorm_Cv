# CV Glassmorphism

Projet React + Vite + TypeScript pour présenter un CV moderne.

## Installer
```bash
npm i
```

## Lancer
```bash
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Où modifier mes infos
- Ouvrir `src/components/CVComponent.tsx`
- Mettre à jour: nom, titre, contacts, éducation, expériences, compétences, tech stack, texte "À propos"

## Structure rapide
```
src/
  main.tsx        # Entrée React
  App.tsx         # Layout + fond
  index.css       # Styles de base
  components/
    CVComponent.tsx  # Contenu du CV
    GlassCard.tsx    # Carte glass
    SkillBar.tsx     # Barres de compétences
    TechStack.tsx    # Grille techno
    Portfolio.tsx    # Projets
```

## Remarques
- Icônes: lucide-react
- UI: composants maison + Radix
- Types stricts (TypeScript)
  
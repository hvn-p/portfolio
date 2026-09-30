# portfolio

Site vitrine de Pierre Hervelin, développeur full stack freelance : une vitrine de
projets façon site d'agence, une page par projet, et une page À propos. Anglais par
défaut, français et espagnol au choix du visiteur.

**Rigueur** : durable. Le site est public et représente Pierre auprès de ses clients.

## Sources de vérité

| Question | Où lire |
|---|---|
| Pour qui, pourquoi, quoi montrer, ce qui est confidentiel | `PRODUCT.md` |
| Couleurs, typographie, composants, mouvement | `DESIGN.md` et `.impeccable/design.json` |
| Le rendu attendu, au pixel près | `mockup/` (HTML, `styles.css`, `site.js`) |

**La maquette fait foi.** Elle a été validée page par page. L'implémentation la reproduit
à l'identique, interactions et mouvements compris. Quand un cas n'y figure pas, on
l'étend dans sa grammaire, sans en inventer une autre. Pour mesurer un doute, servir
`mockup/` en local (`python3 -m http.server 8765 --directory mockup`) et comparer au
navigateur.

`nr bench` automatise la comparaison, sous Chromium et Firefox, à 1440×900 et 390×844,
en mouvement normal et réduit, et range les écarts dans `bench/output/` :

- `compare.spec.ts` capture les deux côtés aux mêmes positions de défilement ;
- `motion.spec.ts` fige toutes les animations au même instant des deux côtés : intro,
  accroche tournante, survols, bouton aimanté, loupe, volet ;
- `a11y.spec.ts` passe chaque page à axe (WCAG 2.2 AA).

Sur un poste neuf, installer d'abord les navigateurs : `nlx playwright install chromium firefox`.

## Principes

- **Le travail d'abord.** Les projets s'affichent en grand ; l'interface se tient en
  retrait et ne porte aucune couleur d'accent.
- **Accessible, sans exception**, d'abord pour un visiteur au lecteur d'écran et au
  clavier (le détail est dans `PRODUCT.md`). Focus visible, et une alternative en
  mouvement réduit pour chaque animation.
- **Rien d'inventé.** Pas de témoignage, de client, de chiffre ni de rôle qui ne vienne
  de `PRODUCT.md` ou de Pierre. Les captures d'Abacus viennent uniquement d'une instance
  de démonstration remplie de données fictives.
- **Le français s'arrête aux documents.** Ce que lit un visiteur est dans la langue qu'il
  a choisie. Code, identifiants, noms de fichiers, commentaires et messages de commit sont
  en anglais. Les documents du dépôt (`PRODUCT.md`, `DESIGN.md`, ce fichier) sont en
  français.

## Stack

- **Next.js** (App Router) et React, hébergés sur le VPS de Pierre, en sortie
  `standalone` pour une image Docker. Un backend est possible, mais la v1 n'en a pas
  besoin.
- **Tailwind CSS 4.** Les jetons de la maquette forment le thème
  (`src/app/globals.css`), sans la palette par défaut, pour qu'aucune couleur d'accent
  ne puisse s'y glisser. Les utilitaires couvrent tout, sauf les chorégraphies à
  plusieurs états couplés (menu mobile, burger) : celles-là restent en CSS, dans la
  couche `components`, à côté de leur composant.
- **Contenu** dans `src/content/<langue>.ts`, typé par `src/content/types.ts` ; les
  pages n'écrivent aucun texte en dur.
- **Mouvements écrits à la main**, sans bibliothèque d'animation : ce sont les formules
  de `mockup/site.js`, validées telles quelles.
- **Langues** sous `src/app/[lang]/`, sans bibliothèque d'i18n. L'anglais n'a pas de
  préfixe : `src/proxy.ts` réécrit ses adresses vers `/en`.
- TypeScript et Biome : `nr lint`, `nr typecheck`.
- **Umami** auto-hébergé sur le même VPS pour les statistiques de visite.
- Gestionnaire de paquets : `ni` (`ni`, `nr`, `nlx`), jamais npm, pnpm ou yarn en direct.

## Où s'écrit une décision

| Ce qui vient d'être décidé | Où ça s'écrit |
|---|---|
| Une vérité produit : public, positionnement, contenu montrable, confidentialité | `PRODUCT.md` |
| Une règle d'apparence ou de mouvement | `DESIGN.md` (et son fichier compagnon) |
| Un piège de code ou une convention technique | Ce fichier, section Pièges |
| Le récit : ce qui a été essayé, mesuré, écarté | La PR ou l'issue |

Ces fichiers décrivent l'état présent. Une décision qui en corrige une autre la
remplace, au lieu de s'ajouter à côté.

## Développement en parallèle

Le dépôt est en structure bare : `.bare/` plus un répertoire par branche. Le worktree
`main/` reste sur `main` : on n'y travaille pas. Chaque sujet a son worktree, créé avec
`wt switch -c <branche>`. Les hooks de worktrunk (`.config/wt.toml`) copient les
fichiers ignorés, installent les dépendances et lancent un serveur de dev par worktree,
sur un port tiré du nom de branche : `wt list` affiche son URL. La skill `parallel-dev`
couvre la méthode.

## Refaire des captures

- **Abacus** : instance de démonstration, worktree `~/dev/pro/abacus/demo-captures`,
  `demo/run.sh` (port 3947), `demo/reset.sh` pour reconstruire la base
  `abacus_demo_portfolio`. Identifiant `lea@demo.abacus.example`, mot de passe dans
  `demo/seed.ts`. Ne jamais lire la base `abacus`, qui contient les vraies données de
  Pierre, ni appeler le connecteur MCP `abacus`.
- **estuaire.fr** : fenêtre de 1920×1200 à densité 1.5 (voir Pièges), attendre la fin du
  carrousel d'accueil (8 s environ), faire défiler la page avant une capture pleine page
  pour charger les images.

## Pièges

- **Pas de `view-transition-name` hors d'une transition native réellement utilisée.**
  Sous Firefox, un nom oublié sur une page faisait ressortir l'image de l'ancienne page à
  chaque navigation suivante.
- **Le Chromium d'agent-browser ne déclare aucune souris** (`pointer: none`) : la loupe
  et le bouton aimanté ne s'y activent pas. Celui de Playwright en déclare une, et le banc
  (`bench/motion.spec.ts`) les teste.
- **Captures d'estuaire.fr à 1920 px de large.** Entre 1280 et 1650 px environ, un lien du
  menu du site chevauche la frontière entre son panneau sombre et le fond blanc.
- **Le logotype est un SVG tracé**, pas du texte : coupe d'affichage du Bodoni en grand,
  coupe texte à la taille de la barre, où l'autre perd ses déliés.
- **Les polices viennent de `src/app/fonts/`, pas de `next/font/google`.** Google sert
  au build une autre coupe de Schibsted Grotesk que celle du CDN chargée par la
  maquette : 2 px d'écart sur une ligne d'accroche, et des retours à la ligne décalés
  sur mobile. Les fichiers locaux sont ceux de la maquette.
- **Les captures passent par `getImageProps()`, jamais par le composant `next/image`.**
  Celui-ci appelle `img.decode()` au chargement, et Chromium dessine alors floues les
  captures que les scènes épinglées redimensionnent. Le banc n'appelle `decode()` qu'une
  fois l'image à sa taille finale.
- **Le banc tourne à deux navigateurs à la fois.** À quatre, Chromium manque de temps de
  rastérisation et floute au hasard une capture redimensionnée, d'un côté ou de l'autre.
- **`next start --hostname 127.0.0.1` fait boucler le proxy.** `NextURL` ramène
  `127.0.0.1` à `localhost`, mais l'origine de la requête garde le nom passé au serveur :
  la réécriture vers `/en` passe alors pour externe, repasse par le proxy et redirige vers
  `/`. Lancer sans `--hostname`, avec `localhost` ou avec `0.0.0.0`.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

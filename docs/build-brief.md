# Brief de lancement : du prototype au site

Document de démarrage pour la session qui développe le site. Il dit d'où on part, ce qu'il
faut livrer et ce qui reste à trancher. Une fois ses points repris dans le plan, les issues
ou le code, supprimer ce fichier : il ne doit pas devenir une deuxième source de vérité.

## Objectif de la v1

Porter la maquette `mockup/` en Next.js à l'identique, la déployer sur le VPS de Pierre,
et brancher Umami. La maquette est validée : il ne s'agit pas de la redessiner.

## Ce qui est déjà là

- `PRODUCT.md`, `DESIGN.md`, `.impeccable/design.json` : produit, système visuel, jetons.
- `mockup/` : les quatre pages (accueil, Estuaire, Abacus, À propos), `styles.css`,
  `site.js`, les deux coupes du logotype en SVG (`assets/wordmark-*.svg`) et les captures
  en WebP. Pour l'ouvrir : `python3 -m http.server 8765 --directory mockup` depuis la
  racine, puis http://127.0.0.1:8765/.
- `.impeccable/surfaces/` : le contrat de direction de la maquette.

## Ce que la v1 reprend de la maquette

Tout ce que la maquette fait, et la façon dont elle le fait. En particulier :

- **Barre du haut** : masquée en descendant, de retour en remontant ; réseaux (LinkedIn,
  GitHub `hvn-p`) et bouton « Get in touch » vers LinkedIn ; menu mobile en cercle.
- **Accueil** : hero plein écran, nom qui monte à l'arrivée puis s'enfonce au défilement,
  accroche dont les derniers mots tournent, statut de disponibilité et heure de Bilbao,
  scènes de projet épinglées, aperçu de l'À propos, bandeau de contact.
- **Pages projet** et **À propos** : fiche, galeries, index de l'expérience qui suit la
  lecture, années en parallaxe.
- **Interactions** : volet de transition entre pages, piloté par le routeur (pas de
  rechargement de document) ; loupe sur les captures ; lettres qui roulent, flèches qui
  s'échangent, traits qui se tracent ; « Back to top ».

## Ce que la maquette ne fait pas encore

- **Français et espagnol** : textes à écrire, sélecteur à rendre fonctionnel.
- **Polices auto-hébergées** (la maquette passe par le CDN de Google Fonts).
- **Images** : formats et tailles adaptés à chaque écran, chargement différé hors écran.
- **Référencement** : titres, descriptions et images de partage par page et par langue,
  plan du site, page 404.
- **Umami** : le déployer sur le VPS et l'intégrer au site.
- Les éléments marqués `FIXME: fake` dans la maquette.

## À trancher avec Pierre avant de coder la partie concernée

- **Nom de domaine.**
- **VPS et outil de déploiement.** Abacus passe par Dokploy sur le VPS `pikmine` : même
  chose ici, ou autre ?
- **Adresses par langue** : préfixe (`/fr`, `/es`) ou autre schéma, et langue servie par
  défaut à un visiteur francophone ou hispanophone.
- **Textes en français et en espagnol** : qui les écrit, et qui les relit.

## Ressources

- **Instance de démonstration d'Abacus**, pour refaire des captures : worktree
  `~/dev/pro/abacus/demo-captures`, `demo/run.sh` (port 3947), `demo/reset.sh` pour
  reconstruire la base `abacus_demo_portfolio`. Identifiant `lea@demo.abacus.example`, mot
  de passe dans `demo/seed.ts`. Ne jamais lire la base `abacus`, qui contient les vraies
  données de Pierre, ni appeler le connecteur MCP `abacus`.
- **Captures d'estuaire.fr** : fenêtre de 1920×1200 à densité 1.5, attendre la fin du
  carrousel d'accueil (8 s environ), faire défiler la page avant une capture pleine page
  pour charger les images.
- **Skill `impeccable`** installée globalement, sans son hook de design.

## Méthode

1. Commencer par un plan, validé avec Pierre, avant d'écrire du code.
2. Un worktree par sujet (`wt switch -c <branche>`), et les hooks `.config/wt.toml` dès que
   l'application existe.
3. Vérifier chaque écran contre la maquette, côte à côte, à 1440×900 et à 390×844, en
   mouvement normal et en mouvement réduit.
4. Tester aussi dans Firefox : Pierre navigue avec Zen, qui repose sur Firefox.

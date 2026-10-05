---
name: Pierre Hervelin, portfolio
description: Vitrine de projets sombre et sobre, construite comme un site d'agence.
colors:
  ground: "#0D0D0E"
  surface: "#161618"
  ink: "#EDEBE6"
  ink-muted: "#A8A59E"
  ink-quiet: "#8E8B85"
  ink-bright: "#FFFFFF"
  hairline: "rgba(237, 235, 230, 0.12)"
  hairline-strong: "rgba(237, 235, 230, 0.28)"
  status-online: "#5BD68A"
typography:
  display:
    fontFamily: "Schibsted Grotesk, sans-serif"
    fontSize: "clamp(2.75rem, 6.4vw, 6rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  statement:
    fontFamily: "Schibsted Grotesk, sans-serif"
    fontSize: "clamp(2.6rem, 5.2vw, 6rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Schibsted Grotesk, sans-serif"
    fontSize: "clamp(2.75rem, 7vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Schibsted Grotesk, sans-serif"
    fontSize: "clamp(2rem, 3.4vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  section:
    fontFamily: "Schibsted Grotesk, sans-serif"
    fontSize: "clamp(1.5rem, 2.4vw, 2rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  lede:
    fontFamily: "Schibsted Grotesk, sans-serif"
    fontSize: "clamp(1.125rem, 1.6vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Schibsted Grotesk, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Schibsted Grotesk, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.5
  caption:
    fontFamily: "Schibsted Grotesk, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.5
  accent-serif:
    fontFamily: "Bodoni Moda, serif"
    fontWeight: 500
    letterSpacing: "-0.02em"
rounded:
  frame: "14px"
  scene: "16px"
  focus: "10px"
  pill: "999px"
spacing:
  gutter: "clamp(1.25rem, 4vw, 4rem)"
  bar: "5rem"
  bar-mobile: "4.25rem"
  container: "90rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.95rem 1.4rem"
  button-primary-hover:
    backgroundColor: "{colors.ink-bright}"
    textColor: "{colors.ground}"
  button-nav:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    rounded: "{rounded.pill}"
    padding: "0.6rem 1.05rem"
  link-secondary:
    textColor: "{colors.ink-muted}"
    typography: "{typography.label}"
  link-secondary-hover:
    textColor: "{colors.ink}"
  frame:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.frame}"
  menu-panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-muted}"
---

# Design System: Pierre Hervelin, portfolio

## Overview

**Creative North Star: "La maquette fait foi, pixel par pixel"**

La référence de ce système n'est pas une métaphore : c'est la maquette validée par Pierre le 2026-09-30, dans `mockup/` (`styles.css`, `site.js`, les quatre pages). Toute implémentation, en Next.js ou ailleurs, reproduit ce rendu exactement, composant par composant et mouvement par mouvement. Quand ce document et la maquette divergent, la maquette gagne ; quand un cas n'y figure pas, on l'étend dans sa grammaire, on n'en invente pas une autre.

Le monde est une vitrine de projets sombre et sobre, au niveau de finition de trois sites d'agence cités par Pierre (hello-superchouette.com, sobha-privy-collection.com, gilhuybrecht.com). Le fond est presque noir, l'interface se tient en retrait, et la seule couleur vient des captures des projets. Le mouvement est la signature : chaque interaction répond, mais rien ne bouge sans raison.

Refusé et à ne pas réintroduire : une palette colorée (la v1 en outremer et vermillon), le CV interactif comme forme principale, les projets présentés en cartes, le texte posé au-dessus des images ou sur une image dès l'arrivée d'une scène, les halos lumineux en fond.

**Key Characteristics:**
- Fond presque noir, encres chaudes à trois niveaux, filets très discrets.
- Une seule famille de texte (Schibsted Grotesk), et un italique Bodoni réservé à l'identité.
- Les projets occupent l'écran en grand ; le texte ne fait qu'étiqueter.
- Des micro-interactions précises : lettres qui roulent, flèches qui s'échangent, loupe sur les captures.
- Des transitions de page qui couvrent, nomment la destination, puis se lèvent.

## Colors

Une palette neutre et chaude sur un noir teinté ; la couleur appartient aux projets, jamais à l'interface.

### Primary
- **Encre chaude** (ink) : tout le texte principal, le fond des boutons, le focus visible. Contraste 16:1 sur le fond.

### Secondary
- **Vert statut** (status-online) : uniquement le point « Open to freelance missions », qui pulse comme un statut en ligne. C'est un état, pas une décoration.

### Neutral
- **Fond d'encre** (ground) : le fond de toutes les pages et de la barre du haut une fois défilée (à 94 % d'opacité).
- **Surface** (surface) : le volet de transition, le menu mobile, le fond des cadres d'images en attente de chargement.
- **Encre atténuée** (ink-muted) : texte secondaire, descriptions de projets, liens de navigation au repos. 7,3:1 sur le fond.
- **Encre discrète** (ink-quiet) : légendes, métadonnées, libellés de faits. 5,3:1 au plus bas sur la surface.
- **Blanc pur** (ink-bright) : seulement le survol des boutons pleins.
- **Filet** (hairline) et **filet appuyé** (hairline-strong) : séparateurs de sections, contour intérieur des cadres, trait de repos sous les liens texte.

### Named Rules
**La règle du travail qui colore.** Aucun aplat de couleur dans l'interface. Si un écran paraît terne, c'est aux captures de porter la couleur, pas au décor.

**La règle du point vert unique.** Le vert n'existe qu'à un endroit : le statut de disponibilité. Il ne devient ni accent, ni lien, ni bouton.

## Typography

**Display Font:** Schibsted Grotesk (repli : sans-serif)
**Body Font:** Schibsted Grotesk (repli : sans-serif)
**Identity Font:** Bodoni Moda italique, dans le logotype et pour la page courante du menu mobile

**Character:** un grotesque d'actualité, net et un peu serré en grand corps, face à un Didone italique à fort contraste qui signe le nom. La tension entre les deux est l'identité.

### Hierarchy
- **Display** (600, clamp(2.75rem, 6.4vw, 6rem), 1.02) : titres de page, « Selected work », « Have a mission in mind? ».
- **Statement** (600, clamp(2.6rem, 5.2vw, 6rem), 1.02) : l'accroche du hero, dont les derniers mots tournent. Sous 390px de large, elle suit la largeur de l'écran pour que la plus longue phrase tournante tienne sur une ligne.
- **Headline** (600, clamp(2.75rem, 7vw, 6rem), 0.92) : titres de projet dans les scènes ; en scène épinglée il part de clamp(6rem, 16vw, 17rem) et se réduit à 68 px au plus.
- **Title** (600, clamp(2rem, 3.4vw, 3rem), 1.05) : entreprises du parcours.
- **Section** (600, clamp(1.5rem, 2.4vw, 2rem), 1.15) : titres de section secondaires.
- **Lede** (400, clamp(1.125rem, 1.6vw, 1.375rem), 1.5) : chapeaux, 44 à 52 caractères de large au plus.
- **Body** (400, 1.0625rem, 1.6) : texte courant, 56 à 66 caractères de large.
- **Label** (400, 0.9375rem) et **Caption** (400, 0.8125rem) : navigation, faits, légendes.

### Named Rules
**La règle du logotype tracé.** « Pierre Hervelin » n'est jamais du texte composé : c'est un SVG tiré des contours des polices (`mockup/assets/wordmark-display.svg` en grand, `wordmark-text.svg` à la taille de la barre), une lettre par tracé. La coupe d'affichage du Bodoni perd ses déliés sous 200 px de large ; en dessous, on utilise la coupe texte.

**La règle de l'italique rare.** Le Bodoni italique ne sert qu'à l'identité : le nom, et la page courante dans le menu mobile. Jamais pour un titre ou un paragraphe.

## Layout

Un conteneur de 90rem centré, avec une gouttière fluide (clamp(1.25rem, 4vw, 4rem)). La barre du haut fait 5rem (4.25rem sous 48rem).

- **Hero** : toute la hauteur de l'écran moins la barre. L'accroche et la colonne de disponibilité sont regroupées en bas, juste au-dessus du nom en pleine largeur, puis une ligne de pied (« Scroll to see the work »). Sur un téléphone trop court pour ce dessin (moins de 736px de haut, mesurés à l'arrivée), espacements et accroche se resserrent, et sous 620px la phrase d'introduction quitte le hero : le nom reste sur le premier écran.
- **Scènes de projet** : une par projet, 380vh de défilement, dont l'écran reste épinglé. Le cadre d'image mesure la largeur du conteneur moins les gouttières, et 70 % de la hauteur d'écran au plus, plafonné à la hauteur réelle de la capture (ratio 16:10). Sur un écran haut, le bloc cadre et étiquette se centre verticalement. L'étiquette (titre, description, fiche, lien) vit sous le cadre, jamais au-dessus. Sans épinglage (sous 56rem, ou en mouvement réduit), les scènes se suivent et chacune commence par le nom et le numéro du projet, puis ses captures, puis la description, la fiche et le lien : ses captures ne se lisent jamais comme celles du projet précédent.
- **Pages projet** : en-tête, bande de faits en grille automatique (colonnes de 11rem au moins), galerie en pleine largeur, en deux colonnes, ou en paire bureau et mobile.
- **À propos** : grille 1fr / 2fr ; index de l'expérience fixe à gauche, entrées à droite.
- **Points de rupture** : 48rem (barre mobile, grilles en une colonne), 56rem (fin de l'épinglage des scènes), 80rem (sources et stack en colonne dédiée).

## Elevation & Depth

Le système est plat et tonal. La profondeur vient du passage du fond à la surface, du recul d'une image recouverte (échelle réduite de 6 % et opacité en baisse) et de la mise en pause des images sous la loupe (luminosité à 80 %). Seuls deux éléments portent une ombre.

### Shadow Vocabulary
- **Loupe** (`box-shadow: 0 0 0 1px rgba(237, 235, 230, 0.55), 0 22px 48px -14px rgba(0, 0, 0, 0.8)`) : l'objet qui flotte au-dessus des captures.
- **Contour de cadre** (`box-shadow: inset 0 0 0 1px rgba(237, 235, 230, 0.12)`, dessiné par-dessus l'image) : garde le bord d'une capture sombre sur le fond sombre.

### Named Rules
**La règle du plat par défaut.** Pas d'ombre au repos. Une ombre signale un objet qui flotte réellement (la loupe), jamais une carte.

## Shapes

Des angles doux et constants : 14px pour les cadres d'images, 16px pour le cadre d'une scène épinglée, des pilules (999px) pour les boutons et les petits contrôles, des cercles pour les icônes sociales, le point de statut et la loupe. Les séparations sont des filets d'un pixel, jamais des bordures de couleur.

## Components

### Buttons
- **Shape :** pilule (999px).
- **Primary :** fond encre, texte fond d'encre, 600, padding 0.95rem 1.4rem ; version barre de navigation en padding 0.6rem 1.05rem et 0.9375rem.
- **Hover :** fond blanc pur ; le bouton se penche vers le pointeur (au plus 12 % de l'écart horizontal et 20 % du vertical), puis revient en 0.7s.
- **Contenu :** toujours un libellé et une flèche ; lettres qui roulent au survol, flèche qui s'échange.

### Links
- **Texte :** libellé qui roule lettre par lettre (0.55s, décalage de 14 ms par lettre, 220 ms au plus) et passe à la ligne entre deux mots quand il ne tient pas, trait qui se trace depuis la gauche au survol et repart vers la droite. Le lien texte principal garde un trait de repos en filet appuyé. Espace de 0.35em entre les lettres et le trait.
- **Flèches :** deux copies superposées ; la première sort dans sa direction, la seconde arrive derrière (diagonale pour ↗, horizontale pour →, verticale pour ↑).
- **Boîte des lettres :** chaque lettre tient dans une boîte de 1.2em, pour que le centre des capitales tombe au centre du contrôle et s'aligne sur la flèche.

### Navigation
- **Barre du haut :** fixe, transparente en haut de page, fond d'encre à 94 % et filet dès qu'on défile. Elle se masque quand on descend et revient dès qu'on remonte.
- **Contenu :** logotype à gauche ; à droite Work, About, puis le groupe réseaux et contact (icônes LinkedIn et GitHub professionnel, bouton « Get in touch »), puis les langues. Sur l'accueil, le logotype de la barre n'apparaît qu'une fois le grand nom du hero enfoncé.
- **Mobile :** logotype et bouton « Menu » seulement. Les deux traits se rejoignent puis pivotent en croix, le libellé roule vers « Close ». Le menu s'ouvre en cercle depuis le bouton (0.8s ; fermeture en 0.5s), sur la surface ; les liens montent en très grand un à un, la page courante en Bodoni italique ; en bas, disponibilité, réseaux et langues.

### Frames and lens
- **Cadre :** surface, 14px, image en `object-fit: cover` calée en haut, contour intérieur en filet.
- **Loupe :** au-dessus d'une capture de projet, le curseur natif disparaît au profit d'une loupe de 13rem qui suit le pointeur avec un lissage (facteur 0.24 par image), grossit ×1.9, porte un anneau de texte tournant (« Open project · nom · », 16s par tour) sur une couronne sombre. Pointeur précis uniquement.

### Project scenes
Le titre seul et très grand au centre ; au défilement il rétrécit et descend à sa place d'étiquette pendant que la capture s'ouvre au-dessus depuis une ligne médiane, en léger dézoom ; puis la description, la fiche et le lien arrivent, puis les captures suivantes montent en volet, chacune descendant lentement le long de sa page. Légende et compteur (« 2 / 3 ») sous le cadre, à droite.

### Page transition
Un volet couvre la page (bande d'encre en tête, puis panneau de surface, 0.55s), affiche la destination en très grand avec un filet de chargement, puis se lève sur la nouvelle page (0.75s). La navigation ne part qu'à la fin réelle de la fermeture ; le volet passe alors dans un état fermé figé. Dans l'implémentation Next.js, le volet est piloté par le routeur, sans rechargement de document.

### Signature details
- **Hero :** les lettres du nom montent une à une à la première arrivée, puis s'enfoncent sous la ligne de base au défilement.
- **Accroche :** « I build AI systems. / with AI. / end to end. » tourne toutes les 2.8s.
- **Disponibilité :** point vert qui pulse, à côté de l'heure locale de Bilbao en direct.
- **Expérience :** index fixe qui suit la lecture avec un filet de progression, grandes années en contour qui défilent en parallaxe derrière le texte.
- **Pied de page :** « Back to top » au centre, avec défilement doux.

## Do's and Don'ts

### Do:
- **Do** reproduire la maquette `mockup/` au pixel près ; en cas de doute, ouvrir la page et mesurer.
- **Do** laisser la couleur aux captures des projets et garder l'interface dans les encres et filets.
- **Do** garder le texte d'une scène de projet sous l'image ; seuls le nom et le numéro du projet passent avant ses captures, et seulement sans épinglage.
- **Do** donner à chaque mouvement une alternative en mouvement réduit : pas de loupe, pas d'épinglage, fondus à la place des déplacements.
- **Do** tenir le contraste du texte à 4.5:1 au moins, y compris pour les légendes.

### Don't:
- **Don't** introduire une couleur d'accent ; la v1 colorée a été refusée.
- **Don't** présenter les projets en cartes, ni poser le titre d'un projet sur son image à l'arrivée.
- **Don't** afficher de citations de sources du type « Source : CV ».
- **Don't** remettre de halos ou de lumières d'ambiance en fond ; ils ont été retirés.
- **Don't** laisser traîner de `view-transition-name` hors d'une vraie transition native : sous Firefox, un nom oublié sur une page suffisait à faire ressortir l'image de l'ancienne page à chaque navigation.

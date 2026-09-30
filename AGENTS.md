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

## Principes

- **Le travail d'abord.** Les projets s'affichent en grand ; l'interface se tient en
  retrait et ne porte aucune couleur d'accent.
- **Accessible, sans exception.** Contraste de 4.5:1 au moins, navigation au clavier,
  focus visible, et une alternative en mouvement réduit pour chaque animation.
- **Rien d'inventé.** Pas de témoignage, de client, de chiffre ni de rôle qui ne vienne
  de `PRODUCT.md` ou de Pierre. Les captures d'Abacus viennent uniquement d'une instance
  de démonstration remplie de données fictives.
- **Le français s'arrête aux documents.** Ce que lit un visiteur est dans la langue qu'il
  a choisie. Code, identifiants, noms de fichiers, commentaires et messages de commit sont
  en anglais. Les documents du dépôt (`PRODUCT.md`, `DESIGN.md`, ce fichier) sont en
  français.

## Stack

- **Next.js** (App Router) et React, hébergés sur le VPS de Pierre. Un backend est
  possible, mais la v1 n'en a pas besoin.
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
`wt switch -c <branche>`. Les hooks de worktrunk (`.config/wt.toml` : fichiers ignorés à
copier, installation des dépendances, serveur de dev par worktree) sont à écrire dès que
l'application existe ; la skill `parallel-dev` couvre la méthode.

## Pièges

- **Pas de `view-transition-name` hors d'une transition native réellement utilisée.**
  Sous Firefox, un nom oublié sur une page faisait ressortir l'image de l'ancienne page à
  chaque navigation suivante.
- **Chromium sans affichage ne déclare aucune souris** (`pointer: none`) : tout ce qui
  dépend de `pointer: fine` (loupe, bouton aimanté) se teste dans une fenêtre réelle.
- **Captures d'estuaire.fr à 1920 px de large.** Entre 1280 et 1650 px environ, un lien du
  menu du site chevauche la frontière entre son panneau sombre et le fond blanc.
- **Le logotype est un SVG tracé**, pas du texte : coupe d'affichage du Bodoni en grand,
  coupe texte à la taille de la barre, où l'autre perd ses déliés.

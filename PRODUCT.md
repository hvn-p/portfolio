# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React, imposé par Pierre. Next.js, hébergé sur le VPS de Pierre avec Dokploy (décision du 2026-10-04, qui remplace Vercel). Un backend reste possible. Statistiques de visite avec Umami, auto-hébergé sur ce même VPS.

## Users

Visiteur principal : un employeur qui recrute un développeur en CDI, et se renseigne sur Pierre avant un entretien ou après avoir reçu sa candidature (décision du 2026-10-20, qui remplace le client freelance). Deux profils :

- celui qui décide de l'embauche et juge le fond : CTO, tech lead, engineering manager, fondateur ;
- celui qui trie les candidatures : recruteur interne ou cabinet de recrutement.

Visiteur secondaire : un client pour une mission freelance longue (plus de 6 mois) ou un petit projet au forfait. Le site ne lui parle qu'en retrait.

Aucun marché ni pays visé : Pierre cherche un poste en télétravail ou sur place, et peut changer de pays. Le site ne dit pas ses préférences (télétravail, salaire, pays) : elles servent à choisir entre des offres, pas à se présenter. Il ne dit pas non plus où Pierre vit : ni ville ni pays, seulement son heure locale (décision du 2026-10-20 ; une entreprise qui attend quelqu'un sur place écarterait sinon une candidature pour une raison qui n'en est pas une).

Les textes suivent la base de l'écriture des candidatures de Pierre (skill `application-writing` du dépôt `brujula`) : son projet professionnel d'abord (partir de l'utilisateur, puis l'architecture et l'infrastructure, l'IA qui traverse les deux, un produit à voir grandir), ses réalisations comme preuves ; le niveau métier, technos et résultats plutôt que le détail d'implémentation ; jamais de formule qui balaie un parcours « de X à Y ». Une réalisation ne se cite que si elle compte à l'échelle du projet : une petite fonctionnalité, mise en avant, paraît exagérée (Pierre, 2026-10-21, à propos de la collecte côté client de CarbonScore).

## Product Purpose

Site vitrine de Pierre, construit comme un site d'agence : il montre d'abord ses projets concrets, chacun avec sa propre page, puis qui il est. Ce n'est pas un CV interactif (correction de Pierre du 2026-09-29).

Structure : un accueil qui met trois projets en avant, une page Work qui les montre tous, une page par projet, une page À propos qui porte le parcours, une annexe (mods Minecraft, projets personnels) et le contact.

Le site a réussi si le visiteur repart convaincu que Pierre apportera à son équipe, et sait comment le contacter.

## Positioning

Positionnement affiché : **développeur full stack**. Deux différenciateurs :

- l'**IA appliquée** : conception de systèmes IA en production (serveurs MCP, agents, harnais de validation), développement piloté par les specs, et développement en parallèle avec des agents (plusieurs tâches menées en même temps, chacune confiée à un agent dans son propre worktree, avec son serveur et sa base ; Pierre les relit et les fusionne). L'IA écrit le code plus vite ; ce qui rend Pierre utile dans la boucle, c'est de choisir l'architecture que le problème demande (formulation de Pierre du 2026-10-01, à faire passer dans les textes sans la citer telle quelle). Le **harnais** est la base du développement par IA : instructions, données, tests exécutés, langage choisi ; c'est lui qui rend une IA performante ou non, et c'est ce que Pierre construit (2026-10-01) ;
- le **numérique responsable** : près de cinq ans sur des SaaS de climate tech et d'impact ESG du numérique (CarbonScore, puis Fruggr), avec des habitudes d'éco-conception.

Ce qu'un visiteur doit retenir en dix secondes : full stack, programmation avec l'IA, développement de systèmes d'IA. Le numérique responsable reste un différenciateur, présenté plus loin.

Pierre développe **avec** l'IA et construit ce qui la rend fiable ; il ne conçoit ni n'entraîne de modèles. Le site ne l'appelle jamais « AI Engineer » ni « ML Engineer ».

## Operating Context

Le site vit à côté des autres canaux de Pierre : le CV en PDF, le profil LinkedIn, ses deux comptes GitHub (`hvn-p` pour le professionnel, `payangar-dev` pour le personnel), ses profils de mods sur CurseForge et Modrinth, et ses profils sur les plateformes d'emploi. Un visiteur arrive souvent depuis une candidature et passe de l'un à l'autre, donc le site dit la même chose qu'eux.

## Capabilities and Constraints

- **Langues** : anglais par défaut, français et espagnol au choix du visiteur.
- **Projets** (Pierre, 2026-10-21) : l'accueil met en avant Fruggr, CarbonScore et Abacus, dans cet ordre, en scènes épinglées, puis renvoie vers la page Work. Celle-ci les montre tous, en grille : Fruggr (ses modules AI Governance, Accessibility et Ecodesign, dont le serveur MCP, la télémétrie de l'usage de l'IA et le scanner d'accessibilité), CarbonScore, Abacus, le site d'Estuaire, puis les projets en cours, baudrier et orchestrator, chacun avec une page courte qui dit ce qui existe déjà et ce qui reste à faire. Les autres projets personnels, dont les mods Minecraft, vont dans l'annexe.
- **Un projet se présente sans dépendre d'une image.** Tous n'en ont pas de bonnes : Fruggr et CarbonScore n'ont que des visuels marketing, les projets en cours n'en ont pas. Un projet sans image n'est pas mis en scène sur l'accueil ; sur la page Work, son cadre porte une phrase à la place, et sa page tient sur ses sections de texte.
- **Page À propos** : le parcours (entreprises, rôles, résultats), les compétences, la formation et les langues. Elle met Pierre en valeur sans long paragraphe : une ligne de résultat par expérience, le détail en dessous.
- **Pas de citation de sources** du type « Source : CV » : Pierre les a refusées. La preuve, ce sont les projets montrés.
- **Pas de chiffres d'activité** (nombre de mises en production, de PR, de tests) ni de pourcentage de couverture de tests : le site dit ce que Pierre a fait et décrit la méthode (chaque évolution livrée avec ses tests). Les années d'expérience restent.
- **Jamais « expert »** : le site dit ce que Pierre a mis en place, sans le déclarer expert de rien.
- **Captures d'Abacus** : uniquement sur une instance de démonstration remplie de données fictives. Jamais les vraies données de Pierre.
- **Fruggr et CarbonScore** (Digital4Better, produits fermés ; CarbonScore appartient au même groupe). Le site décrit le produit, le rôle de Pierre, son périmètre et ses résultats, au niveau de détail de son profil. Les images sont uniquement les visuels que Fruggr publie lui-même sur fruggr.io, jamais une capture prise par Pierre, et jamais un visuel où apparaît un vrai client (décision du 2026-10-20, qui remplace « sans captures d'écran »). Ces visuels sont des maquettes marketing aux chiffres de démonstration : le site ne les présente pas comme des données réelles. Les modules de Fruggr portent leur nom public (AI Governance, Accessibility, Ecodesign) ; « Fruggr Classic » est un nom interne qui n'apparaît jamais sur le site. Pas de code ni de détail interne. Ce dépôt étant public, cette fiche suit la même règle.
- **Freelance, en retrait** : le statut et les appels au contact parlent d'un poste. Une mention discrète dit que les missions longues restent possibles ; aucune ne parle de TJM ni de mission courte.
- **Contact, v1** : un bouton « Get in touch » dans la barre de navigation, à la place d'un lien « Contact », et en bas de page. Les deux mènent au profil LinkedIn. L'adresse e-mail professionnelle, phvn.pro@outlook.com, figure aussi dans le bloc de contact (2026-10-01).
- **Réseaux dans la barre** : LinkedIn et le GitHub professionnel `hvn-p`, toujours accessibles. Le GitHub personnel `payangar-dev` n'apparaît que là où il a du sens (projets personnels, mods).
- **Identité publique** : `hvn-p` est le compte GitHub professionnel. Le site renvoie aussi vers le compte personnel `payangar-dev` et vers les profils de mods sur CurseForge et Modrinth. `payangar-dev` n'est donc plus anonyme : cette décision de Pierre, prise le 2026-09-28, remplace celle du 2026-08-25.
- **Concept de design** : l'idée directrice vient de Pierre. Un agent ne propose pas de concept de sa propre initiative. Il attend celui de Pierre et le sert. Pierre a choisi le format des sites d'agence (2026-09-29).

Décisions ouvertes :

- ce qui remplacera LinkedIn comme canal de contact (formulaire, prise de rendez-vous), maintenant qu'un backend est possible ;
- ce qui est montré d'Estuaire au-delà de son site web ;
- la sobriété du site lui-même. Aucun budget n'a été fixé, mais un site lourd contredirait le positionnement numérique responsable.

## Brand Commitments

- Nom : Pierre Hervelin.
- L'ambition exprimée par Pierre, telle quelle : un site « élégant, poussé en termes de design », « quelque chose d'un peu différent », « design, élégant, moderne ».
- **Thème sombre, sobre** : « un peu plus sobre, un peu plus sombre », « je préfère un site en thème sombre » (2026-09-29).
- **Format de référence** : les sites d'agence qui montrent leurs projets, une page par projet, au niveau de finition de https://www.hello-superchouette.com/, https://sobha-privy-collection.com/ et https://gilhuybrecht.com/ (choix de Pierre, 2026-09-29).
- **Refusé** : une palette colorée (outremer et vermillon, maquette du 2026-09-29) et le CV interactif comme forme principale.

## Evidence on Hand

- **Version des faits** : le profil de Pierre dans son dépôt de recherche d'emploi (`brujula`, `vault/profile/profile.md`, validé par Pierre), et le CV qui en part (`cv/content/`). Le site peut aller plus loin que le profil ; ce qu'il apporte de neuf se signale pour que le profil suive.
- **Parcours** :
  - Digital4Better, développeur full stack, depuis mars 2025, en télétravail. Produit : Fruggr, suite SaaS européenne de pilotage de l'impact ESG du numérique. Pierre y est aussi administrateur de l'infrastructure Azure et en mène le DevOps, jusqu'en production : un signe de confiance à montrer (précision de Pierre du 2026-10-01).
  - TechupClimate, développeur puis lead, de novembre 2021 à mars 2025, en télétravail : alternance, puis CDD, puis CDI. Produit : CarbonScore.
  - BEA (Bureau d'enquêtes et d'analyses pour la sécurité de l'aviation civile), stage de développeur web, d'avril à juillet 2021.
- **Projets montrables** :
  - Abacus, public : https://github.com/pikmine-lab/abacus. Appli de finances personnelles auto-hébergée, avec suivi déclaratif et interface MCP. Interface web en Next.js, thème sombre. Premier commit le 2026-08-19.
  - Le site d'Estuaire, client de Pierre : https://estuaire.fr. Estuaire est un agenceur-concepteur (agencement, mobilier et présentoirs sur mesure, pour le retail, les bureaux, la scénographie et le résidentiel). Le site est en Next.js avec le CMS Sanity, prérendu, derrière Cloudflare. Dépôt public https://github.com/estuaire-hq/showcase : premier commit le 2026-03-10, les 89 commits sont de Pierre (état au 2026-09-30). Pierre en a fait le développement, pas la maquette (précision de Pierre du 2026-09-30).
  - La gouvernance de l'IA de Fruggr : Pierre a posé les fondations du module et en a mené la phase de construction ; le module a ensuite beaucoup évolué. Visuels publics sur https://www.fruggr.io/en/ai-governance/.
  - CarbonScore : le produit de Pierre de 2021 à 2025, maintenu ensuite chez Digital4Better sous le nom « CarbonScore by Fruggr ». Visuels publics sur fruggr.io (module Digital Workplace).
  - En cours, publics, à ne pas présenter comme aboutis : baudrier (https://github.com/hvn-p/baudrier), plugin Claude Code pour le harnais d'un agent de code, et orchestrator (https://github.com/hvn-p/orchestrator), outil en Rust qui fait tenir des sessions Claude Code parallèles dans les ressources d'une machine.
- **Mods Minecraft**, pour l'annexe :
  - GitHub : https://github.com/payangar-dev (25 dépôts publics, dont les sources des mods) ;
  - Modrinth : https://modrinth.com/user/Payangar (21 projets : mods, resource packs, modpacks) ;
  - CurseForge : https://www.curseforge.com/members/payangar_dev (plus d'un million de téléchargements d'après le CV ; le site bloque la vérification automatique).
- **Autres projets personnels**, pour l'annexe : un éditeur de textures développé par les specs, un outil personnel d'analyse boursière avec IA, un monde 3D multijoueur dans le navigateur, un jeu Godot en cours, un homelab et un VPS.
- **Source privée, jamais publiée** : l'historique git des dépôts Fruggr sur le poste de Pierre. Il ne sert qu'à mettre à jour la description au niveau du profil.
- **Absences** : aucun témoignage client, aucun logo client autorisé, aucune métrique au-delà de celles du profil, aucune photo fournie. Ne rien inventer de tout ça.

## Product Principles

1. **Montrer le travail.** Chaque compétence avancée s'appuie sur un projet montré plutôt que sur une affirmation : en images quand il y en a, sinon par ce que Pierre y a construit.
2. **Écrit pour l'employeur.** Le site répond à la question « que va-t-il apporter à mon équipe ? » : ce que Pierre a construit, ce qu'on lui a confié, comment il travaille.
3. **Le site est lui-même une preuve.** Sa qualité de réalisation démontre ce que Pierre sait faire en front.
4. **Discret sur ce qui est fermé.** Le travail sous confidentialité se raconte par le rôle et les résultats, et ne se montre que par ce que l'entreprise publie elle-même.
5. **Une seule version des faits.** Le site, le CV, LinkedIn et les candidatures disent la même chose.

## Accessibility & Inclusion

Le site doit être accessible : c'est une exigence ferme de Pierre, qui a lui-même travaillé sur un outil d'audit d'accessibilité (RGAA).

La priorité, fixée par Pierre le 2026-09-30 : un visiteur non voyant utilise tout le site au lecteur d'écran et au clavier. Chaque capture a son alternative textuelle, chaque lien réduit à une icône a son libellé, le décor est masqué aux lecteurs d'écran, les titres et les zones de la page sont structurés, et chaque changement de page est annoncé. Le contraste et les tailles de texte comptent moins ; la maquette les tient déjà.

# Contribuer

## Prérequis

- **Node.js 20.9+** (exigé par Next.js 16 : `engines.node >=20.9.0`)
- npm (le dépôt versionne `package-lock.json`)

```bash
npm install
npm run dev
```

Aucun fichier `.env` n'est nécessaire : le site est statique et n'appelle aucun
service authentifié. Les seules variables lues le sont par les tests.

## Scripts

Voir la table dans le [README](../README.md#scripts).

Deux pièges connus :

- `npm start` **ne fonctionne pas**. Next refuse `next start` quand
  `output: 'export'` est actif. Pour vérifier un build de production :
  `npm run build && npx serve@latest out`.
- `npm test` **démarre le serveur de dev lui-même** (`webServer` dans
  `playwright.config.ts`, avec `reuseExistingServer`). Il ne faut donc pas le
  lancer à la main avant.

## Où se trouve quoi

Le contenu éditorial est centralisé dans `src/lib/` — c'est là qu'on modifie un
tarif, un coach, une coordonnée ou un créneau, jamais dans les composants.

| Fichier | Contenu |
|---|---|
| `src/lib/data.ts` | Coachs, offres et tarifs, coordonnées, réseaux sociaux |
| `src/lib/planning.ts` | Créneaux hebdomadaires et règles d'accès par offre |
| `src/lib/metadata.ts` | Métadonnées SEO, domaine du site |

Le planning mérite une note : la couleur d'un créneau **et** les offres qui y
donnent accès sont portées par sa catégorie (`planningCategories`), jamais
recopiées sur chaque créneau. Ajouter un cours = ajouter une entrée dans
`planningDays` avec la bonne catégorie.

## Tests

```bash
npm test                      # tous les tests
npx playwright test --ui      # mode interactif
npx playwright show-report    # dernier rapport HTML
```

Les navigateurs Playwright doivent être installés une fois :

```bash
npx playwright install
```

> Sur cette machine, l'installation échoue si un serveur de dev tourne.
> L'arrêter d'abord.

Variables lues par la configuration de test :

| Variable | Requise | Rôle | Défaut |
|---|---|---|---|
| `BASE_URL` | Non | URL visée par les tests | `http://localhost:3000` |
| `CI` | Non | Active 2 tentatives, 1 worker, `forbidOnly`, et interdit de réutiliser un serveur déjà lancé | *(non définie)* |

## Style et qualité

```bash
npm run lint       # ESLint (eslint-config-next)
npx tsc --noEmit   # vérification des types
```

Il n'y a ni formateur imposé ni hook de pré-commit : suivre le style des
fichiers voisins. Les commentaires du projet sont en français.

## Commits

Convention *conventional commits*, description en français :

```
feat(planning): bandeau de filtres défilant sur téléphone
fix(footer): l'e-mail débordait de la page sur toutes les pages
style(planning): filtres 22px sur mobile, 42px sur ordinateur
```

Portées utilisées jusqu'ici : `planning`, `tarifs`, `footer`, `contact`, `mobile`.

Le projet travaille **directement sur `main`**, sans branche de fonctionnalité,
et pousse sur `origin/main`.

## Avant de pousser

- [ ] `npm run lint` passe
- [ ] `npx tsc --noEmit` passe
- [ ] `npm run build` passe
- [ ] Vérifié sur téléphone **et** ordinateur si le rendu change
- [ ] Aucun débordement horizontal (`document.documentElement.scrollWidth` doit
      valoir `clientWidth`) — une chaîne longue sans espace suffit à casser
      toutes les pages, voir `src/components/EmailLink.tsx`

## Mentions légales

Toute modification de `src/app/mentions-legales/page.tsx` doit être validée par
le propriétaire du site avant d'être poussée.

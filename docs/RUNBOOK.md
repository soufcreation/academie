# Exploitation

Site **statique** sur **OVH mutualisé** (Apache). Pas de serveur applicatif, pas
de base de données : une mise en ligne consiste à remplacer des fichiers.

## Mettre en ligne

### 1. Construire

```bash
npm install
npm run lint
npx tsc --noEmit
npm test
npm run build
```

`npm run build` écrit le site complet dans `out/`. Ce dossier est ignoré par git
et se régénère à chaque build — il n'est jamais versionné.

### 2. Vérifier le build en local

```bash
npx serve@latest out
```

`npm start` ne fonctionne pas ici (incompatible avec `output: 'export'`).

Points à contrôler avant d'envoyer :

- `out/.htaccess` est présent — c'est lui qui porte le HTTPS, les en-têtes de
  sécurité, le routage et le cache. Sans lui, toutes les URL autres que `/`
  renvoient une 404 Apache.
- `out/404/index.html` est présent — c'est la cible de la règle 404 du
  `.htaccess`.

### 3. Envoyer sur OVH

> **À compléter.** La méthode de transfert n'est enregistrée nulle part dans le
> dépôt (aucun script, aucune CI, aucune config FTP). Documenter ici la
> procédure réellement utilisée : outil, hôte, identifiant, dossier cible
> (typiquement `www/`), et si l'envoi remplace ou fusionne le contenu.

Le contenu de `out/` doit se retrouver **à la racine web** du site, `.htaccess`
compris. Attention : beaucoup de clients FTP masquent les fichiers commençant
par un point.

### 4. Vérifier en production

- <https://academie-europeenne.eu> répond
- Une page profonde répond directement : <https://academie-europeenne.eu/planning/>
- Une URL inexistante affiche bien la 404 du site, pas celle d'Apache
- `https://www.academie-europeenne.eu` redirige vers le domaine sans `www`
- La carte Google et la vidéo Cloudinary s'affichent (elles dépendent de la CSP)

## Surveillance

Aucune supervision automatique n'est en place. Le site n'ayant pas de
back-end, les pannes réalistes sont : l'hébergement OVH, le domaine ou le
certificat SSL expiré.

## En attente : forcer HTTPS

Dans `public/.htaccess`, deux blocs sont **volontairement commentés** tant que
le SSL OVH n'est pas confirmé :

1. La redirection HTTP → HTTPS (section 1)
2. L'en-tête `Strict-Transport-Security` (section 3)

Procédure quand le certificat est en place :

1. Vérifier que <https://academie-europeenne.eu> répond en HTTPS sans avertissement.
2. Décommenter les deux `RewriteCond`/`RewriteRule` de la section 1.
3. Décommenter la ligne `Strict-Transport-Security` de la section 3.
4. Rebuild, redéployer, retester en HTTP **et** en HTTPS.

> HSTS avec `max-age=31536000` engage les navigateurs pour un an. Ne l'activer
> qu'une fois le HTTPS certainement stable : revenir en arrière est long, les
> visiteurs gardant la consigne en cache.

## Incidents courants

| Symptôme | Cause probable | Correction |
|---|---|---|
| Toutes les pages sauf l'accueil en 404 | `.htaccess` non envoyé (fichier caché) | Renvoyer `out/.htaccess` à la racine web |
| Carte ou vidéo absente | Domaine bloqué par la CSP | Ajouter l'origine dans la section 3 du `.htaccess`, rebuild, redéployer |
| Ancienne version affichée après déploiement | Cache navigateur | Le HTML est en cache 1 h ; JS/CSS portent un hash et changent de nom. Forcer un rechargement, ou attendre |
| Liste des fichiers visible dans un dossier | `.htaccess` absent | Idem première ligne — `Options -Indexes` s'y trouve |
| Page défilable horizontalement | Chaîne longue sans espace | Voir `src/components/EmailLink.tsx` |

## Retour arrière

Le site étant statique, revenir en arrière consiste à redéployer un build
antérieur :

```bash
git log --oneline          # repérer le commit visé
git checkout <commit>
npm ci && npm run build    # regénère out/ tel qu'il était
# renvoyer out/ sur OVH
git checkout main          # ne pas rester en HEAD détachée
```

Il n'y a pas de migration ni d'état serveur : le retour arrière est total et
immédiat une fois les fichiers remplacés.

## Escalade

Projet sans astreinte. Contact : le propriétaire du dépôt
(<https://github.com/soufcreation/academie>).

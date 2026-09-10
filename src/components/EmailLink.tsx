import { siteConfig } from "@/lib/data";

// L'adresse ne contient aucune espace : dans une colonne étroite elle se
// couperait au milieu d'un mot, voire déborderait de la page. Le <wbr> place
// la coupure devant l'arobase ; il reste sans effet tant que l'adresse tient
// sur une ligne, la coupure n'apparaît donc que là où la place manque.
const [localPart, domain] = siteConfig.email.split("@");

type EmailLinkProps = {
  className?: string;
};

export default function EmailLink({ className = "" }: EmailLinkProps) {
  return (
    // `min-w-0` est nécessaire dans un conteneur flex, où un élément refuse
    // par défaut de rétrécir sous la largeur de son contenu.
    <a href={`mailto:${siteConfig.email}`} className={`min-w-0 break-words ${className}`}>
      {localPart}
      <wbr />
      {`@${domain}`}
    </a>
  );
}

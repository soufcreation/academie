// Données centralisées pour le site
// À compléter au fur et à mesure

/** Configuration globale du site */
export const siteConfig = {
  name: "Académie Européenne des Sports",
  tagline: "Excellence sportive et performance",
  phone: "+33 6 82 67 25 92",
  email: "academie.europeenne.sports@gmail.com",
  address: "Centre Commercial Auchan, 11 Place André Maurois, 67200 Strasbourg",
  boutiqueLink: "https://hfc-mma.myshopify.com",
};

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

/** Items de navigation principale */
export const navigation: NavItem[] = [
  { label: "Disciplines", href: "/#disciplines" },
  { label: "Planning", href: "/planning" },
  { label: "Coachs", href: "/#coachs" },
  { label: "Partenaires", href: "/partenaire" },
  { label: "Tarifs", href: "/#tarifs" },
  { label: "Avis", href: "/#avis" },
];

/** Liste des disciplines proposées */
export const disciplines = [
  {
    id: 1,
    name: "MMA / Grappling",
    description: "Arts martiaux mixtes et combat au sol - Techniques de soumission et contrôle",
    icon: "MMA_Glove",
    image: "/icons/mma-fighter-glove.png",
  },
  {
    id: 2,
    name: "Boxe anglaise",
    description: "Boxe anglaise - Puissance, technique et entraînement",
    icon: "Boxing_Gloves",
    image: "/icons/boxing-gloves.png",
  },
  {
    id: 3,
    name: "Handi-boxe",
    description: "Boxe adaptée pour personnes en situation de handicap",
    icon: "Target",
    image: "/icons/handi-boxe.png",
  },
  {
    id: 4,
    name: "Jiu-Jitsu Brésilien",
    description: "Jiu-Jitsu Brésilien - Art martial de soumission et de défense",
    icon: "JJB_Gi",
    image: "/icons/kimono.png",
  },
  {
    id: 5,
    name: "Kick boxing - Muay thaï",
    description: "Boxes pieds-poings - Sport de combat et technique",
    icon: "Zap",
    image: "/icons/kick boxing.png",
  },
  {
    id: 6,
    name: "Cardio Bag",
    description: "Entrainement sac de frappe - Cardio endurance et technique",
    icon: "Activity",
  },
];

/** Statistiques affichées sur la page d'accueil */
export const stats = [
  { value: "6+", label: "Disciplines" },
  { value: "6", label: "Coachs experts" },
  { value: "15+", label: "Années d'expérience" },
];

export type Coach = {
  id: number;
  slug: string;
  name: string;
  discipline: string;
  experience: string;
  achievements: string;
  bio: string;
  image: string;
};

/** Liste des coachs avec leurs expériences */
export const coaches: Coach[] = [
  {
    id: 1,
    slug: "aziz-raguig",
    name: "Aziz Raguig",
    discipline: "Savate / Boxe Anglaise",
    experience: "Brevet d'État - 14 ans Équipe de France",
    achievements: "3x Champion du Monde, 3x Champion d'Europe, 8x Champion de France",
    bio: "Ancien membre de l'Équipe de France de Savate Boxe Française pendant 14 ans, Aziz transmet son exigence et son savoir-faire aux boxeurs de l'académie. Multi-médaillé sur la scène internationale, il met son expérience du haut niveau au service de chaque élève, du débutant au compétiteur.",
    image: "/coaches/azizraguig.png",
  },
  {
    id: 2,
    slug: "steeve-valente",
    name: "Steeve Valente",
    discipline: "Muay Thai",
    experience: "Kick Boxing / Muay Thai / K1",
    achievements: "10x Champion du Monde",
    bio: "Champion du Monde de Muay Thai, Steeve fait rayonner l'art des huit membres à travers des entraînements intenses et techniques. Sa pédagogie s'appuie sur des années de compétitions internationales pour développer puissance, cardio et précision.",
    image: "/coaches/steve-valente.webp",
  },
  {
    id: 3,
    slug: "christian-sardella",
    name: "Christian Sardella",
    discipline: "Jiu-Jitsu Brésilien",
    experience: "Ceinture noire",
    achievements: "3x Champion de France, 6x Champion d'Europe, 2x Vice Champion du Monde",
    bio: "Ceinture noire de Jiu-Jitsu Brésilien, Christian est un compétiteur accompli avec un palmarès exceptionnel. Il enseigne les techniques de soumission et de contrôle avec une précision qui fait la différence, aussi bien pour les loisirs que pour la compétition.",
    image: "/coaches/sardella-christian.png",
  },
  {
    id: 4,
    slug: "rayanne-essaidi",
    name: "Rayanne Essaidi",
    discipline: "MMA / Lutte",
    experience: "Athlète compétition",
    achievements: "Arts martiaux mixtes",
    bio: "Athlète de compétition en MMA et lutte, Rayanne apporte une approche moderne et combative à la préparation physique et technique. Il accompagne les combattants dans le développement de leur jeu de sol et de leur boxe.",
    image: "/coaches/rayanne-essaidi.avif",
  },
  {
    id: 5,
    slug: "salam-isbai",
    name: "Salam Isbai",
    discipline: "Entraîneur national",
    experience: "Entraîneur équipe nationale Maroc",
    achievements: "Expert combat",
    bio: "Entraîneur de l'équipe nationale du Maroc, Salam possède une vision complète du combat. Son expertise permet aux athlètes de tous niveaux de progresser rapidement grâce à des programmes structurés et exigeants.",
    image: "/coaches/salam-isbai.png",
  },
  {
    id: 6,
    slug: "olivier-dogor",
    name: "Olivier Dogor",
    discipline: "Kickboxing / MMA / Self-défense",
    experience: "Expert arts martiaux",
    achievements: "Développement capacités en situation réelle",
    bio: "Expert pluridisciplinaire en kickboxing, MMA et self-défense, Olivier développe des capacités concrètes applicables en situation réelle. Ses sessions allient condition physique, gestes techniques et gestion du stress.",
    image: "/coaches/olivier-dogor.png",
  },
];

export function getCoachBySlug(slug: string): Coach | undefined {
  return coaches.find((coach) => coach.slug === slug);
}

export type PricingPlan = {
  id: number;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  equipment: boolean;
  popular: boolean;
  pdf: string | null;
};

/** Tarifs et forfaits disponibles */
export const pricing: PricingPlan[] = [
  {
    id: 1,
    name: "Équipement",
    price: "80€",
    period: "",
    description: "Pack équipement complet",
    features: [
      "Gant Boxe ou MMA",
      "Bandage",
      "Protège dent",
      "Coquille",
      "Protège tibias",
    ],
    equipment: true,
    popular: false,
    pdf: null,
  },
  {
    id: 2,
    name: "Pack adulte +14 ans",
    price: "485€",
    period: "/an",
    description: "Boxe anglaise / MMA",
    features: [
      "Accès au cours en noir du planning",
      "Accès zone musculation",
      "Cours collectifs coaché",
    ],
    equipment: false,
    popular: true,
    pdf: "/inscription.pdf",
  },
  {
    id: 3,
    name: "Pack enfant -14 ans",
    price: "385€",
    period: "/an",
    description: "Section de 6 à 14 ans",
    features: [
      "Cours adaptés aux enfants",
      "Encadrement certifié",
      "Ambiance ludique et sécurisée",
    ],
    equipment: false,
    popular: false,
    pdf: "/inscription-14ans.pdf",
  },
  {
    id: 4,
    name: "Jiu-Jitsu Brésilien",
    price: "255€",
    period: "/an",
    description: "Team Sardella — Christian Sardella (ceinture noire)",
    features: [
      "Accès au cours en vert du planning",
      "Accès zone musculation",
      "Cours collectifs coaché",
    ],
    equipment: false,
    popular: false,
    pdf: "/inscription-jjb.pdf",
  },
  {
    id: 5,
    name: "Boxe Thaï / Muay Thaï",
    price: "435€",
    period: "/an",
    description: "Elite Boxing 67 — Steeve Valente",
    features: [
      "Accès au cours en rouge du planning",
      "Accès zone musculation",
      "Cours collectifs coaché",
      "Formule Cardio Bag : 300€/an",
    ],
    equipment: false,
    popular: false,
    pdf: "/inscription-boxe-thai.pdf",
  },
];

/** Liens vers les réseaux sociaux */
export const socialLinks = {
  facebook: "https://www.facebook.com/academie.europeenne.sports.strasbourg.hautepierre/?locale=fr_FR",
  instagram: "https://www.instagram.com/academie_europeenne_des_sports/",
};

/** Lien Google Maps / fiche Google Business (avis) */
export const googleLink = {
  url: "https://www.google.com/maps/search/?api=1&query=Acad%C3%A9mie+Europ%C3%A9enne+des+Sports+Strasbourg",
  writeReview:
    "https://www.google.com/search?hl=fr-FR&gl=fr&q=Acad%C3%A9mie+Europ%C3%A9enne+des+Sports,+11+Pl.+Andr%C3%A9+Maurois,+67200+Strasbourg&ludocid=8404187600645832720&lsig=AB86z5Waz0SbqVgXGbwvDsO4QYkO#lrd=0x4796c84a40d26669:0x74a1ac18723cc010,3",
};

export type Review = {
  id: number;
  author: string;
  rating: number;
  date: string;
  text: string;
};

/**
 * Note et volume d'avis agrégés de la fiche Google Business.
 * Valeurs relevées manuellement sur la fiche Google — à mettre à jour périodiquement.
 * Dernière mise à jour : 2026-09-09
 */
export const googleReviews = {
  average: 4.8,
  count: 297,
};

/** Sélection d'avis réels publiés sur la fiche Google */
export const reviews: Review[] = [
  {
    id: 1,
    author: "Bakta",
    rating: 5,
    date: "il y a 1 mois",
    text: "Très belle salle, personnel très sympa, bonne ambiance. Je vous la recommande fortement.",
  },
  {
    id: 2,
    author: "Jimmy Hanselmann",
    rating: 5,
    date: "il y a 4 mois",
    text: "Une tuerie, un bon moyen de s'élever, de repousser ses limites. Une équipe au top ! Une ambiance qui permet d'évoluer sans jugement, avec bienveillance et accompagnement. C'est un excellent investissement sur soi.",
  },
  {
    id: 3,
    author: "Julie Adam",
    rating: 5,
    date: "il y a 4 mois",
    text: "Salle au top et toujours propre. Accueil souriant ! Les coachs savent te mettre à l'aise, peu importe ton niveau. Respect et bonne humeur à chaque séance. Les filles, n'hésitez pas à venir.",
  },
  {
    id: 4,
    author: "Kaido Yonko",
    rating: 5,
    date: "il y a 4 mois",
    text: "L'académie est géniale, l'accompagnement des coachs et des cours est adapté à tous les profils quel que soit votre objectif. J'y vais le plus possible depuis plus d'un an, pour apprendre, progresser et m'épanouir.",
  },
  {
    id: 5,
    author: "Ahcene Yotla",
    rating: 5,
    date: "il y a 9 mois",
    text: "Une salle de boxe de grande qualité, portée par des entraîneurs à la fois compétents et pédagogues. L'ambiance y est chaleureuse, conviviale, et chaque séance se déroule dans la bonne humeur.",
  },
  {
    id: 6,
    author: "Aleksandar Lazarevic",
    rating: 5,
    date: "il y a 6 mois",
    text: "Très bon gymnase, très amusant lors de l'entraînement. Tous les entraîneurs sont expérimentés et ont des méthodes très efficaces. Merci à Bilal qui m'a montré la salle le premier jour.",
  },
  {
    id: 7,
    author: "Louis Bruno",
    rating: 5,
    date: "il y a 4 mois",
    text: "Super salle bien équipée avec un bon staff et très propre 👌",
  },
  {
    id: 8,
    author: "Sylvain Rolling",
    rating: 5,
    date: "il y a 3 ans",
    text: "Un centre de sports de combat exceptionnel. La qualité de l'entraînement et l'ambiance positive qui y règne sont impressionnantes. Les instructeurs sont compétents et attentifs, les installations modernes et bien équipées. Je recommande vivement.",
  },
];

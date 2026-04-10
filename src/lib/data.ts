// Données centralisées pour le site
// À compléter au fur et à mesure

export const siteConfig = {
  name: "Académie Européenne des Sports",
  tagline: "Excellence sportive et performance",
  phone: "+33 6 82 67 25 92",
  email: "academie.europeenne.sports@gmail.com",
  address: "Centre Commercial Auchan, 11 Place André Maurois, 67200 Strasbourg",
  whatsapp: "+33 6 82 67 25 92",
};

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export const navigation: NavItem[] = [
  { label: "Disciplines", href: "#disciplines" },
  { label: "Planning", href: "/planning" },
  { label: "Coachs", href: "#coachs" },
  { label: "Tarifs", href: "#tarifs" },
];

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
    description: "Boxe anglaise - Puissance et technique et entraînement",
    icon: "Boxing_Gloves",
    image: "/icons/boxing-gloves.png",
  },
  {
    id: 3,
    name: "Handi-boxe",
    description: "Boxe adaptée pour personnes en situation de handicap",
    icon: "Target",
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
  },
  {
    id: 6,
    name: "Cardio Bag",
    description: "Entrainement sac de frappe - Cardio endurance et technique",
    icon: "Activity",
  },
];

export const stats = [
  { value: "6+", label: "Disciplines" },
  { value: "9+", label: "Coachs experts" },
  { value: "15+", label: "Années d'expérience" },
];

export const coaches = [
  {
    id: 1,
    name: "Steeve Valente",
    discipline: "Muay Thai",
    experience: "Champion du Monde",
    achievements: "Titres internationaux",
    image: "/coaches/steve-valente.jpg",
  },
  {
    id: 2,
    name: "Aziz Raguig",
    discipline: "Savate / Boxe Anglaise",
    experience: "Brevet d'État - 14 ans Équipe de France",
    achievements: "3x Champion du Monde, 3x Champion d'Europe, 8x Champion de France",
    image: "/coaches/azizraguig.png",
  },
  {
    id: 3,
    name: "Christian Sardella",
    discipline: "Jiu-Jitsu Brésilien",
    experience: "Ceinture noire",
    achievements: "3x Champion de France, 6x Champion d'Europe, 2x Vice Champion du Monde",
    image: "/coaches/sardella-christian.jpg",
  },
  {
    id: 4,
    name: "Olivier Dogor",
    discipline: "Kickboxing / MMA / Self-défense",
    experience: "Expert arts martiaux",
    achievements: "Développement capacités en situation réelle",
    image: "/coaches/olivier-dogor.png",
  },
  {
    id: 5,
    name: "Michelle Wahler",
    discipline: "Yoga / Naturopathie",
    experience: "Professeur certifié",
    achievements: "Professeur de yoga, Praticien naturopathe, Réflexologie plantaire",
    image: "/coaches/michelle-wahler.png",
  },
  {
    id: 6,
    name: "Rayanne Essaidi",
    discipline: "MMA / Lutte",
    experience: "Athlète compétition",
    achievements: "Arts martiaux mixtes",
    image: "/coaches/rayanne-essaidi.avif",
  },
  {
    id: 7,
    name: "Salam Isbai",
    discipline: "Entraîneur national",
    experience: "Entraîneur équipe nationale Maroc",
    achievements: "Expert combat",
    image: "/coaches/salam-isbai.png",
  },
  {
    id: 8,
    name: "Vanessa Hostetter",
    discipline: "Forme et force / Haltérophilie",
    experience: "Éducateur sportif",
    achievements: "Mention haltérophilie, Educatrice Zumba et Pilates",
    image: "/coaches/vanessa-hostetter.png",
  },
  {
    id: 9,
    name: "Igor Balaur",
    discipline: "Lutte / MMA",
    experience: "Brevet d'État Educateur Spécialisé",
    achievements: "Champion de France, Champion international en Lutte",
    image: "/coaches/igor-balaur.png",
  },
];

export const pricing = [
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
      "Protège tibia",
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
    popular: true,
    pdf: "/inscription.pdf",
  },
  {
    id: 3,
    name: "Pack enfant",
    price: "385€",
    period: "/an",
    description: "Section de 6 à 14 ans",
    features: [
      "Cours adaptés aux enfants",
      "Encadrement certifié",
      "Ambiance ludique et sécurisée",
    ],
    popular: false,
    pdf: "/inscription-14ans.pdf",
  },
];

export const socialLinks = {
  facebook: "https://www.facebook.com/academie.europeenne.sports.strasbourg.hautepierre/?locale=fr_FR",
  instagram: "https://www.instagram.com/academie_europeenne_des_sports/",
};
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Règlement intérieur | Académie Européenne des Sports",
  description: "Règlement intérieur de l'Académie Européenne des Sports",
};

type Block =
  | { type: "p"; text: string }
  | { type: "sub"; text: string }
  | { type: "list"; items: string[] }
  | { type: "address"; lines: string[] };

type Article = {
  numero: string;
  titre: string;
  blocks: Block[];
};

const articles: Article[] = [
  {
    numero: "ARTICLE 1",
    titre: "OBJET ET FONCTIONNEMENT DE L’ACADÉMIE",
    blocks: [
      {
        type: "p",
        text: "Ce règlement concerne tous les adhérents de l’Académie Européenne des Sports.",
      },
      {
        type: "p",
        text: "L’Académie accueille les membres faisant une demande, après acceptation du bureau de l’Académie Européenne des Sports.",
      },
      {
        type: "p",
        text: "L’Académie Européenne des Sports est gérée par son comité directeur, élu lors de l’assemblée générale.",
      },
      { type: "p", text: "Les membres du comité directeur sont élus pour 4 ans." },
      {
        type: "p",
        text: "Les entraîneurs sont invités à toutes les réunions du comité, ainsi que les personnes assurant des fonctions au sein de l’Académie.",
      },
      {
        type: "p",
        text: "Tout membre de l’Académie peut faire partie du comité directeur s’il en exprime la demande par écrit au président un mois avant l’assemblée générale.",
      },
      { type: "p", text: "Pour être éligible au comité directeur de l’Académie, il faut :" },
      {
        type: "list",
        items: [
          "avoir plus de deux ans d’ancienneté dans l’Académie ;",
          "être majeur le jour de l’élection.",
        ],
      },
      {
        type: "p",
        text: "Toutes les activités de l’Académie concernent différents sports de combat et autres disciplines.",
      },
    ],
  },
  {
    numero: "ARTICLE 2",
    titre: "CONDITIONS D’ADHÉSION ET D’INSCRIPTION",
    blocks: [
      {
        type: "p",
        text: "Pour être adhérent de l’Académie, il faut en faire la demande par écrit, accompagnée :",
      },
      {
        type: "list",
        items: [
          "d’une photo d’identité ;",
          "d’un certificat médical de non-contre-indication à la pratique des sports de contact ;",
          "de la cotisation ;",
          "du règlement intérieur signé.",
        ],
      },
      {
        type: "p",
        text: "Seules peuvent s’entraîner les personnes aptes physiquement ayant fourni un certificat médical en début de chaque adhésion, avec la mention écrite de « non-contre-indication à la pratique des arts martiaux et sports de combat », dès la première séance d’entraînement.",
      },
      {
        type: "p",
        text: "Les compétiteurs doivent faire remplir leur passeport sportif par leur médecin spécialisé en médecine du sport.",
      },
      {
        type: "p",
        text: "Les compétiteurs inscrits en championnat doivent signer un engagement et fournir un chèque de caution.",
      },
      {
        type: "p",
        text: "Concernant les cotisations d’enfants et de personnes reconnues par la Maison Départementale des Personnes Handicapées (MDPH), un justificatif sera demandé lors de l’adhésion.",
      },
      {
        type: "p",
        text: "Chaque adhérent souhaitant s’entraîner dans les locaux de l’Académie Européenne des Sports doit avoir rempli l’ensemble des conditions d’inscription.",
      },
      {
        type: "p",
        text: "Toute personne n’ayant pas un dossier complet ne pourra pratiquer la discipline au sein du Club.",
      },
      {
        type: "p",
        text: "La communication des noms, prénoms et fichiers des adhérents constitue des données personnelles protégées par le RGPD — Règlement Général sur la Protection des Données — et la CNIL — Commission Nationale de l’Informatique et des Libertés.",
      },
    ],
  },
  {
    numero: "ARTICLE 3",
    titre: "COTISATION, PAIEMENT ET REMBOURSEMENT",
    blocks: [
      { type: "p", text: "La cotisation est annuelle." },
      {
        type: "p",
        text: "Un T-shirt est offert, marqué au nom de l’Académie, pour tous les nouveaux adhérents.",
      },
      {
        type: "p",
        text: "Les paiements de la cotisation peuvent être effectués en 2 fois, mais l’ensemble des chèques doit être remis lors de l’adhésion.",
      },
      {
        type: "p",
        text: "Le premier chèque sera de la moitié de la somme due et non remboursable après 7 jours, à compter de la date d’encaissement du premier chèque.",
      },
      { type: "p", text: "Toute cotisation encaissée n’est pas remboursable." },
      {
        type: "p",
        text: "Après acceptation par le futur membre de ce règlement intérieur, l’adhérent se verra délivrer son badge.",
      },
      { type: "p", text: "En cas de perte, le badge sera facturé à hauteur de 20 euros." },
    ],
  },
  {
    numero: "ARTICLE 4",
    titre: "LIEU ET ORGANISATION DES ENTRAÎNEMENTS",
    blocks: [
      { type: "sub", text: "Lieu des entraînements" },
      { type: "p", text: "Les entraînements ont lieu à :" },
      {
        type: "address",
        lines: [
          "Académie Européenne des Sports",
          "Centre Commercial Auchan",
          "11, Place André Maurois",
          "67200 Strasbourg",
        ],
      },
      {
        type: "p",
        text: "Les entraînements ont bien lieu durant les périodes de congés scolaires et universitaires ainsi que les jours fériés.",
      },
      {
        type: "p",
        text: "La pratique des sports ne devra s’exercer qu’au sein de l’Académie Européenne des Sports durant les entraînements, démonstrations, compétitions ou stages.",
      },
      {
        type: "p",
        text: "Le club dégage toute responsabilité au cas où l’un de ses membres ne se cantonnerait pas à la pratique de cette discipline dans ce cadre précis.",
      },
    ],
  },
  {
    numero: "ARTICLE 5",
    titre: "TENUE SPORTIVE ET PROTECTIONS OBLIGATOIRES",
    blocks: [
      { type: "sub", text: "Tenue sportive obligatoire" },
      {
        type: "p",
        text: "Aucun entraînement et combat ne sera autorisé sans les protections obligatoires :",
      },
      {
        type: "list",
        items: [
          "protège-dents ;",
          "protège-tibias avec protection des pieds ;",
          "gants de boxe ;",
          "bandes ;",
          "coquille pour les garçons ;",
          "protège-partie pour les filles ;",
          "chevillières ;",
          "protège-poitrine pour les filles ;",
          "casque de protection.",
        ],
      },
      {
        type: "p",
        text: "Tout élève doit se présenter aux cours dans des conditions d’hygiène corporelle et vestimentaire correctes.",
      },
      {
        type: "p",
        text: "Les bijoux sont interdits dans les cours et les ongles des pieds devront être coupés courts.",
      },
      {
        type: "p",
        text: "Le port de bandes ou de mitaines est obligatoire pour la mise de gants.",
      },
      {
        type: "p",
        text: "Les pratiquants qui transpirent abondamment, lors d’un travail au sol, devront protéger les tatamis avec une serviette, voire essuyer les gouttes de sueur lors des exercices, afin d’éviter les glissades dangereuses et de respecter les principes d’hygiène.",
      },
    ],
  },
  {
    numero: "ARTICLE 6",
    titre: "RESPECT DES HORAIRES, DES LOCAUX ET DU MATÉRIEL",
    blocks: [
      { type: "p", text: "Le salut est obligatoire en entrant dans la salle et en sortant." },
      {
        type: "p",
        text: "Les élèves doivent respecter les horaires. L’accès aux cours des retardataires reste à l’appréciation de l’entraîneur.",
      },
      {
        type: "p",
        text: "Il est demandé de respecter les locaux mis à disposition et de ne rien laisser traîner.",
      },
      { type: "p", text: "Les membres doivent également :" },
      {
        type: "list",
        items: [
          "être assidus aux cours et respecter les horaires ;",
          "respecter les règles d’hygiène et de bon ordre ;",
          "manifester un « bon état d’esprit » au vestiaire et dans la salle ;",
          "respecter les locaux sportifs et le matériel.",
        ],
      },
    ],
  },
  {
    numero: "ARTICLE 7",
    titre: "MINEURS ET AUTORISATION PARENTALE",
    blocks: [
      {
        type: "p",
        text: "Les mineurs devront fournir une autorisation parentale pour pouvoir pratiquer les entraînements et les compétitions.",
      },
      {
        type: "p",
        text: "L’autorisation parentale est obligatoire pour les mineurs pour la pratique du sport au sein du Club, ainsi que pour leur participation aux compétitions éventuelles et aux stages techniques au cours de la saison.",
      },
      {
        type: "p",
        text: "Pour le membre mineur, la personne détentrice de l’autorité parentale autorise l’Académie Européenne des Sports ou un membre du comité directeur à prendre toutes les mesures nécessaires en cas d’hospitalisation du membre concerné.",
      },
      {
        type: "p",
        text: "La présence des parents lors des entraînements des enfants n’est pas souhaitée.",
      },
      {
        type: "p",
        text: "Toutefois, elle pourra être tolérée à condition que ceux-ci restent très discrets, selon l’appréciation des entraîneurs.",
      },
      {
        type: "p",
        text: "Un bar est prévu pour les parents ou visiteurs qui souhaitent patienter dans la salle.",
      },
    ],
  },
  {
    numero: "ARTICLE 8",
    titre: "NEUTRALITÉ RELIGIEUSE, POLITIQUE ET ÉQUIPEMENTS",
    blocks: [
      {
        type: "p",
        text: "Les pratiques de religions, cultes, ou de simples signes ostentatoires à caractère religieux ou politique sont strictement interdits au sein de l’Académie Européenne des Sports.",
      },
      {
        type: "p",
        text: "Le matériel d’équipement doit être conforme aux directives de la Fédération Française de Boxe ou FSGT.",
      },
      { type: "p", text: "Un pack d’équipements comprenant :" },
      {
        type: "list",
        items: ["protège-dents ;", "bandes ;", "gants ;", "coquille ;", "protège-tibias ;"],
      },
      {
        type: "p",
        text: "est vendu 80 € sur place à l’Académie Européenne des Sports.",
      },
    ],
  },
  {
    numero: "ARTICLE 9",
    titre: "COMPORTEMENT, SANCTIONS ET RESPONSABILITÉS",
    blocks: [
      {
        type: "p",
        text: "Tout entraînement doit se dérouler dans l’esprit sportif et convivial.",
      },
      {
        type: "p",
        text: "Les compétiteurs et tous les adhérents s’engagent à transmettre une bonne image de la discipline et de l’Académie Européenne des Sports lors des entraînements et compétitions.",
      },
      {
        type: "p",
        text: "Tout comportement, attitude violente ou antisportive, de toute nature, sera fortement sanctionné par une exclusion définitive du Club.",
      },
      {
        type: "p",
        text: "Le comité directeur et les entraîneurs se réservent le droit d’accepter, de refuser ou d’expulser l’un de ses adhérents sur simple avis verbal, en cas de non-respect du présent règlement.",
      },
      {
        type: "p",
        text: "Ce règlement ne peut être modifié qu’avec l’approbation du comité directeur de l’Académie Européenne des Sports.",
      },
      { type: "p", text: "La direction se décharge de toute responsabilité en cas de vol." },
      {
        type: "p",
        text: "L’Académie Européenne des Sports décline toute responsabilité pour toute personne ayant quitté la salle à l’issue des entraînements.",
      },
    ],
  },
  {
    numero: "ARTICLE 10",
    titre: "BLESSURES, IMAGE ET ENGAGEMENT DU MEMBRE",
    blocks: [
      {
        type: "p",
        text: "Chaque membre à jour de sa cotisation atteste :",
      },
      {
        type: "p",
        text: "Sur l’honneur, ne bénéficier d’aucune contre-indication à la pratique des sports de combat et autres, que ce soit en compétition ou en entraînement.",
      },
      {
        type: "p",
        text: "En cas de blessure, le membre de l’Académie décline toute responsabilité à l’Académie Européenne des Sports ainsi qu’à l’ensemble des représentants.",
      },
      {
        type: "p",
        text: "Le membre autorise l’utilisation de son image en cas de diffusion de photos et vidéos sur Internet ainsi que sur l’ensemble des réseaux sociaux existants et sur tous supports de communication :",
      },
      {
        type: "list",
        items: ["articles de presse ;", "flyers ;", "affiches ;", "etc."],
      },
      {
        type: "p",
        text: "Le membre de l’Académie Européenne des Sports s’engage à respecter le règlement intérieur et déclare en avoir pris connaissance.",
      },
    ],
  },
];

export default function ReglementInterieur() {
  return (
    <main className="pt-24 pb-16 bg-black min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className="text-4xl md:text-5xl font-bold tracking-wider mb-12 text-center"
          style={{ fontFamily: "var(--font-bebas)" }}
        >
          RÈGLEMENT <span className="text-[#e63030]">INTÉRIEUR</span>
        </h1>

        <div className="space-y-10 text-gray-300">
          {articles.map((article) => (
            <section key={article.numero}>
              <p className="text-xs tracking-widest text-gray-500 mb-1 text-center">
                {article.numero}
              </p>
              <h2
                className="text-3xl font-bold tracking-wider mb-6 text-center text-white"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                {article.titre}
              </h2>
              <div className="space-y-3">
                {article.blocks.map((block, i) => {
                  switch (block.type) {
                    case "sub":
                      return (
                        <h3
                          key={i}
                          className="text-lg font-semibold text-white tracking-wide"
                        >
                          {block.text}
                        </h3>
                      );
                    case "list":
                      return (
                        <ul key={i} className="space-y-2">
                          {block.items.map((item, j) => (
                            <li key={j} className="flex items-start gap-3">
                              <span>🔴</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      );
                    case "address":
                      return (
                        <div
                          key={i}
                          className="bg-gray-900/50 border border-gray-800 rounded-md p-4 my-4"
                        >
                          {block.lines.map((line, j) => (
                            <p key={j}>{line}</p>
                          ))}
                        </div>
                      );
                    default:
                      return (
                        <p key={i} className="leading-relaxed">
                          {block.text}
                        </p>
                      );
                  }
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
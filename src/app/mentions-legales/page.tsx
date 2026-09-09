import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales | Académie Européenne des Sports",
  description: "Mentions légales du site Académie Européenne des Sports",
};

export default function MentionsLegales() {
  return (
    <main className="pt-24 pb-16 bg-black min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-4xl md:text-5xl font-bold tracking-wider mb-12 text-center"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            MENTIONS <span className="text-[#e63030]">LÉGALES</span>
          </h1>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold tracking-wider mb-4 text-white" style={{ fontFamily: "var(--font-bebas)" }}>
                1. Éditeur du site
              </h2>
              <p>
                Le site Académie Européenne des Sports est édité par :
              </p>
              {/* TODO avant mise en ligne : renseigner le n° RNA, le SIRET et le nom du directeur de la publication (président de l'association). */}
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Dénomination : Académie Européenne des Sports</li>
                <li>Forme juridique : association régie par la loi du 1<sup>er</sup> juillet 1901</li>
                <li>Siège social : Centre Commercial Auchan, 11 Place André Maurois, 67200 Strasbourg</li>
                <li>
                  Numéro RNA : <span className="text-[#e63030]">à compléter (W67xxxxxxx)</span>
                </li>
                <li>
                  Numéro SIRET : <span className="text-[#e63030]">à compléter</span>
                </li>
                <li>Téléphone : 06 82 67 25 92</li>
                <li>Email : academie.europeenne.sports@gmail.com</li>
                <li>
                  Directeur de la publication :{" "}
                  <span className="text-[#e63030]">à compléter (nom du président)</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-wider mb-4 text-white" style={{ fontFamily: "var(--font-bebas)" }}>
                2. Hébergement
              </h2>
              <p>
                Le site est hébergé par :
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Hébergeur : OVH SAS</li>
                <li>Adresse : 2 rue Kellermann, 59100 Roubaix, France</li>
                <li>RCS : Lille Métropole 424 761 419</li>
                <li>Site web : https://www.ovhcloud.com</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-wider mb-4 text-white" style={{ fontFamily: "var(--font-bebas)" }}>
                3. Propriété intellectuelle
              </h2>
              <p>
                L&apos;ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, sons, logiciels, etc.) 
                est la propriété exclusive de l&apos;Académie Européenne des Sports, sauf mentions contraires.
              </p>
              <p className="mt-2">
                Toute reproduction, représentation, modification, publication, transmission, ou dénaturation, 
                totale ou partielle du site ou de son contenu, par quelque procédé que ce soit, sans 
                autorisation préalable et écrite de l&apos;Académie Européenne des Sports, est interdite.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-wider mb-4 text-white" style={{ fontFamily: "var(--font-bebas)" }}>
                4. Responsabilité
              </h2>
              <p>
                Les informations fournies sur ce site sont données à titre indicatif. L&apos;Académie Européenne 
                des Sports s&apos;efforce de fournir des informations précises et à jour, mais ne peut garantir 
                l&apos;exactitude, la complétude ou l&apos;actualisation des informations diffusées sur le site.
              </p>
              <p className="mt-2">
                L&apos;Académie Européenne des Sports ne saurait être tenue responsable des erreurs ou omissions 
                dans les informations fournies sur ce site, ni des dommages résultant de l&apos;utilisation de 
                ces informations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-wider mb-4 text-white" style={{ fontFamily: "var(--font-bebas)" }}>
                5. Liens hypertextes
              </h2>
              <p>
                Le site peut contenir des liens vers d&apos;autres sites internet. L&apos;Académie Européenne des 
                Sports n&apos;exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur 
                contenu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-wider mb-4 text-white" style={{ fontFamily: "var(--font-bebas)" }}>
                6. Protection des données personnelles
              </h2>
              <p>
                Conformément à la loi Informatique et Libertés du 6 janvier 1978 et au Règlement Général 
                sur la Protection des Données (RGPD), vous disposez d&apos;un droit d&apos;accès, de rectification 
                et de suppression des données vous concernant.
              </p>
              <p className="mt-2">
                Pour exercer ces droits, vous pouvez nous contacter à l&apos;adresse : 
                academie.europeenne.sports@gmail.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-wider mb-4 text-white" style={{ fontFamily: "var(--font-bebas)" }}>
                7. Cookies
              </h2>
              <p>
                Ce site utilise des cookies, notamment à des fins de mesure d&apos;audience et pour l&apos;affichage de contenus tiers (carte interactive). 
                Lors de votre première visite, un bandeau vous permet d&apos;accepter ou de refuser ces cookies. Vous pouvez à tout moment modifier votre choix via le lien « Gérer les cookies » en bas de page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-wider mb-4 text-white" style={{ fontFamily: "var(--font-bebas)" }}>
                8. Droit applicable
              </h2>
              <p>
                Les présentes mentions légales sont régies par le droit français. Tout litige relatif à 
                l&apos;utilisation du site sera soumis à la compétence exclusive des tribunaux français.
              </p>
            </section>

            <p className="text-gray-500 text-sm mt-12">
              Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
            </p>
          </div>
        </div>
      </main>
  );
}
import PropTypes from "prop-types";
import Philippe from "../assets/imgphilippe.webp";
import Cv from "../assets/CV_Philippe_JAYMES.pdf";

export default function Contact({ aboutOpen }) {
  return (
    aboutOpen && (
      <section className="conteneurabout">
        <div className="conteneurabout__div">
          <div>
            <h2 className="conteneurabout__titre">Ma présentation:</h2>
            <p className="conteneurabout__paragraphe">
              Engagé volontaire de l&apos;Armée de Terre pendant cinq ans puis
              exerçant dix ans dans le secteur de la sécurité, &#128073;
              j&apos;ai réalisé de mai 2022 à janvier 2023 auprès de
              l&apos;organisme OpenClassrooms une première formation de
              développeur web puis, auprès du même organisme, de juillet 2023 à
              mai 2024, une seconde formation de développeur d&apos;application
              JavaScript - React, soit l&apos;obtention d&apos;un diplôme de
              niveau 6 de qualification RNCP : N° de fiche RNCP 38038
            </p>
            <p className="conteneurabout__paragraphe">
              Ce que j’aime dans le métier de développeur web &#128187;, pouvoir
              réaliser un site web responsive de A à Z aux normes W3C et WCAG,
              aussi bien dans la conception d&apos;une page HTML5 en utilisant
              les balises sémantiques que de pouvoir styliser, créer de superbes
              animations grâce au CSS3 et d&apos;utiliser le préprocesseur Sass
              &#128076;. Dynamiser un site avec le Javascript &#128170;, en
              communiquant avec les API Flech pour gagner en rapidité, surtout
              dans le monde d&apos;aujourd&apos;hui où l&apos;information
              recherchée doit être disponible quasi instantanément. Utiliser le
              framework React qui est l’un des frameworks JavaScript les plus en
              vogues pour créer des composants réutilisables et construire le
              DOM d&apos;une application web &#128526; ainsi que de concevoir la
              programmation d&apos;un serveur Node.js relié à la base de données
              MongoDB&#128525;.
            </p>
            <p className="conteneurabout__paragraphe">
              En raison de mon parcours professionnel atypique,
              j&apos;affectionne de me former à de nouveaux langages et
              d&apos;accomplir une veille informationnelle dans le domaine de
              l&apos;informatique&#128522;.
            </p>
            <p>
              Mon curriculum vitae est téléchargeable en cliquant sur le lien
              suivant: <a href={Cv}> ici</a>
            </p>
          </div>
          <img
            src={Philippe}
            alt="Portrait de Philippe JAYMES"
            className="conteneurabout__img"
          />
        </div>
      </section>
    )
  );
}
Contact.propTypes = {
  aboutOpen: PropTypes.bool.isRequired,
};

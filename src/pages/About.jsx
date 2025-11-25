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
              j&apos;ai suivi de mai 2022 à janvier 2023 auprès de
              l&apos;organisme OpenClassrooms une première formation de
              développeur web puis, auprès du même organisme, de juillet 2023 à
              mai 2024, une seconde formation de développeur d&apos;application
              JavaScript - React, et obtenu le diplôme de niveau 6 de
              qualification RNCP : N° de fiche RNCP 38038
            </p>
            <p className="conteneurabout__paragraphe">
              J&apos;apprécie dans le métier de développeur web &#128187;,
              c&apos;est la possibilité de concevoir un site web responsive en
              conformité avec les normes W3C et WCAG, De même, la création
              d&apos;une page HTML5 en utilisant des balises sémantiques,
              l&apos;ajout de styles élégants et la création d&apos;animations
              époustouflantes avec CSS3, ou encore l&apos;utilisation du
              préprocesseur Sass &#128076;. Egalement, dynamiser un site avec le
              Javascript &#128170;, en communiquant avec les API Flech pour
              gagner en rapidité, surtout dans le monde d&apos;aujourd&apos;hui
              où l&apos;information recherchée doit être disponible quasi
              instantanément. De plus, utiliser la librairie React qui est la
              librairie JavaScript les plus en vogues aujourd&apos;hui pour
              créer des composants réutilisables et construire le DOM d&apos;une
              application web &#128526; ainsi que de concevoir la programmation
              d&apos;un serveur Node.js relié à la base de données MongoDB.
            </p>
            <p className="conteneurabout__paragraphe">
              En raison de mon parcours professionnel atypique,
              j&apos;affectionne de me former à de nouveaux langages et
              d&apos;effectuer une veille technologique et informationnelle dans
              le secteur de l&apos;informatique.
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

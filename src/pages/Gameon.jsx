import PropTypes from "prop-types";

export default function Gameon({ children }) {
  return (
    <div className="content">
      <div>
        <h2>Créez une landing page avec Javascript</h2>
        <article>
          <h3>Ce qu&apos;on apprend dans ce projet ?</h3>
          <p>
            Réaliser un formulaire en <strong>JavaScript Vanilla</strong>.
          </p>
          <p>
            Travailler sur la validation du formulaire pour garantir que les
            données saisies
            <br /> par les utilisateurs sont correctes et répondent aux critères
            établis.
          </p>
          <p>
            Gérerer les événements JavaScript tels que les clics de bouton ou
            les entrées
            <br /> de formulaire, pour créer une interaction dynamique avec les
            utilisateurs.
          </p>
        </article>
        <article>
          <h3>Compétences aquises</h3>
          <p>
            Interaction du JavaScript, HTML et CSS est cruciale pour tout projet
            de développement web.
          </p>
          <p>
            Validation de formulaires et de gestion des événements, sont
            fondamentales pour la création
            <br /> de sites web interactifs et utilisateurs.
          </p>
        </article>
        {children}
      </div>
      <div className="content__lien">
        <h3>Liens du projet</h3>
        <a
          href="https://github.com/Zkine/GameOn-website-FR"
          target="_blank"
          className="content__link"
        >
          Le dépot Github
        </a>
      </div>
    </div>
  );
}
Gameon.propTypes = {
  children: PropTypes.any.isRequired,
};

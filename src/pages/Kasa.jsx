import PropTypes from "prop-types";

export default function Kasa({ children }) {
  return (
    <div className="content">
      <div>
        <h2>
          Développez une application Web avec React
          <br /> et React Router
        </h2>
        <article>
          <h3>Ce qu&apos;on apprend dans ce projet ?</h3>
          <p>
            Travaillerer sur la logique de présentation des données et les
            composants React.
          </p>
          <p>
            Apprendre à mettre en œuvre des animations CSS et à développer
            l&apos;interface
            <br /> avec SASS.
          </p>
          <p>
            Utiliserer React Router pour configurer la navigation entre les
            différentes pages
            <br /> de l&apos;application.
          </p>
        </article>
        <article>
          <h3>Compétences aquises</h3>
          <p>La maîtrise de React et de React Route.</p>
          <p>
            L&apos;utilisation de SASS pour gérer le CSS et
            l&apos;implémentation des animations CSS.
          </p>
        </article>
        {children}
      </div>
      <div className="content__lien">
        <h3>Liens du projet</h3>
        <a
          href="https://github.com/Zkine/Kasa.io"
          target="_blank"
          className="content__link"
        >
          Le dépot Github
        </a>
      </div>
    </div>
  );
}
Kasa.propTypes = {
  children: PropTypes.any.isRequired,
};

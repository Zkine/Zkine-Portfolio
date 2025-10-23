import PropTypes from "prop-types";

export default function Kasa({ children }) {
  return (
    <div className="content">
      <div>
        <h2>
          Développer une application Web avec React
          <br /> et React Router
        </h2>
        <article>
          <h3>Ce qu&apos;on apprend dans ce projet ?</h3>
          <p>
            Travailler sur la logique de présentation des données et les
            composants React.
          </p>
          <p>
            Mettre en œuvre des animations CSS et développer l&apos;interface
            <br /> avec le préprocesseur SASS.
          </p>
          <p>
            Utiliser React Router pour configurer la navigation entre les
            différentes pages
            <br /> de l&apos;application.
          </p>
        </article>
        <article>
          <h3>Compétences acquises</h3>
          <p>Maîtriser React et React Route.</p>
          <p>
            Utiliser le préprocesseur SASS pour gérer le CSS et
            l&apos;implémentation des animations CSS.
          </p>
        </article>
        {children}
      </div>
      <div className="content__lien">
        <h3>Lien du projet</h3>
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

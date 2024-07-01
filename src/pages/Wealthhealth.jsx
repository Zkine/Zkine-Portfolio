import PropTypes from "prop-types";

export default function Wealthhealth({ children }) {
  return (
    <div className="content">
      <div>
        <h2>Faites passer une librairie jQuery vers React</h2>
        <article>
          <h3>Ce qu&apos;on apprend dans ce projet ?</h3>
          <p>
            Refondre les pages clés de l’application en remplaçant un plugin
            jQuery spécifique
            <br /> par un <strong>composant React</strong>.
          </p>
          <p>Faire appel à la bibliothèque Recharts.</p>
          <p>
            Mesurer les performances de l&apos;application avant et après la
            conversion.
          </p>
          <p>
            Rédaction de documents techniques détaillant l&apos;architecture du
            composant.
          </p>
        </article>
        <article>
          <h3>Compétences aquises</h3>
          <p>Produire de la documentation technique pour une application.</p>
          <p>Analyser la performance d&apos;une application web.</p>
          <p>Déployer une application front-end.</p>
        </article>
        {children}
      </div>
      <div className="content__lien">
        <h3>Liens du projet</h3>
        <nav className="content__nav">
          <ul className="content__ul">
            <li className="content__li">
              <a
                href="https://github.com/Zkine/HRnet"
                target="_blank"
                className="content__link"
              >
                Le dépot Github
              </a>
            </li>
            <li className="content__li">
              <a
                href="https://www.npmjs.com/package/@zkine/react-select"
                target="_blank"
                className="content__link"
              >
                Composant React
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
Wealthhealth.propTypes = {
  children: PropTypes.any.isRequired,
};

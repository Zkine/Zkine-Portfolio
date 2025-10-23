import PropTypes from "prop-types";

export default function Sportsee({ children }) {
  return (
    <div className="content">
      <div>
        <h2>Développer un tableau de bord d&apos;analytics avec React</h2>
        <article>
          <h3>Ce qu&apos;on apprend dans ce projet ?</h3>
          <p>
            Développer la page profil de l&apos;utilisateur en intégrant des
            graphiques et des diagrammes présentant les données d&apos;analyse
            sportive.
          </p>
          <p>Faire appel à la bibliothèque Recharts.</p>
          <p>
            Utiliser l&apos;API Fetch pour interagir avec le back-end et
            <br /> récupérer les données nécessaires.
          </p>
          <p>
            Développer une documentation complète comprenant un Readme, JSDoc,
            et les proptypes.
          </p>
        </article>
        <article>
          <h3>Compétences acquises</h3>
          <p>Intégrer des données complexes via des API.</p>
          <p>Maîtriser des bibliothèques graphiques.</p>
        </article>
        {children}
      </div>
      <div className="content__lien">
        <h3>Lien du projet</h3>
        <a
          href="https://github.com/Zkine/SportSee"
          target="_blank"
          className="content__link"
        >
          Le dépot Github
        </a>
      </div>
    </div>
  );
}
Sportsee.propTypes = {
  children: PropTypes.any.isRequired,
};

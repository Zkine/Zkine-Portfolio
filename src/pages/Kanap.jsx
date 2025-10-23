import PropTypes from "prop-types";

export default function Kanap({ children }) {
  return (
    <div className="content">
      <div>
        <h2>Construire un site e-commerce en JavaScript</h2>
        <article>
          <h3>Ce qu&apos;on apprend dans ce projet ?</h3>
          <p>
            Unifier les travaux déjà réalisés par l’équipe de développement en
            intégrant
            <br /> dynamiquement les éléments de l’API dans les différentes
            pages web avec JavaScript.
          </p>
          <p>Programmer avec JavaScript</p>
          <p>Déboguer l’interface du site internet</p>
          <p>Créer des pages web dynamiques avec JavaScript</p>
          <p>Mettre en place un plan de test d’acceptation</p>
        </article>
        <article>
          <h3>Compétences acquises</h3>
          <p>Gérer des événements JavaScript</p>
          <p>Valider des données issues de sources externes</p>
          <p>Créer un plan de test pour l&apos;application</p>
        </article>
        {children}
      </div>
      <div className="content__lien">
        <h3>Lien du projet</h3>
        <a
          href="https://github.com/Zkine/Zkine_projet5_Kanap_07092022.io"
          target="_blank"
          className="content__link"
        >
          Le dépot Github
        </a>
      </div>
    </div>
  );
}
Kanap.propTypes = {
  children: PropTypes.any.isRequired,
};

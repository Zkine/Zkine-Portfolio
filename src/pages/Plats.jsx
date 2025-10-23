import PropTypes from "prop-types";

export default function Plats({ children }) {
  return (
    <div className="content">
      <div>
        <h2>Développer un algorithme de recherche en JavaScript</h2>
        <article>
          <h3>Ce qu&apos;on apprend dans ce projet ?</h3>
          <p>
            Développer deux versions d&apos;un algorithme de recherche efficace
            pour une plateforme de recettes
            <br /> de cuisine.
          </p>
          <p>
            Analyser et comparer les performances des deux versions de
            l&apos;algorithme avec Jsben.ch pour identifier la plus efficace.
          </p>
          <p>
            Réaliser une documentation pour expliquer pourquoi la version de
            l&apos;algorithme choisie est la plus adaptée pour le site.
          </p>
        </article>
        <article>
          <h3>Compétences acquises</h3>
          <p>
            Analyser un problème informatique et développer un algorithme
            efficace.
          </p>
          <p>Appliquer les principes du Green Code.</p>
          <p>
            Travailler sur des projets complexes et développer des solutions
            informatiques innovantes
            <br /> et responsables
          </p>
        </article>
        {children}
      </div>
      <div className="content__lien">
        <h3>Lien du projet</h3>
        <a
          href="https://github.com/Zkine/Zkine_projet7_Les-petits-plats_28092023.github.io"
          target="_blank"
          className="content__link"
        >
          Le dépot Github
        </a>
      </div>
    </div>
  );
}
Plats.propTypes = {
  children: PropTypes.any.isRequired,
};

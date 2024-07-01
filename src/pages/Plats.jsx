import PropTypes from "prop-types";

export default function Plats({ children }) {
  return (
    <div className="content">
      <div>
        <h2>Développez un algorithme de recherche en JavaScript</h2>
        <article>
          <h3>Ce qu&apos;on apprend dans ce projet ?</h3>
          <p>
            Développer deux versions un algorithme de recherche efficace pour
            une plateforme de recettes
            <br /> de cuisine.
          </p>
          <p>
            Analyserez et comparerez les performances des deux versions de
            algorithme, utilisation de l&apos;outils
            <br /> Jsben.ch pour identifier l&apos;algorithme le plus efficace.
          </p>
          <p>
            Réalisation d&apos;une documentation pour expliquerer pourquoi
            l&apos;algorithme choisi est le plus adapté
            <br /> pour le site.
          </p>
        </article>
        <article>
          <h3>Compétences aquises</h3>
          <p>
            Analyser un problème informatique et à développer un algorithme
            efficace.
          </p>
          <p>Application des principes du Green Code.</p>
          <p>
            Travailler sur des projets complexes et à développer des solutions
            informatiques innovantes
            <br /> et responsables
          </p>
        </article>
        {children}
      </div>
      <div className="content__lien">
        <h3>Liens du projet</h3>
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

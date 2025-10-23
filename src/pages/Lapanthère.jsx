import PropTypes from "prop-types";

export default function LaPanthère({ children }) {
  return (
    <div className="content">
      <div>
        <h2>Optimiser un site web existant</h2>
        <article>
          <h3>Ce qu&apos;on apprend dans ce projet ?</h3>
          <p>
            Optimiser le référencement du site (SEO) en améliorant ses
            performances techniques,
            <br /> l&apos;application passant les tests W3C pour HTML et CSS.
          </p>
          <p>Augmenter le trafic grâce au référencement naturel.</p>
          <p>
            Réaliser des tests Lighthouse avant et après optimisation, la
            vitesse de chargement des pages du site ayant un impact sur le
            classement dans les résultats de recherche.
          </p>
          <p>Concevoir des contenus inclusifs grâce aux régles WCAG</p>
        </article>
        <article>
          <h3>Compétences acquises</h3>
          <p>Écrire un code HTML et un code CSS maintenables</p>
          <p>Optimiser le référencement d&apos;un site web</p>
          <p>Optimiser la taille et la vitesse d’un site web</p>
          <p>Assurer l&apos;accessibilité d&apos;un site web</p>
        </article>
        {children}
      </div>
      <div className="content__lien">
        <h3>Lien du projet</h3>
        <a
          href="https://github.com/Zkine/Zkine_projet4_La_Panthere_noire_23082022.io"
          target="_blank"
          className="content__link"
        >
          Le dépot Github
        </a>
      </div>
    </div>
  );
}
LaPanthère.propTypes = {
  children: PropTypes.any.isRequired,
};

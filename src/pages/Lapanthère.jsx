import PropTypes from "prop-types";

export default function LaPanthère({ children }) {
  return (
    <div className="content">
      <div>
        <h2>Optimisez un site web existant</h2>
        <article>
          <h3>Ce qu&apos;on apprend dans ce projet ?</h3>
          <p>
            Optimisez le référencement de votre site (SEO) en améliorant ses
            performances techniques, l&apos;application doit passer les testes
            le W3C pour HTML et CSS.
          </p>
          <p>Augmentez votre trafic grâce au référencement naturel</p>
          <p>
            Comparaison des résultats. La vitesse de chargement des pages du
            site a un impact sur
            <br /> notre classement dans les résultats de recherche.
          </p>
          <p>Concevoir des contenus inclusifs grâce au régle WCAG</p>
        </article>
        <article>
          <h3>Compétences aquises</h3>
          <p>Écrire un code HTML et CSS maintenable</p>
          <p>Optimiser le référencement d&apos;un site web</p>
          <p>Optimiser la taille et la vitesse d’un site web</p>
          <p>Assurer l&apos;accessibilité d&apos;un site web</p>
        </article>
        {children}
      </div>
      <div className="content__lien">
        <h3>Liens du projet</h3>
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

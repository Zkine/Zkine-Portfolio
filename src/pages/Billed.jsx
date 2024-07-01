import PropTypes from "prop-types";

export default function Billed({ children }) {
  return (
    <div className="content">
      <div>
        <h2>Débuggez et testez un SaaS RH</h2>
        <article>
          <h3>Ce qu&apos;on apprend dans ce projet ?</h3>
          <p>Débugger et tester une application web.</p>
          <p>
            Implémenterer des <strong>tests unitaires en JavaScript</strong>{" "}
            pour vérifier la validité et la fiabilité
            <br /> des différentes composantes de l&apos;application.
          </p>
          <p>
            Elaborerer également un plan de test end-to-end manuel pour assurer
            le bon
            <br /> fonctionnement du parcours employé de l&apos;application.
          </p>
          <p>
            Ecrirez des <strong>tests d&apos;intégration en JavaScript</strong>{" "}
            pour vérifier l&apos;interaction entre les
            <br /> différentes parties de l&apos;application.
          </p>
        </article>
        <article>
          <h3>Compétences aquises</h3>
          <p>
            Pouvoir écrire et implémenter des tests unitaires et
            d&apos;intégration assure la qualité et la fiabilité du code.
          </p>
          <p>maîtrise du débogage avec des outils comme le Chrome Debugger.</p>
        </article>
        {children}
      </div>
      <div className="content__lien">
        <h3>Liens du projet</h3>
        <a
          href="https://github.com/Zkine/Zkine_projet9_Bill-app_22112023.github.io"
          target="_blank"
          className="content__link"
        >
          Le dépot Github
        </a>
      </div>
    </div>
  );
}
Billed.propTypes = {
  children: PropTypes.any.isRequired,
};

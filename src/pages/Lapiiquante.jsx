import PropTypes from "prop-types";

export default function Lapiiquante({ children }) {
  return (
    <div className="content">
      <div>
        <h2>
          Construisez une API sécurisée pour une application d&apos;avis
          gastronomiques
        </h2>
        <article>
          <h3>Ce qu&apos;on apprend dans ce projet ?</h3>
          <p>Creation du Backend avec Node.js, Express et MongoDB.</p>
          <p>Sécurisez vos applications web avec l&apos;OWASP</p>
          <p>créer et développer une API REST pour les applications Web</p>
        </article>
        <article>
          <h3>Compétences aquises</h3>
          <p>
            Implémenter un modèle logique de données conformément à la
            réglementation
          </p>
          <p>Mettre en œuvre des opérations CRUD de manière sécurisée</p>
          <p>Stocker des données de manière sécurisée</p>
        </article>
        {children}
      </div>
      <div className="content__lien">
        <h3>Liens du projet</h3>
        <a
          href="https://github.com/Zkine/Zkine_projet6_Piiquante_24102022.github.io"
          target="_blank"
          className="content__link"
        >
          Le dépot Github
        </a>
      </div>
    </div>
  );
}
Lapiiquante.propTypes = {
  children: PropTypes.any.isRequired,
};

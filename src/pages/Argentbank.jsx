import PropTypes from "prop-types";

export default function Argentbank({ children }) {
  return (
    <div className="content">
      <div>
        <h2>
          Utilisez une API pour un compte utilisateur
          <br /> bancaire avec React
        </h2>
        <article>
          <h3>Ce qu&apos;on apprend dans ce projet ?</h3>
          <p>
            Utilisant React et Redux pour créer une expérience utilisateur
            dynamique et réactive.
          </p>
          <p>
            Utilisation de React pour développer l&apos;interface utilisateur de
            l&apos;application bancaire, un
            <br /> tableau de bord complet et responsive pour les utilisateurs.
          </p>
          <p>
            Redux est utilisé pour gérer les données de l&apos;application. Cela
            permet de maintenir un état
            <br /> global cohérent à travers l&apos;application.
          </p>
          <p>
            Définir les points d&apos;accès de l&apos;API et modéliser les
            interactions avec les données des
            <br /> transactions avec Swagger.
          </p>
        </article>
        <article>
          <h3>Compétences aquises</h3>
          <p>Maîtrise de React et Redux.</p>
          <p>Utilisation de Swagger pour documenter les API.</p>
        </article>
        {children}
      </div>
      <div className="content__lien">
        <h3>Liens du projet</h3>
        <a
          href="https://github.com/Zkine/Argent-Bank"
          target="_blank"
          className="content__link"
        >
          Le dépot Github
        </a>
      </div>
    </div>
  );
}
Argentbank.propTypes = {
  children: PropTypes.any.isRequired,
};

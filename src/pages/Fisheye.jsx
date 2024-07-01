import PropTypes from "prop-types";

export default function Fisheye({ children }) {
  return (
    <div className="content">
      <div>
        <h2>
          Créez un site accessible pour une plateforme de
          <br /> photographes
        </h2>
        <article>
          <h3>Ce qu&apos;on apprend dans ce projet ?</h3>
          <p>
            Création d&apos;une application web accessible, modulaire et
            utilisant des{" "}
            <strong>
              design patterns
              <br /> en JavaScript
            </strong>
            .
          </p>
          <p>
            Intégrer diverses fonctionnalités telles que la récupération et
            l&apos;affichage des données,
            <br /> la navigation entre les pages des photographes, une modale de
            contact, une LightBox
            <br /> pour les médias, et la gestion des likes.
          </p>
          <p>
            Ecriture de code maintenable et la gestion des événements du site.
          </p>
        </article>
        <article>
          <h3>Compétences aquises</h3>
          <p>Assurer l&apos;accessibilité d&apos;un site web.</p>
          <p>
            Développer une application web modulaire avec des design patterns.
          </p>
          <p>Ecrire du code JavaScript maintenable</p>
          <p>Gérer les évènements d&apos;un site avec JavaScript</p>
        </article>
        {children}
      </div>
      <div className="content__lien">
        <h3>Liens du projet</h3>
        <a
          href="https://github.com/Zkine/Front-End-Fisheye"
          target="_blank"
          className="content__link"
        >
          Le dépot Github
        </a>
      </div>
    </div>
  );
}
Fisheye.propTypes = {
  children: PropTypes.any.isRequired,
};

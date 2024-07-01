import PropTypes from "prop-types";

export default function Ohmyfood({ children }) {
  return (
    <div className="content">
      <div>
        <h2>Dynamisez une page web avec des animations CSS</h2>
        <article>
          <h3>Ce qu&apos;on apprend dans ce projet ?</h3>
          <p>Implémention des animations CSS en utilisant SASS.</p>
          <p>
            La tâche principale est d&apos;intégrer une maquette en{" "}
            <strong>mobile-first</strong>.
          </p>
          <p>
            Mise en œuvre des <strong>animations CSS</strong> pour enrichir
            l&apos;expérience utilisateur du site.
          </p>
        </article>
        <article>
          <h3>Compétences aquises</h3>
          <p>Développement d&apos;une interface web mobile-first.</p>
          <p>
            L&apos;intégration d&apos;animations CSS améliore l&apos;aspect
            visuel du site, mais aussi l&apos;expérience utilisateur.
          </p>
          <p>La maîtrise de SASS pour structurer et optimiser le CSS.</p>
        </article>
        {children}
      </div>
      <div className="content__lien">
        <h3>Liens du projet</h3>
        <nav className="content__nav">
          <ul className="content__ul">
            <li className="content__li">
              <a
                href="https://github.com/Zkine/Zkine_projet3_Ohmyfood_05072022.github.io"
                target="_blank"
                className="content__link"
              >
                Le dépot Github
              </a>
            </li>
            <li className="content__li">
              <a
                href="https://zkine.github.io/Zkine_projet3_Ohmyfood_05072022.github.io/"
                target="_blank"
                className="content__link"
              >
                Github-pages
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
Ohmyfood.propTypes = {
  children: PropTypes.any.isRequired,
};

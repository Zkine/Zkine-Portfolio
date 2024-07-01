import PropTypes from "prop-types";

export default function Booki({ children }) {
  return (
    <div className="content">
      <div>
        <h2>Transformez une maquette en site web avec HTML & CSS</h2>
        <article>
          <h3>Ce qu&apos;on apprend dans ce projet ?</h3>
          <p>
            Créer la page d&apos;accueil d&apos;une agence de voyage en
            utilisant HTML et CSS.
          </p>
          <p>
            La mission principale est d&apos;intégrer l&apos;
            <strong>interface responsive</strong> du site. A notre disposition
            les
            <br />
            maquettes Figma pour mobile, tablette et desktop.
          </p>
        </article>
        <article>
          <h3>Compétences aquises</h3>
          <p>La capacité à créer des interfaces web responsives.</p>
          <p>
            En apprenant à intégrer des maquettes avec précision en utilisant
            HTML et CSS, et en configurant un
            <br />
            environnement de développement efficace.
          </p>
        </article>
        {children}
      </div>
      <div className="content__lien">
        <h3>Liens du projet</h3>
        <nav className="content__nav">
          <ul className="content__ul">
            <li className="content__li">
              <a
                href="https://github.com/Zkine/Zkine_projet2_Brooky_04052022.github.io"
                target="_blank"
                className="content__link"
              >
                Le dépot Github
              </a>
            </li>
            <li className="content__li">
              <a
                href="https://zkine.github.io/Zkine_projet2_Brooky_04052022.github.io/"
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
Booki.propTypes = {
  children: PropTypes.any.isRequired,
};

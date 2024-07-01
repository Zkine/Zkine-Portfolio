import PropTypes from "prop-types";
import user_stories from "../assets/user_stories.pdf";
import diagramme_cas_usage from "../assets/diagramme_cas_usage.pdf";
import maquettes from "../assets/maquettes.pdf";

export default function Learn({ children }) {
  return (
    <div className="content">
      <div>
        <h2>Définissez les besoins pour une app de soutien scolaire</h2>
        <article>
          <h3>Ce qu&apos;on apprend dans ce projet ?</h3>
          <p>
            Création des diagrammes de cas d&apos;usage pour chaque
            fonctionnalité majeure des
            <br /> différentes pages du site.
          </p>
          <p>
            Développerer des User Stories pour cerner les attentes des
            utilisateurs et définir clairement
            <br /> les objectifs à atteindre.
          </p>
          <p>
            Création des maquettes du site en utilisant des outils comme Figma.
            Elles serviront
            <br /> de guide visuel pour le développement et faciliteront la
            communication des idées au
            <br /> client et à l&apos;équipe de développement.
          </p>
          <p>
            Elaboration d&apos;un tableau Kanban détaillé, divisant le projet en
            blocs de fonctionnalités
            <br /> et sous-fonctionnalités.
          </p>
        </article>
        <article>
          <h3>Compétences aquises</h3>
          <p>
            La capacité à identifier les besoins des clients, à modéliser des
            solutions techniques
            <br /> et à contribuer efficacement à un projet en utilisant une
            méthodologie agile
          </p>
          <p>
            La maîtrise d&apos;outils de gestion de projet comme Kanban et de
            logiciels de conception
            <br /> de diagrammes.
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
                href="https://cream-lamb-1f5.notion.site/25665da5fae147fd8f97566042e1dd9e?v=f50981ba805a45518677a2094adeca2f"
                target="_blank"
                className="content__link"
              >
                Le Kanban
              </a>
            </li>
            <li className="content__li">
              <a href={user_stories} className="content__link">
                Les user stories
              </a>
            </li>
            <li className="content__li">
              <a href={diagramme_cas_usage} className="content__link">
                Les diagramme cas usage
              </a>
            </li>
            <li className="content__li">
              <a href={maquettes} className="content__link">
                Les maquettes
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
Learn.propTypes = {
  children: PropTypes.any.isRequired,
};

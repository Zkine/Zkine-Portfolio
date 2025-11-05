import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { portfoliolist } from "../datas/data";

import Booki from "./Booki";
import Ohmyfood from "./Ohmyfood";
import Lapanthère from "./Lapanthère";
import Kanap from "./Kanap";
import Lapiiquante from "./Lapiiquante";
import Gameon from "./Gameon";
import Fisheye from "./Fisheye";
import Plats from "./Plats";
import Billed from "./Billed";
import Learn from "./Learn@Home";
import Kasa from "./Kasa";
import Sportsee from "./SportSee";
import Argentbank from "./Argentbank";
import Wealthhealth from "./Wealthhealth";

const projectComponents = {
  booki: Booki,
  ohmyfood: Ohmyfood,
  panth: Lapanthère,
  kanap: Kanap,
  piiquante: Lapiiquante,
  gameon: Gameon,
  fisheye: Fisheye,
  plats: Plats,
  billed: Billed,
  learn: Learn,
  kasa: Kasa,
  sportsee: Sportsee,
  argentbank: Argentbank,
  wealthhealth: Wealthhealth,
};

export default function Projets({
  projetsOpen,
  children,
  setProjetClose,
  projetClose,
}) {
  const [ProjetOpen, updateProjet] = useState(false);
  const [selectedKey, setSelectedKey] = useState(null);
  const [ProjetContent, setProjetContent] = useState(null);

  useEffect(() => {
    if (ProjetOpen && selectedKey && !projetClose) {
      const Component = projectComponents[selectedKey];
      if (Component) {
        setProjetContent(<Component>{children}</Component>);
      }
    } else if (projetClose) {
      setProjetContent(null);
      setSelectedKey(null);
      updateProjet(false);
      setProjetClose((projet) => !projet);
    }
  }, [
    ProjetOpen,
    selectedKey,
    projetsOpen,
    children,
    projetClose,
    setProjetClose,
  ]);

  function renderProjet(key) {
    setSelectedKey(key);
    updateProjet(true);
  }

  return (
    projetsOpen && (
      <section className="portfolio__conteneur">
        {!ProjetOpen ? (
          <div className="portfolio__conteneur__element">
            {portfoliolist.map((portfolio) => (
              <div className="portfolio__conteneur__section" key={portfolio.id}>
                <figure className="portfolio__conteneur__figure">
                  <img
                    loading="lazy"
                    src={portfolio.src}
                    alt={portfolio.alt}
                    onClick={() => renderProjet(portfolio.key)}
                    className="portfolio__conteneur__img"
                  />
                </figure>
              </div>
            ))}
          </div>
        ) : (
          ProjetContent
        )}
      </section>
    )
  );
}

Projets.propTypes = {
  projetsOpen: PropTypes.bool.isRequired,
  children: PropTypes.any.isRequired,
  projetClose: PropTypes.bool,
  setProjetClose: PropTypes.func,
};

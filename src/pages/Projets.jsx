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

export default function Projets({
  projetsOpen,
  children,
  setProjetClose,
  projetClose,
}) {
  const [ProjetOpen, updateProjet] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [ProjetContent, setProjetContent] = useState(null);

  useEffect(() => {
    if (ProjetOpen && selectedImage && !projetClose) {
      const expr = selectedImage;
      switch (expr) {
        case "/src/assets/brooky.webp":
          setProjetContent(<Booki>{children}</Booki>);
          break;
        case "/src/assets/ohmyfood.webp":
          setProjetContent(<Ohmyfood>{children}</Ohmyfood>);
          break;
        case "/src/assets/la_panth%C3%A8re.webp":
          setProjetContent(<Lapanthère>{children}</Lapanthère>);
          break;
        case "/src/assets/kanap.webp":
          setProjetContent(<Kanap>{children}</Kanap>);
          break;
        case "/src/assets/la_piiquante.webp":
          setProjetContent(<Lapiiquante>{children}</Lapiiquante>);
          break;
        case "/src/assets/GameOn.webp":
          setProjetContent(<Gameon>{children}</Gameon>);
          break;
        case "/src/assets/FishEye.webp":
          setProjetContent(<Fisheye>{children}</Fisheye>);
          break;
        case "/src/assets/LesPetitsPlats.webp":
          setProjetContent(<Plats>{children}</Plats>);
          break;
        case "/src/assets/Billed.webp":
          setProjetContent(<Billed>{children}</Billed>);
          break;
        case "/src/assets/Learn@Home.webp":
          setProjetContent(<Learn>{children}</Learn>);
          break;
        case "/src/assets/kasa.webp":
          setProjetContent(<Kasa>{children}</Kasa>);
          break;
        case "/src/assets/SportSee.webp":
          setProjetContent(<Sportsee>{children}</Sportsee>);
          break;
        case "/src/assets/ArgentBank.webp":
          setProjetContent(<Argentbank>{children}</Argentbank>);
          break;
        case "/src/assets/WealthHealth.webp":
          setProjetContent(<Wealthhealth>{children}</Wealthhealth>);
          break;
        default:
          console.log(`Sorry, we are out of ${expr}.`);
          setProjetContent(null);
      }
    } else if (projetClose) {
      setProjetContent(null);
      setSelectedImage(null);
      updateProjet(false);
      setProjetClose(!projetClose);
    }
  }, [
    ProjetOpen,
    selectedImage,
    projetsOpen,
    children,
    projetClose,
    setProjetClose,
  ]);

  function renderProjet(e) {
    const src = e.target.getAttribute("src");
    setSelectedImage(src);
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
                    onClick={renderProjet}
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

import { useState, useEffect, lazy } from "react";
import Spinner from "./Spinner";
import Accueil from "../pages/Accueil";
import Button from "./Button";
import { AiFillCaretDown } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { ImCross } from "react-icons/im";
import { buttonlist, reseaulist } from "../datas/data";
const Sidebar = lazy(() => import("./Sidebar"));
const Projets = lazy(() => import("../pages/Projets"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));

export default function App() {
  const [accueilOpen, updateAccueil] = useState(true);
  const [projetsOpen, updateProjets] = useState(false);
  const [sidebarOpen, updateSidebar] = useState(false);
  const [aboutOpen, updateAbout] = useState(false);
  const [contactOpen, updateContact] = useState(false);
  const [clickBanner, setclickBanner] = useState(false);
  const [projetClose, setProjetClose] = useState(false);
  const [clickButtonSidebar, setclickButtonSidebar] = useState("1bu");

  useEffect(() => {
    if (accueilOpen === true) {
      document.title = "Accueil - Portfolio Philippe JAYMES";
    } else if (projetsOpen === true) {
      document.title = "Projets - Portfolio Philippe JAYMES";
    } else if (aboutOpen === true) {
      document.title = "À propos - Portfolio Philippe JAYMES";
    } else if (contactOpen === true) {
      document.title = "Contact - Portfolio Philippe JAYMES";
    }
  }, [accueilOpen, projetsOpen, aboutOpen, contactOpen, projetClose]);

  useEffect(() => {
    if (sidebarOpen === false) {
      setclickButtonSidebar("1bu");
      updateAccueil(true);
      updateProjets(false);
      updateAbout(false);
      updateContact(false);
    }
  }, [sidebarOpen, clickButtonSidebar, accueilOpen, contactOpen, projetsOpen]);

  function selected(e) {
    let pressed = e.currentTarget.getAttribute("aria-pressed") === "true";
    e.currentTarget.setAttribute("aria-pressed", !pressed);
    setclickBanner(!clickBanner);
    updateSidebar(!sidebarOpen);
  }

  function selectedAccueil(id) {
    setclickButtonSidebar(id);
    switch (id) {
      case "1bu":
        updateAccueil(true);
        updateProjets(false);
        updateAbout(false);
        updateContact(false);
        setProjetClose(true);
        break;
      case "2bu":
        updateAccueil(false);
        updateProjets(true);
        updateAbout(false);
        updateContact(false);
        break;
      case "3bu":
        updateProjets(false);
        updateAccueil(false);
        updateAbout(true);
        updateContact(false);
        setProjetClose(true);
        break;
      case "4bu":
        updateAccueil(false);
        updateProjets(false);
        updateAbout(false);
        updateContact(true);
        setProjetClose(true);
        break;
      default:
        throw new Error("Ajoutez un state au nouveau bouton.");
    }
  }

  function handleCloseProjet() {
    setProjetClose(true);
  }

  return (
    <>
      <Spinner />
      <header>
        <section className="banner">
          <h1 className="banner__titre">Philippe JAYMES - Portfolio</h1>
          <Button
            type="button"
            ariaLabel="menu"
            ariaPressed="false"
            className={[clickBanner ? "active" : "banner--button"]}
            onClick={selected}
          >
            <RxHamburgerMenu className="banner--button__icone" />
          </Button>
        </section>
      </header>
      <main className="main">
        <article className="main__conteneur">
          <Sidebar sidebarOpen={sidebarOpen} reseaulist={reseaulist}>
            {buttonlist.map(({ id, name }) => (
              <li className="sidebar_conteneur__li" key={id}>
                <Button
                  type="button"
                  className={[
                    id === clickButtonSidebar
                      ? "button"
                      : "sidebar_conteneur--button",
                  ]}
                  onClick={() => {
                    selectedAccueil(id);
                  }}
                >
                  {name}
                  <AiFillCaretDown
                    className={[
                      id === clickButtonSidebar ? "rotate" : "rotateinit",
                    ]}
                  />
                </Button>
              </li>
            ))}
          </Sidebar>
          <Accueil accueilOpen={accueilOpen} />
          <Projets
            projetsOpen={projetsOpen}
            setProjetClose={setProjetClose}
            projetClose={projetClose}
          >
            <Button
              type="button"
              ariaLabel="close"
              ariaPressed="false"
              className="content__btn"
              onClick={handleCloseProjet}
            >
              <ImCross />
            </Button>
          </Projets>
          <About aboutOpen={aboutOpen} />
          <Contact contactOpen={contactOpen} />
        </article>
      </main>
    </>
  );
}

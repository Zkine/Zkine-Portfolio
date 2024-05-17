import { useState, useEffect, lazy } from "react";
import Spinner from "./Spinner";
import Banner from "./Banner";
import Accueil from "../pages/Accueil";
import Button from "./Button";
import { AiFillCaretDown } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { buttonlist, reseaulist } from "../datas/data";
const Sidebar = lazy(() => import("./Sidebar"));
const Portfolio = lazy(() => import("../pages/Portfolio"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));

export default function App() {
  const [accueilOpen, updateAccueil] = useState(true);
  const [portfolioOpen, updatePortefolio] = useState(false);
  const [sidebarOpen, updateSidebar] = useState(false);
  const [aboutOpen, updateAbout] = useState(false);
  const [contactOpen, updateContact] = useState(false);

  const [clickBanner, setclickBanner] = useState(false);

  const [clickButtonSidebar, setclickButtonSidebar] = useState("1bu");
  useEffect(() => {
    if (accueilOpen === true) {
      document.title = "Page Accueil - Portfolio Philippe JAYMES ";
    } else if (portfolioOpen === true) {
      document.title = "Page Portfolio - Portfolio Philippe JAYMES ";
    } else if (aboutOpen === true) {
      document.title = "Page À propos - Portfolio Philippe JAYMES ";
    } else if (contactOpen === true) {
      document.title = "Page Contact - Portfolio Philippe JAYMES ";
    }
  });

  useEffect(() => {
    if (sidebarOpen === false) {
      setclickButtonSidebar("1bu");
      updateAccueil(true);
      updatePortefolio(false);
      updateAbout(false);
      updateContact(false);
    }
  }, [
    sidebarOpen,
    updateAbout,
    updateAccueil,
    updateContact,
    updatePortefolio,
  ]);

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
        updatePortefolio(false);
        updateAbout(false);
        updateContact(false);
        break;
      case "2bu":
        updateAccueil(false);
        updatePortefolio(true);
        updateAbout(false);
        updateContact(false);
        break;
      case "3bu":
        updatePortefolio(false);
        updateAccueil(false);
        updateAbout(true);
        updateContact(false);
        break;
      case "4bu":
        updateAccueil(false);
        updatePortefolio(false);
        updateAbout(false);
        updateContact(true);
        break;
      default:
        throw new Error("Ajoutez un state au nouveau boutton.");
    }
  }
  return (
    <>
      <Spinner />
      <Banner>
        <Button
          ariaLabel="Menu"
          ariaPressed="false"
          className={[clickBanner ? "active" : "banner--button"]}
          onClick={selected}
        >
          <RxHamburgerMenu className="banner--button__icone" />
        </Button>
      </Banner>
      <main className="main">
        <article className="main__conteneur">
          <Sidebar sidebarOpen={sidebarOpen} reseaulist={reseaulist}>
            <>
              {buttonlist.map(({ id, name }) => (
                <li className="sidebar_conteneur__li" key={id}>
                  <Button
                    id={id}
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
            </>
          </Sidebar>
          <Accueil accueilOpen={accueilOpen} />
          <Portfolio portfolioOpen={portfolioOpen} />
          <About aboutOpen={aboutOpen} />
          <Contact contactOpen={contactOpen} />
        </article>
      </main>
    </>
  );
}

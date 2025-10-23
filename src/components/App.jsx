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
  const [clickBanner, setClickBanner] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [page, setPage] = useState("Accueil");
  const [clickButtonSidebar, setClickButtonSidebar] = useState("1bu");
  const [projetClose, setProjetClose] = useState(false);

  useEffect(() => {
    document.title = `${page} - Portfolio Philippe JAYMES`;

    if (!sidebarOpen) {
      setClickButtonSidebar("1bu");
      setPage("Accueil");
      setProjetClose(true);
    }
  }, [page, sidebarOpen]);

  function toggleMenu() {
    setClickBanner((prev) => !prev);
    setSidebarOpen((prev) => !prev);
  }

  function selectPage(id, name) {
    setClickButtonSidebar(id);
    setPage(name);
    setProjetClose(name !== "Projets");
  }

  function getClassName({ baseClass, activeClass, isActive }) {
    return isActive ? activeClass : baseClass;
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
            ariaExpanded={clickBanner}
            className={getClassName({
              baseClass: "banner--button",
              activeClass: "active",
              isActive: clickBanner,
            })}
            onClick={toggleMenu}
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
                  ariaLabel={name}
                  ariaPressed={id === clickButtonSidebar}
                  className={getClassName({
                    baseClass: "sidebar_conteneur--button",
                    activeClass: "button",
                    isActive: id === clickButtonSidebar,
                  })}
                  onClick={() => selectPage(id, name)}
                >
                  {name}
                  <AiFillCaretDown
                    className={
                      id === clickButtonSidebar ? "rotate" : "rotateinit"
                    }
                  />
                </Button>
              </li>
            ))}
          </Sidebar>
          <Accueil accueilOpen={page === "Accueil"} />
          <Projets
            projetsOpen={page === "Projets"}
            setProjetClose={setProjetClose}
            projetClose={projetClose}
          >
            <Button
              type="button"
              ariaLabel="close"
              className="content__btn"
              onClick={() => setProjetClose(true)}
            >
              <ImCross />
            </Button>
          </Projets>
          <About aboutOpen={page === "À propos"} />
          <Contact contactOpen={page === "Contact"} />
        </article>
      </main>
    </>
  );
}

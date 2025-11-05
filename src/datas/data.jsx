// Importation des images pour la page Portfolio
import Brooky from "../assets/booki.webp";
import Ohmyfood from "../assets/ohmyfood.webp";
import La_panthère from "../assets/la_panthère.webp";
import Kanap from "../assets/kanap.webp";
import La_piiquante from "../assets/la_piiquante.webp";
import GameOn from "../assets/GameOn.webp";
import FishEye from "../assets/FishEye.webp";
import LesPetitsPlats from "../assets/LesPetitsPlats.webp";
import Billed from "../assets/Billed.webp";
import LearnHome from "../assets/Learn@Home.webp";
import Kasa from "../assets/kasa.webp";
import SportSee from "../assets/SportSee.webp";
import ArgentBank from "../assets/ArgentBank.webp";
import WealthHealth from "../assets/WealthHealth.webp";
// Importation des icons pour la page Sidebar
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

// Les regex qui permettent de valider les données inscrites par l'utilisateur page contact
export const regExpNomPrenom = new RegExp("^[A-Za-zÀ-ÖØ-öà-ÿ\\s'-]{2,}$");
export const regExpEmail = new RegExp(
  "^[a-z0-9.-_]+[@]{1}[a-z0-9.-_]+[.]{1}[a-z]{2,4}$"
);
// eslint-disable-next-line no-control-regex
export const regExpDescription = new RegExp("^([a-zA-Z0-9.-_,:) \n]){65,}$");

// Tableau objet qui incrémente la page Portfolio
export const portfoliolist = [
  {
    id: "1po",
    key: "booki",
    href: "https://zkine.github.io/Zkine_projet2_Brooky_04052022.github.io/",
    src: Brooky,
    alt: "Site la start-up Booky - intégration d'une maquette avec précision réalisée en HTML, CSS, interface responsive pour s'intégrer avec tout type d'écran",
  },
  {
    id: "2po",
    key: "ohmyfood",
    href: "https://zkine.github.io/Zkine_projet3_Ohmyfood_05072022.github.io/",
    src: Ohmyfood,
    alt: "Site de la jeune startup OhMyFood",
  },
  {
    id: "3po",
    key: "panth",
    href: "https://zkine.github.io/Zkine_projet4_La_Panthere_noire_23082022.io/",
    src: La_panthère,
    alt: "Site de l'agence La Panthère de web design basée à Lyon",
  },
  {
    id: "4po",
    key: "kanap",
    href: "https://github.com/Zkine/Zkine_projet5_Kanap_07092022.io",
    src: Kanap,
    alt: "Site de marque de canapés Kanap",
  },
  {
    id: "5po",
    key: "piiquante",
    href: "https://github.com/Zkine/Zkine_projet6_Piiquante_24102022.github.io",
    src: La_piiquante,
    alt: "Site web Piiquante",
  },
  {
    id: "6po",
    key: "gameon",
    href: "https://github.com/Zkine/GameOn-website-FR",
    src: GameOn,
    alt: "Les compétences acquises dans ce projet, notamment en matière de validation de formulaires et de gestion des événements, sont fondamentales pour la création de sites web interactifs et utilisateurs.",
  },
  {
    id: "7po",
    key: "fisheye",
    href: "https://github.com/Zkine/Front-End-Fisheye",
    src: FishEye,
    alt: "Site web FishEndEye",
  },
  {
    id: "8po",
    key: "plats",
    href: "https://github.com/Zkine/Zkine_projet7_Les-petits-plats_28092023.github.io",
    src: LesPetitsPlats,
    alt: "Site de recettes Les Petits Plats",
  },
  {
    id: "9po",
    key: "billed",
    href: "https://github.com/Zkine/Zkine_projet9_Bill-app_22112023.github.io",
    src: Billed,
    alt: "Application Saas destinée aux équipes de ressources humaines",
  },
  {
    id: "10po",
    key: "learn",
    href: "https://cream-lamb-1f5.notion.site/25665da5fae147fd8f97566042e1dd9e?v=f50981ba805a45518677a2094adeca2f&p=6035dc4e29e84e5eadd7314ea9c4b6d2&pm=s",
    src: LearnHome,
    alt: "Réalisation des diagrammes de cas d’usage, user stories, maquettes du site, Kanban",
  },
  {
    id: "11po",
    key: "kasa",
    href: "https://github.com/Zkine/Kasa.io",
    src: Kasa,
    alt: "Site de location d’appartements Kasa",
  },
  {
    id: "12po",
    key: "sportsee",
    href: "https://github.com/Zkine/SportSee",
    src: SportSee,
    alt: "Tableau de bord analytics avec React",
  },
  {
    id: "13po",
    key: "argentbank",
    href: "https://github.com/Zkine/Argent-Bank",
    src: ArgentBank,
    alt: "Application web bancaire ArgentBank avec React",
  },
  {
    id: "14po",
    key: "wealthhealth",
    href: "https://github.com/Zkine/HRnet",
    src: WealthHealth,
    alt: "Application RH HRnet refondue avec React",
  },
];

// Deux tableaux objets qui incrémentent la page Sidebar
export const buttonlist = [
  { id: "1bu", name: "Accueil" },
  { id: "2bu", name: "Projets" },
  { id: "3bu", name: "À propos" },
  { id: "4bu", name: "Contact" },
];

export const reseaulist = [
  {
    id: "1re",
    rel: "noreferrer",
    classname: "sidebar_conteneur__linkedin",
    href: "https://www.linkedin.com/in/philippe-jaymes/",
    target: "_blank",
    icon: <BsLinkedin />,
  },
  {
    id: "2re",
    rel: "noreferrer",
    classname: "sidebar_conteneur__github",
    href: "https://github.com/Zkine",
    target: "_blank",
    icon: <BsGithub />,
  },
];

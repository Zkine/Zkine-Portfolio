// Importation des images pour la page Portfolio
import Brooky from "../assets/brooky.webp";
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
export const regExpNomPrenom = new RegExp("^[a-zA-Z]{2,}$");
export const regExpEmail = new RegExp(
  "^[a-z0-9.-_]+[@]{1}[a-z0-9.-_]+[.]{1}[a-z]{2,4}$"
);
// eslint-disable-next-line no-control-regex
export const regExpDescription = new RegExp("^([a-zA-Z0-9.-_,:) \n]){65,}$");

// Tableau objet qui incrémente la page Portfolio
export const portfoliolist = [
  {
    id: "1po",
    href: "https://zkine.github.io/Zkine_projet2_Brooky_04052022.github.io/",
    src: Brooky,
    alt: "Site la start-up Booky - intégration d'une maquette avec précision réalisée en HTML, CSS, interface responsive pour s'intégrer avec tout type d'écran",
  },
  {
    id: "2po",
    href: "https://zkine.github.io/Zkine_projet3_Ohmyfood_05072022.github.io/",
    src: Ohmyfood,
    alt: "Site de la jeune startup OhMyFood",
  },
  {
    id: "3po",
    href: "https://zkine.github.io/Zkine_projet4_La_Panthere_noire_23082022.io/",
    src: La_panthère,
    alt: "Site de l'agence La Panthère de web design basée à Lyon",
  },
  {
    id: "4po",
    href: "https://github.com/Zkine/Zkine_projet5_Kanap_07092022.io",
    src: Kanap,
    alt: "Site de marque de canapés Kanap",
  },
  {
    id: "5po",
    href: "https://github.com/Zkine/Zkine_projet6_Piiquante_24102022.github.io",
    src: La_piiquante,
    alt: "Site web Piiquante",
  },
  {
    id: "6po",
    href: "https://github.com/Zkine/GameOn-website-FR",
    src: GameOn,
    alt: "Les compétences acquises dans ce projet, notamment en matière de validation de formulaires et de gestion des événements, sont fondamentales pour la création de sites web interactifs et utilisateurs. La compréhension de l'interaction entre JavaScript, HTML et CSS est également cruciale pour tout projet de développement web",
  },
  {
    id: "7po",
    href: "https://github.com/Zkine/Front-End-Fisheye",
    src: FishEye,
    alt: "Site web FishEndEye",
  },
  {
    id: "8po",
    href: "https://github.com/Zkine/Zkine_projet7_Les-petits-plats_28092023.github.io",
    src: LesPetitsPlats,
    alt: "Site de recettes les Petits Plats",
  },
  {
    id: "9po",
    href: "https://github.com/Zkine/Zkine_projet9_Bill-app_22112023.github.io",
    src: Billed,
    alt: "Application Saas destinées aux équipes de ressources humaines",
  },
  {
    id: "10po",
    href: "https://cream-lamb-1f5.notion.site/25665da5fae147fd8f97566042e1dd9e?v=f50981ba805a45518677a2094adeca2f&p=6035dc4e29e84e5eadd7314ea9c4b6d2&pm=s",
    src: LearnHome,
    alt: "Réalisation des diagrammes de cas d’usage, user stories, maquettes du site, Kanban",
  },
  {
    id: "11po",
    href: "https://github.com/Zkine/Kasa.io",
    src: Kasa,
    alt: "Site location d’appartements Kasa",
  },
  {
    id: "12po",
    href: "https://github.com/Zkine/SportSee",
    src: SportSee,
    alt: "Le site SportSee est un tableau de bord d'analytics avec React permettant à l’utilisateur de suivre le nombre de sessions réalisées ainsi que le nombre de calories brûlées",
  },
  {
    id: "13po",
    href: "https://github.com/Zkine/Argent-Bank",
    src: ArgentBank,
    alt: "L'application web ArgentBank utilise une API pour un compte utilisateur bancaire avec React",
  },
  {
    id: "14po",
    href: "https://github.com/Zkine/HRnet",
    src: WealthHealth,
    alt: "L'application web HRnet développait avec jQuery à été a été mise à jour avec un refonte compléte avec React ",
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

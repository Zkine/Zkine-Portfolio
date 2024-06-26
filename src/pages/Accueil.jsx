import PropTypes from "prop-types";
import Picture from "../components/Picture";
import accueilimg from "../assets/Accueilimg.webp";
import accueilimg_850w from "../assets/Accueilimg_850w.webp";
import accueilimg_385w from "../assets/Accueilimg_385w.webp";
import html from "../assets/HTML5.webp";
import html_385w from "../assets/HTML5_385w.webp";
import css from "../assets/CSS3.webp";
import css_385w from "../assets/CSS3_385w.webp";
import js from "../assets/JS.webp";
import js_385w from "../assets/JS_385w.webp";
import nodejs from "../assets/NODEJS.webp";
import NODEJS_385w from "../assets/NODEJS_385w.webp";
import react from "../assets/REACTJS.webp";
import react_385w from "../assets/REACTJS_385w.webp";
import scss from "../assets/SASS.webp";
import SASS_385w from "../assets/SASS_385w.webp";

export default function Accueil({ accueilOpen }) {
  return (
    accueilOpen && (
      <div className="accueil__conteneur">
        <figure className="accueil__conteneur__figure">
          <div className="accueil__conteneur__ordi">
            <Picture
              media="(max-width: 425px)"
              srcSet={accueilimg_385w}
              src={accueilimg}
              alt="ordinateur portable"
              className="accueil__conteneur__imgacc"
            >
              <source media="(max-width: 850px)" srcSet={accueilimg_850w} />
              <source media="(min-width: 851px)" srcSet={accueilimg} />
            </Picture>
          </div>
          <div className="accueil__conteneur__logo">
            <Picture
              media="(max-width: 425px)"
              srcSet={html_385w}
              src={html}
              alt="logo HTML5"
              className="accueil__conteneur__html5"
            ></Picture>
            <Picture
              media="(max-width: 425px)"
              srcSet={react_385w}
              src={react}
              alt="logo react"
              className="accueil__conteneur__react"
            ></Picture>
            <Picture
              media="(max-width: 425px)"
              srcSet={css_385w}
              src={css}
              alt="logo CSS3"
              className="accueil__conteneur__CSS3"
            ></Picture>
            <Picture
              media="(max-width: 425px)"
              srcSet={SASS_385w}
              src={scss}
              alt="logo sass"
              className="accueil__conteneur__sass"
            ></Picture>
            <Picture
              media="(max-width: 425px)"
              srcSet={js_385w}
              src={js}
              alt="logo javascript"
              className="accueil__conteneur__js"
            ></Picture>
            <Picture
              media="(max-width: 425px)"
              srcSet={NODEJS_385w}
              src={nodejs}
              alt="logo NODEJS"
              className="accueil__conteneur__nodejs"
            ></Picture>
          </div>
        </figure>
      </div>
    )
  );
}
Accueil.propTypes = {
  accueilOpen: PropTypes.bool.isRequired,
};

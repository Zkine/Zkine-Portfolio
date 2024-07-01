import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { regExpNomPrenom, regExpEmail, regExpDescription } from "../datas/data";
import Button from "../components/Button";
import Label from "../components/Label";
import API from "../api/api";

export default function Contact({ contactOpen }) {
  const [nom, setNom] = useState("");
  const [isNomError, setNomError] = useState(false);
  const [premon, setPremon] = useState("");
  const [isPremonError, setPremonError] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailError, setEmailError] = useState(false);
  const [description, setDescription] = useState("");
  const [isDescriptionError, setDescriptionError] = useState(false);
  const [connection, setConnection] = useState(null);

  useEffect(() => {
    async function startFletch() {
      if (connection) return await API(connection);
    }
    startFletch();
  }, [connection]);

  function validate(e) {
    e.preventDefault();
    e.stopPropagation();

    const formData = new FormData(e.target);
    const formJson = Object.fromEntries(formData.entries());

    const nameValid = regExpNomPrenom.test(nom);
    const prenomValid = regExpNomPrenom.test(premon);
    const emailValid = regExpEmail.test(email);
    const descriptionValid = regExpDescription.test(description);

    setNomError(!nameValid);
    setPremonError(!prenomValid);
    setEmailError(!emailValid);
    setDescriptionError(!descriptionValid);

    if (nameValid && prenomValid && emailValid && descriptionValid) {
      return setConnection(formJson);
    }
  }

  return (
    contactOpen && (
      <section className="conteneurcontact">
        <div className="conteneurcontact__div">
          <h2 className="conteneurcontact__h2">Me contacter</h2>
          <form onSubmit={validate} className="conteneurcontact__form">
            <p className="conteneurcontact__formulaire">
              <Label
                htmlFor="nom"
                className="conteneurcontact__label"
                type="text"
                name="nom"
                id="nom"
                className2={[
                  !regExpNomPrenom.test(nom) && nom !== ""
                    ? "invalid"
                    : "conteneurcontact__imput",
                ]}
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                boolean={isNomError}
              >
                {"Nom :"}
                {
                  "🔥 votre nom ne doit pas comporter de numéros ou de caractères spéciaux."
                }
              </Label>
              <Label
                htmlFor="prenom"
                className="conteneurcontact__label"
                type="text"
                name="prenom"
                id="prenom"
                className2={[
                  !regExpNomPrenom.test(premon) && premon !== ""
                    ? "invalid"
                    : "conteneurcontact__imput",
                ]}
                value={premon}
                onChange={(e) => setPremon(e.target.value)}
                boolean={isPremonError}
              >
                {"Prénom :"}
                {
                  "🔥 votre prénom ne doit pas comporter de numéros ou de caractères spéciaux."
                }
              </Label>
              <Label
                htmlFor="email"
                className="conteneurcontact__label"
                type="email"
                name="email"
                id="email"
                className2={[
                  !regExpEmail.test(email) && email !== ""
                    ? "invalid"
                    : "conteneurcontact__imput",
                ]}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                boolean={isEmailError}
              >
                {"Email :"}
                {"🔥 Veuillez entrer une adresse mail valide."}
              </Label>
              <br />
              <label htmlFor="descriptif" className="conteneurcontact__label">
                Descriptif de votre demande (Ajoutez autant de détails que
                nécessaire):
                <textarea
                  name="descriptif"
                  id="descriptif"
                  className={[
                    !regExpDescription.test(description) && description !== ""
                      ? "invaliddes"
                      : "conteneurcontact__descriptif",
                  ]}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                {isDescriptionError && (
                  <span>🔥 Veuillez entrer un minimum dans 65 caractères.</span>
                )}
              </label>
              <Button type="submit" className="conteneurcontact--bouton">
                {"Envoyer"}
              </Button>
            </p>
          </form>
        </div>
      </section>
    )
  );
}
Contact.propTypes = {
  contactOpen: PropTypes.bool.isRequired,
};

import PropTypes from "prop-types";

export default function Banner({ children }) {
  return (
    <header>
      <section className="banner">
        <h1 className="banner__titre">Philippe JAYMES - Portfolio</h1>
        {children}
      </section>
    </header>
  );
}
Banner.propTypes = {
  children: PropTypes.element.isRequired,
};

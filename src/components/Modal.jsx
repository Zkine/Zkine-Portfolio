import PropTypes from "prop-types";

export default function Modal({ children }) {
  return <div className="modal">{children}</div>;
}
Modal.propTypes = {
  children: PropTypes.node,
};

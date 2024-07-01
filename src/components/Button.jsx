import PropTypes from "prop-types";

export default function Button({
  type,
  ariaLabel,
  ariaPressed,
  onClick,
  children,
  className,
}) {
  return (
    <button
      type={type}
      aria-label={ariaLabel}
      aria-pressed={ariaPressed}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
Button.propTypes = {
  type: PropTypes.string,
  ariaLabel: PropTypes.string,
  ariaPressed: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

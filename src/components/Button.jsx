import PropTypes from "prop-types";

export default function Button({
  ariaLabel,
  ariaPressed,
  onClick,
  children,
  className,
}) {
  return (
    <button
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
  ariaLabel: PropTypes.string,
  ariaPressed: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

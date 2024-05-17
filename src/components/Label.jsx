import PropTypes from "prop-types";

export default function Label({
  htmlFor,
  className,
  children,
  type,
  name,
  id,
  className2,
  value,
  onChange,
  autoComplete,
  boolean,
}) {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children[0]}
      <input
        type={type}
        name={name}
        id={id}
        className={className2}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        required
      />
      {boolean && <span>{children[1]}</span>}
    </label>
  );
}
Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  className2: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  autoComplete: PropTypes.string.isRequired,
  boolean: PropTypes.bool.isRequired,
};

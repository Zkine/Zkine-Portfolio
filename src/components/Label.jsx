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
  boolean,
  ariainvalid,
  ariadescribedby,
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
        aria-required="true"
        aria-invalid={ariainvalid}
        aria-describedby={ariadescribedby}
        autoComplete="false"
      />
      {boolean && <>{children[1]}</>}
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
  className2: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  boolean: PropTypes.bool.isRequired,
  ariainvalid: PropTypes.bool,
  ariadescribedby: PropTypes.string.isRequired,
};

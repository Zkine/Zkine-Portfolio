import PropTypes from "prop-types";

export default function Picture({
  media,
  srcSet,
  children,
  src,
  alt,
  className,
}) {
  return (
    <picture>
      <source media={media} srcSet={srcSet} />
      {children}
      <img src={src} alt={alt} className={className} />
    </picture>
  );
}
Picture.propTypes = {
  media: PropTypes.string.isRequired,
  srcSet: PropTypes.node.isRequired,
  children: PropTypes.node,
  src: PropTypes.node.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

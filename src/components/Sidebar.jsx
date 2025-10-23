import PropTypes from "prop-types";

export default function Sidebar({ sidebarOpen, reseaulist, children }) {
  return (
    sidebarOpen && (
      <div className="sidebar_conteneur">
        <nav>
          <ul className="sidebar_conteneur__menu">{children}</ul>
        </nav>
        <aside className="sidebar_conteneur__icone">
          {reseaulist.map((reseau) => (
            <a
              key={reseau.id}
              rel={reseau.rel}
              className={reseau.classname}
              href={reseau.href}
              target={reseau.target}
            >
              {reseau.icon}
            </a>
          ))}
        </aside>
      </div>
    )
  );
}
Sidebar.propTypes = {
  sidebarOpen: PropTypes.bool.isRequired,
  reseaulist: PropTypes.array.isRequired,
  children: PropTypes.any.isRequired,
};

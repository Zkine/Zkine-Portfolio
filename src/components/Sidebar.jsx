import PropTypes from "prop-types";

export default function Sidebar({ sidebarOpen, reseaulist, children }) {
  return (
    sidebarOpen && (
      <aside className="sidebar_conteneur">
        <nav>
          <menu className="sidebar_conteneur__menu">{children}</menu>
        </nav>
        <div className="sidebar_conteneur__icone">
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
        </div>
      </aside>
    )
  );
}
Sidebar.propTypes = {
  sidebarOpen: PropTypes.bool.isRequired,
  reseaulist: PropTypes.array.isRequired,
  children: PropTypes.element.isRequired,
};

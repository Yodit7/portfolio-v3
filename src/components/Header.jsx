import "../css/header.css";

export function Header({ onNavItemClick, activeSection }) {
  return (
    <>
      <div className="header">
        <a href="/">Y</a>
        <ul className="nav">
          <li
            className={`nav-item ${
              activeSection === "about-section" ? "active" : ""
            }`}
            onClick={() => onNavItemClick("about-section")}
          >
            About
          </li>
          <li
            className={`nav-item ${
              activeSection === "projects-section" ? "active" : ""
            }`}
            onClick={() => onNavItemClick("projects-section")}
          >
            Projects
          </li>
          <li
            className={`nav-item ${
              activeSection === "contact-section" ? "active" : ""
            }`}
            onClick={() => onNavItemClick("contact-section")}
          >
            Contact
          </li>

          {/* <li className="nav-item">About</li>
                    <li className="nav-item"> Projects</li>
                    <li className="nav-item">Contact</li> */}
        </ul>
      </div>
    </>
  );
}

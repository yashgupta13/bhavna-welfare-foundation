import React, { useRef, useEffect } from "react";
import "./Navbar.css"; // Import your CSS file

const HeaderComponent = () => {
  const toggleRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const toggle = toggleRef.current;
    const nav = navRef.current;

    const handleToggleClick = () => {
      if (nav) nav.classList.toggle("show-menu");
      if (toggle) toggle.classList.toggle("show-icon");
    };

    if (toggle) {
      toggle.addEventListener("click", handleToggleClick);
    }
    return () => {
      if (toggle) {
        toggle.removeEventListener("click", handleToggleClick);
      }
    };
  }, []);

  return (
    <header className="header">
      <nav className="nav container_2">
        <div className="navigation__data">
          <a href="#" className="navigation__logo" id="logo__text">
            Bhavna Welfare Foundation
          </a>

          <div className="navigation__toggle" id="navigation-toggle" ref={toggleRef}>
            <i className="ri-menu-line navigation__burger"></i>
            <i className="ri-close-line navigation__close"></i>
          </div>
        </div>

        {/*=============== NAV MENU ===============*/}
        <div className="navigation__menu" id="navigation-menu" ref={navRef}>
          <ul className="navigation__list">
            <li>
              <a href="#" className="navigation__link">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="navigation__link">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="navigation__link">
                Gallery
              </a>
            </li>
            <li>
              <a href="#" className="navigation__link">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="navigation__link">
                Donate
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;

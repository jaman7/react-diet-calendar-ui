import { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';

const MainMenu = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const navlinkClass = 'nav__link';
  const activeClass = 'nav__link--active';

  const menuData = [
    {
      name: 'Dashboard',
      to: '/',
    },
  ];

  const menuDropdownData = [
    {
      name: 'User profile',
      to: `/user-profile`,
    },
    {
      name: 'Logout',
      to: `/logout`,
    },
  ];

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  const handleToggleDropdown = () => setIsActive(!isActive);
  const closeDropdown = () => setIsActive(false);

  return (
    <nav id="nav" className="nav">
      <div className="container">
        <button type="button" className={`toggler ${navbarOpen ? ' open' : ''}`} onClick={handleToggle}>
          <span className="toggler-line toggler-line-top" />
          <span className="toggler-line toggler-line-middle" />
          <span className="toggler-line toggler-line-bottom" />
        </button>

        <ul className={`nav__menu  nav__menu--1 ${navbarOpen ? ' open' : ''}`}>
          {menuData &&
            menuData.map(item => (
              <li className="nav__item" key={item.name}>
                <NavLink
                  className={({ isActive }) => `${navlinkClass} ${isActive ? activeClass : ''}`}
                  to={item?.to as string}
                  onClick={() => closeMenu()}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
        </ul>

        <ul className="nav__menu nav__menu--2">
          <li className={`nav__item dropdown ${isActive ? ' show' : ''}`}>
            <button className="nav__link dropdown__link" type="button" onClick={handleToggleDropdown} onBlur={closeDropdown}>
              <img src="img/avatar.svg" className="img-fluid" alt="avatar" />
              <span>Olivia Wilde</span>
              <i className="caret" />
            </button>

            <div ref={dropdownRef} className="dropdown__menu" aria-labelledby="navLabel1">
              {menuDropdownData &&
                menuDropdownData.map(item => (
                  <NavLink key={item.name} className="dropdown__item" to={item.to}>
                    {item.name}
                  </NavLink>
                ))}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainMenu;

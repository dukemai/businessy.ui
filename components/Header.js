import { useState, useEffect, useCallback, useRef, useContext } from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import AppContext from '../AppContext';

const linkStyle = {
  marginRight: 15,
};

const menuItems = [
  { title: 'Home', link: '/', everyone: true },
  { title: 'Sign in', link: '/signin', anonymous: true },
  { title: 'Profile', link: '/profile', protected: true },
];

const isMenuVisible = (menuItem, isAuthenticated) =>
  menuItem.everyone ||
  (isAuthenticated && menuItem.protected) ||
  (!isAuthenticated && menuItem.anonymous);

const Header = ({ onSignUpClicked, onLogoClicked }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const toggleMenu = e => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    setIsOpen(!isOpen);
  };
  const documentClicked = e => {
    if (!menuRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };
  const isDevice = 'ontouchstart' in document.documentElement;
  useEffect(() => {
    if (isDevice) {
      document.addEventListener('touchstart', documentClicked);
    } else {
      document.addEventListener('click', documentClicked);
    }
    return () => {
      document.removeEventListener('click', documentClicked);
      document.removeEventListener('touchstart', documentClicked);
    };
  });
  const state = useContext(AppContext);
  const isAuthenticated = Boolean(state.user);
  const onSignOutClicked = () => state.setUser(null);
  const renderRightMenu = () => (
    <div className="top-bar-right">
      <ul className="menu">
        <li>
          {!isAuthenticated && (
            <button
              onClick={onSignUpClicked}
              className="button small hollow"
              type="button"
            >
              Sign up
            </button>
          )}
          {isAuthenticated && (
            <button
              onClick={onSignOutClicked}
              className="button small hollow"
              type="button"
            >
              Sign out
            </button>
          )}
        </li>
      </ul>
    </div>
  );
  return (
    <>
      <div className="top-bar show-for-medium">
        <div className="top-bar-left">
          <ul className="dropdown menu" data-dropdown-menu>
            <li className="menu-text">Businessy</li>
            {menuItems.map(
              menuItem =>
                isMenuVisible(menuItem, isAuthenticated) && (
                  <li key={menuItem.link}>
                    <Link href={menuItem.link}>
                      <a>{menuItem.title}</a>
                    </Link>
                  </li>
                )
            )}
          </ul>
        </div>
        {renderRightMenu()}
      </div>
      <section className="title-bar show-for-small-only">
        <div className="title-bar-left">
          <button onClick={toggleMenu} className="menu-icon" type="button" />
          <span onClick={onLogoClicked} className="title-bar-title">
            Businessy
          </span>
        </div>

        {renderRightMenu()}
      </section>
      <div
        ref={menuRef}
        className={classnames('off-canvas position-left', {
          'is-open': isOpen,
        })}
      >
        <ul className="vertical menu mobile-ofc">
          <li className="menu-text">Businessy</li>
          {menuItems.map(
            menuItem =>
              isMenuVisible(menuItem, isAuthenticated) && (
                <li key={menuItem.link}>
                  <Link href={menuItem.link}>
                    <a>{menuItem.title}</a>
                  </Link>
                </li>
              )
          )}
        </ul>
      </div>
    </>
  );
};

export default Header;

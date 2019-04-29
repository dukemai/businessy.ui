import { useState, useEffect, useCallback, useRef, useContext } from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import AppContext from '../AppContext';
import SearchHeader from './SearchHeader';

const linkStyle = {
  marginRight: 15,
};

const menuItems = [];

const isMenuVisible = (menuItem, isAuthenticated) =>
  menuItem.everyone ||
  (isAuthenticated && menuItem.protected) ||
  (!isAuthenticated && menuItem.anonymous);

const Header = ({ onSignUpClicked, onLogoClicked, hideSearchBar = false }) => {
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
  const isDevice =
    typeof document !== 'undefined' &&
    'ontouchstart' in document.documentElement;
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
      <ul className="menu simple">
        {!isAuthenticated && (
          <>
            <li>
              <Link href="/signin">
                <a>Sign in</a>
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/signup">
                <a>Sign up</a>
              </Link>
            </li>
          </>
        )}
        {isAuthenticated && (
          <>
            <li>
              <Link href="/profile">
                <a>Profile</a>
              </Link>
            </li>
            <li>
              <button
                onClick={onSignOutClicked}
                className="button small"
                type="button"
              >
                Sign out
              </button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
  return (
    <>
      <header className="top-bar show-for-medium top-bar--main">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              <Link href="/">
                <a className="logo h3">Businessy</a>
              </Link>
            </li>
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
            {!hideSearchBar && (
              <li className="grid-x align-middle top-bar__search">
                <SearchHeader />
              </li>
            )}
          </ul>
        </div>
        {renderRightMenu()}
      </header>
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
        className={classnames('off-canvas position-left show-for-small-only', {
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

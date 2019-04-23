import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import classnames from 'classnames';

const linkStyle = {
  marginRight: 15,
};

const menuItems = [
  { title: 'Home', link: '/' },
  { title: 'Sign in', link: '/signin' },
  { title: 'Profile', link: '/profile' },
];

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
  useEffect(() => {
    document.addEventListener('click', documentClicked);
    return () => {
      document.removeEventListener('click', documentClicked);
    };
  });
  return (
    <>
      <section className="title-bar">
        <div className="title-bar-left">
          <button onClick={toggleMenu} className="menu-icon" type="button" />
          <span onClick={onLogoClicked} className="title-bar-title">
            Businessy
          </span>
        </div>

        <div className="top-bar-right">
          <ul className="menu">
            <li>
              <button
                onClick={onSignUpClicked}
                className="button small hollow"
                type="button"
              >
                Sign up
              </button>
            </li>
          </ul>
        </div>
      </section>
      <div
        ref={menuRef}
        className={classnames('off-canvas position-left', {
          'is-open': isOpen,
        })}
      >
        <ul className="vertical menu mobile-ofc">
          <li className="menu-text">Businessy</li>
          {menuItems.map(menuItem => (
            <li key={menuItem.link}>
              <Link href={menuItem.link}>{menuItem.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;

import Link from 'next/link';

const linkStyle = {
  marginRight: 15,
};

const Header = ({ onSignUpClicked, onLogoClicked }) => (
  <section className="title-bar">
    <div className="title-bar-left">
      <button className="menu-icon" type="button" />
      <span onClick={onLogoClicked} className="title-bar-title">Businessy</span>
    </div>
    <div className="top-bar-right">
      <ul className="menu">
        <li>
          <button onClick={onSignUpClicked} className="button small hollow" type="button">
            Sign up
          </button>
        </li>
      </ul>
    </div>
  </section>
);

export default Header;

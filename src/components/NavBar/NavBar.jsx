import { NavLink } from 'react-router-dom';
import './NavBarStyle.css';

const navBarData = ['home','contact'];

export const NavBar = () => {
    const linkJSX = navBarData.map((item, index) => (
      <li className={`link link-${item}`} key={index}>
        <NavLink  to={`/${item}`}>
            {item}
        </NavLink>
      </li>
    ));

  return (
    <ul className="nav-container">{linkJSX}</ul>
  );
};

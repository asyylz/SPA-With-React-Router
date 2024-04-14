//import { Link } from 'react-router-dom';

// NavLink has one special behavior. If you add the class name prop to it, it's actually not the regular class name prop, which takes a string, but instead it's a prop that takes a function.

import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end 
              // This end property indicates that this link should only be considered active if the currently active route ends with this path after the URL.
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

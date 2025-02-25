import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css"

function PageNav() {
  return (
    <nav>
      <ul className={styles.nav}>
        <li>
          <NavLink className="navlink" to="/">HomePage</NavLink>
        </li>
        <li>
          <NavLink className="navlink" to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink className="navlink" to="/product">Product</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;

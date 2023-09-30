import { NavLink } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import styles from "../Header/Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <NavLink to="/">
          <Logo />
        </NavLink>
      </nav>
    </header>
  );
};

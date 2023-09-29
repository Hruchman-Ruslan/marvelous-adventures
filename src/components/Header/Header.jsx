import { NavLink } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import { Search } from "../Search/Search";
import { useState } from "react";
import styles from "../Header/Header.module.css";

export const Header = () => {
  const [hero, setHero] = useState([]);
  console.log(hero);

  return (
    <header className={styles.header}>
      <nav>
        <NavLink to="/">
          <Logo />
        </NavLink>
      </nav>
      <Search setHero={setHero} />
    </header>
  );
};

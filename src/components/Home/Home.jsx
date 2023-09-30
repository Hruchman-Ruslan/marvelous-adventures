import { useState } from "react";
import { Search } from "../Search/Search";
import styles from "../Home/Home.module.css";

import imgMarvel from "../../img/image.png";

export const Home = () => {
  const [hero, setHero] = useState([]);
  console.log(hero);

  return (
    <>
      <Search setHero={setHero} />
      <ul className={styles.list}>
        {hero.map(({ id, name }) => (
          <li key={id}>
            <p>{name}</p>
            <img src={imgMarvel} alt={name} className={styles.img} />
          </li>
        ))}
      </ul>
    </>
  );
};

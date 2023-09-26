import { useState } from "react";
import { Logo } from "../Logo/Logo";
import { Search } from "../Search/Search";

export const Home = () => {
  const [hero, setHero] = useState([]);
  console.log(hero);

  return (
    <>
      <Logo />
      <Search setHero={setHero} />
    </>
  );
};

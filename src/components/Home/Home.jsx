import { useRef } from "react";
import { useState } from "react";
import { fetchHeroes } from "../../api/apiMarvel";

export const Home = () => {
  const [, setHero] = useState([]);
  let input = useRef("");

  const handleClick = async (e) => {
    e.preventDefault();
    let value = input.current.value;
    if (value === "") return;

    try {
      let heroes = await fetchHeroes(value);
      setHero(heroes);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <form>
          <input type="text" placeholder="Search..." ref={input} />
          <button onClick={handleClick}>Search</button>
        </form>
        <p>Web-based platform</p>
        <h1>Marvelous Adventures</h1>
        <p>
          is a web-based platform that provides an immersive experience for
          users to explore and discover a vast collection of Marvel characters
          and comics. Start exploring the Marvelous Adventures now by visiting
          our Characters and Comics sections and discover your new favorites
          today.
        </p>
        <button type="button">All Characters</button>
      </div>
      <div>
        <img src="#" alt="#" />
        <h2>Spider man</h2>
        <a href="#">Link</a>
        <img src="#" alt="#" />
        <p>Characters</p>
        <p>
          With amazing spider-like abilities, teenage science whiz Peter Parker
          fights crime and dreams of becoming an Avenger as Spider-Man.
        </p>
      </div>
    </>
  );
};

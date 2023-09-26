import PropTypes from "prop-types";
import { FaSearch } from "react-icons/fa";
import { fetchHeroes } from "../../api/apiMarvel";
import { useState } from "react";

export const Search = ({ setHero }) => {
  const [searchText, setSearchText] = useState("");

  const onSearch = async (e) => {
    e.preventDefault();

    try {
      const heroes = await fetchHeroes();
      setHero(heroes);
      setSearchText("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={onSearch}>
          Search <FaSearch />
        </button>
      </form>
    </>
  );
};

Search.propTypes = {
  setHero: PropTypes.func.isRequired,
};

import React, { useState, useReducer, useMemo, useRef } from "react";
import UseCharacter from "../hooks/UseCharacter";
import Search from "./Search";
import styles from "../styles/Characters.module.css"

const initialState = {
  favorites: [],
};

const apiUrl = "https://rickandmortyapi.com/api/character/"

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

const Characters = () => {

  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

  const [search, setSearch] = useState("");

  const searchInput = useRef(null);

  const characters = UseCharacter(apiUrl)

  const handleSearch = () => {
    setSearch(searchInput.current.value);
  };

  // const filteredUsers = characters.filter( (user) => {
  //   return user.name.toLowerCase().includes(search.toLowerCase())
  // })

  const filteredUsers = useMemo(
    () =>
      characters.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [characters, search]
  );

  const handleClick = (favorite) => {
    dispatch({
      type: "ADD_TO_FAVORITE",
      payload: favorite,
    });
  };


  return (
    <div className={styles.Characters}>
      {favorites.favorites.map((favorite) => (
        <li key={favorite.id}>{favorite.name}</li>
      ))}

      <Search search={search} searchInput={searchInput} handleSearch={handleSearch}/>

      {filteredUsers.map((character) => (
        <div className="item" key={character.id}>
          <h2>{character.name}</h2>
          <button type="button" onClick={() => handleClick(character)}>
            Agregar a Favoritos
          </button>
        </div>
      ))}
    </div>
  );
};

export default Characters;

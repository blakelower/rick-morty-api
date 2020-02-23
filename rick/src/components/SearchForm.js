import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function SearchForm() {
  const [lookNames, setLookNames] = useState([]);
  const [csearch, newsearch] = useState("");
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        console.log(res.data.results);
        const characters = res.data.results;
        const results = characters.filter(character => {
          return character.name.toLowerCase().includes(csearch.toLowerCase());
        });
        setLookNames(results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [csearch]);
  const onSearchChange = event => {
    newsearch(event.target.value);
    console.log(newsearch);
  };
  let searchResult = "";
  var submit = event => {
    return (searchResult = event.target.value);
  };

  return (
    <section>
      <form onSubmit={event => submit(event)} className="tb">
        <input className="td"
          id="name"
          type="text"
          placeholder="Search"
          value={csearch}
          onChange={event => onSearchChange(event)}
        />
      </form>
      {lookNames.map((rick, index) => {
        return <CharacterCard key={index} chars={rick} />;
      })}
    </section>
  );
}
import React from "react";
import { useCharacters } from "../hooks/useCharacters";
import "./CharacterList.css";
import { Link } from "react-router-dom";

export default function CharactersList() {

    const { error, loading, data } = useCharacters();

    if (loading) return <div>spinner...</div>;

    if (error) return <div>uh oh...</div>;

    return (
      <div className="CharacterList">
        {data.characters.results.map(character => {
            return (
            <div>
              <Link to={`/${character.id}`}>
                <img src={character.image}/>
                <h2>{character.name}</h2>
              </Link>
            </div>
            );
        })}
    </div>
    );
}
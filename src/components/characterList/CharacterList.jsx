import React from 'react';
import PropTypes from 'prop-types';

export default function CharacterList({ characters }) {

  const listElements = characters.map((character, i) => {
    return (
      <li key={i} >
        <p>{character.name}</p>
        <img src={character.photoUrl} />
        <p>Enemies: {character.enemies}</p>
        <p>Affiliation: {character.affiliation}</p>
      </li>
    );
  });

  return (
    <ul>
      {listElements}       
    </ul>
  );
}

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

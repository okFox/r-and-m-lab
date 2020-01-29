import React from 'react';
import Character from './Character';
import characters from '../characters';

export default characters.map(character => {
  return <Character
    key={character.id}
    image={`https://rickandmortyapi.com/api/character/avatar/${character.id}.jpeg`}
    name={character.name}
    id={character.id}
    dateCreated={character.dateCreated}
    status={character.status}
    species={character.species}
    gender={character.gender}
    origin={character.origin}
    lastLocation={character.lastLocation}
  />;
});

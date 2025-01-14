import React, { useState } from 'react';

const CharacterSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [characters, setCharacters] = useState([
    { id: 1, name: 'Iron Man', description: 'A wealthy industrialist and genius inventor.' },
    { id: 2, name: 'Spider-Man', description: 'A high school student turned superhero.' },
    { id: 3, name: 'Captain America', description: 'A super-soldier with a strong moral code.' },
  ]);

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Character Search</h1>
      <input
        type="text"
        placeholder="Search for a character"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredCharacters.map((character) => (
          <li key={character.id}>
            <h2>{character.name}</h2>
            <p>{character.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterSearch;

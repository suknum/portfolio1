// src/components/CharacterSearch.js
import React, { useState } from 'react';
import { fetchCharacterInfo } from '../api/LostArkApi';

const CharacterSearch = () => {
  const [characterName, setCharacterName] = useState('');
  const [characterData, setCharacterData] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await fetchCharacterInfo(characterName);
      setCharacterData(data);
    } catch (error) {
      console.error("Error fetching character data:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="캐릭터 이름 입력"
        value={characterName}
        onChange={(e) => setCharacterName(e.target.value)}
      />
      <button onClick={handleSearch}>검색</button>
      {characterData && (
        <div>
          <h3>{characterData.name}</h3>
          <p>레벨: {characterData.level}</p>
          <p>클래스: {characterData.class}</p>
        </div>
      )}
    </div>
  );
};

export default CharacterSearch;

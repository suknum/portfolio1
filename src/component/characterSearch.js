import React, { useState } from 'react';
import { fetchCharacterInfo } from '../api/LostArkApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const CharacterSearch = () => {
  const [characterName, setCharacterName] = useState('');
  const [characterData, setCharacterData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleKeyPress = (e) =>{
    if(e.key === 'Enter'){
      handleSearch();
    }
  }

  const handleSearch = async () => {
    if (!characterName.trim()) {
      setError("⚠ 캐릭터 이름을 입력하세요.");
      return;
    }

    setError(null);
    setCharacterData(null);
    setLoading(true);

    try {
      console.log(`🔍 검색할 캐릭터: ${characterName}`);
      const data = await fetchCharacterInfo(characterName);

      if (Array.isArray(data)) {
        // 이름이 정확히 일치하는 캐릭터만 필터링
        const exactMatch = data.filter(
          (char) => char.CharacterName === characterName
        );

      

        if (exactMatch.length > 0) {
          setCharacterData(exactMatch[0]); // 첫 번째 일치하는 캐릭터 표시
        } else {
          setError("❌ 해당 캐릭터 정보를 찾을 수 없습니다.");
        }
      } else {
        setError("🚨 잘못된 데이터 형식입니다.");
      }
    } catch (error) {
      setError("🚨 캐릭터 데이터를 불러오는 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>로스트아크 캐릭터 검색</h2>
      <input
        type="text"
        placeholder="캐릭터 이름 입력"
        value={characterName}
        onChange={(e) => setCharacterName(e.target.value)}
        onKeyDown={handleKeyPress}

        style={styles.input}
      />
      <button onClick={handleSearch} style={styles.button} disabled={loading}>
        {loading ? <FontAwesomeIcon icon={faMagnifyingGlass} /> : <FontAwesomeIcon icon={faMagnifyingGlass} />}
      </button>

      {error && <p style={styles.error}>{error}</p>}

      {characterData && (
        <div style={styles.result}>
          <h3> {characterData.CharacterName}</h3>
          <p> 레벨: {characterData.ItemAvgLevel}</p>
          <p> 클래스: {characterData.CharacterClassName}</p>
        </div>
      )}
    </div>
  );
};

// ✅ 스타일 정의 추가
const styles = {
  header: {
    marginTop: '-10px',
  },
  container: {
    textAlign: 'center',
    padding: '10px',
    maxWidth: '400px',
    margin: 'auto',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
  },
  input: {
    width: '70%',
    padding: '8px',
    marginBottom: '5px',
    marginRight : '2px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    padding: '2px 15px',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: '#f9f9f9',
    borderRadius: '5px',
    fontSize: '16px',
    color: '#000',
  },
  error: {
    color: 'red',
    fontSize: '14px',
    marginTop: '10px',
  },
  result: {
    marginTop: '20px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: '#fff',
  },
};

export default CharacterSearch;

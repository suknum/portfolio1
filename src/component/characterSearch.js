import React, { useState } from 'react';
import { fetchCharacterInfo } from '../api/LostArkApi'; 
import { fetchImageInfo } from '../api/CharacterImgApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const CharacterSearch = () => {
  const [characterName, setCharacterName] = useState('');
  const [characterData, setCharacterData] = useState(null);
  const [characterimgData, setCharacterImgData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearch = async () => {
    if (!characterName.trim()) {
      setError("⚠ 캐릭터 이름을 입력하세요.");
      return;
    }

    setError(null);
    setCharacterData(null);
    setCharacterImgData(null);
    setLoading(true);

    try {
      console.log(`🔍 검색할 캐릭터: ${characterName}`);
      
      // 캐릭터 정보 API 호출
      const data = await fetchCharacterInfo(characterName);
      // 캐릭터 이미지 API 호출
      const imgData = await fetchImageInfo(characterName);

      console.log("📸 이미지 데이터:", imgData);

      if (Array.isArray(data)) {
        const exactMatch = data.filter(
          (char) => char.CharacterName === characterName
        );

        if (exactMatch.length > 0) {
          setCharacterData(exactMatch[0]); // 첫 번째 일치하는 캐릭터 설정
          setCharacterImgData(imgData?.ArmoryProfile); // 이미지 데이터 업데이트
        } else {
          setError("❌ 해당 캐릭터 정보를 찾을 수 없습니다.");
        }
      } else {
        setError("🚨 잘못된 데이터 형식입니다.");
      }
    } catch (error) {
      setError("🚨 캐릭터 데이터를 불러오는 중 오류가 발생했습니다.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.contentWrap}>
        <h2 style={styles.header}>LostIn</h2>
        <input
          type="text"
          placeholder="캐릭터 이름을 입력해주세요..."
          value={characterName}
          onChange={(e) => setCharacterName(e.target.value)}
          onKeyDown={handleKeyPress}
          style={styles.input}
        />
        <button onClick={handleSearch} style={styles.button} disabled={loading}>
          {loading ? <FontAwesomeIcon icon={faMagnifyingGlass} /> : <FontAwesomeIcon icon={faMagnifyingGlass} />}
        </button>
      </div>
      
      {error && <p style={styles.error}>{error}</p>}

      {characterData && (
        <div style={styles.result}>
          {/* 이미지 데이터가 있을 때만 렌더링 */}
          {characterimgData && characterimgData.CharacterImage ? (
            <img src={characterimgData.CharacterImage} alt="Character" style={{ width: "150px", height: "150px" }} />
          ) : (
            <p>이미지를 불러오는 중...</p>
          )}
          
          <h3>{characterData.CharacterName}</h3>
          <p>레벨: {characterData.ItemAvgLevel}</p>
          <p>클래스: {characterData.CharacterClassName}</p>
        </div>
      )}
    </div>
  );
};


// ✅ 스타일 정의 추가
const styles = {
  header: {
    marginTop: '5px',
    marginright : '2px',
    cursor: 'pointer',
  },
  container: {
    textAlign: 'center',
    padding: '10px',
    maxWidth: '400px',
    margin: 'auto',
    borderBottom: '1px solid #272c35',
    backgroundColor: '#15181d',
    color : '#fff',
  },

  contentWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    marginright : '2px',
  },

  input: {
    width: '60%',
    padding: '8px',
    marginBottom: '5px',
    marginRight : '2px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: 'none',
  },

  button: {
    padding: '2px 15px',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: '#15181d',
    borderRadius: '5px',
    fontSize: '16px',
    color: '#fff',
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
    backgroundColor: '#15181d',
  },
};

export default CharacterSearch;

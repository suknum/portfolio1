import React, { useState, } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const CharacterSearch = () => {
  const [characterName, setCharacterName] = useState('');
  const navigate = useNavigate(); // 페이지 이동을 위한 hook

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearch = () => {
    if (!characterName.trim()) {
      alert('⚠ 캐릭터 이름을 입력하세요.');
      return;
    }

    // 검색어를 가지고 결과 페이지로 이동
    navigate(`/results?name=${characterName}`);
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
        <button onClick={handleSearch} style={styles.button}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </div>
  );
};




// ✅ 스타일 정의 추가
const styles = {
  header: {
    marginTop: '5px',
    marginright : '2px',
    cursor: 'pointer',
    textDecoration: 'none',
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

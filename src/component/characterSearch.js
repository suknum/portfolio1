import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from './characterSearch.module.css';

const CharacterSearch = ({ setSearchQuery, setShowResult, setActiveTab , setShowUpdate }) => {
  const [characterName, setCharacterName] = useState('');
  const navigate = useNavigate();

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.target.blur();
      handleSearch();
    }
  };

  const handleSearch = () => {
    if (!characterName.trim()) {
      alert('⚠ 캐릭터 이름을 입력하세요.');
      return;
    }

    setSearchQuery(characterName); // 검색어 상태 업데이트
    setShowResult(true); // 검색 결과 활성화
    setActiveTab(''); // ✅ 검색 시 활성화된 탭 닫기
    setShowUpdate(false); // ✅ 검색 시 업데이트 숨김
  };

  const goToHome = () => {
    setSearchQuery('');
    window.location.reload(); // 새로고침
    navigate('/');
  };

  return (
    <div className={styles.container}>
        <h2 className={styles.header} onClick={goToHome}>LostIn</h2>
      <div className={styles.contentWrap}>

        <form method='get' className={` ${styles.form} ${styles.searchBar}`}>
          <input
            type="text"
            placeholder="캐릭터 이름을 입력해주세요..."
            value={characterName}
            onChange={(e) => setCharacterName(e.target.value)}
            onKeyDown={handleKeyPress}
            className={styles.input}
            
          />
          
          <button onClick={handleSearch} className={styles.button}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
        
      </div>
    </div>
  );
};


export default CharacterSearch;

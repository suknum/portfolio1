import React, { useState } from 'react';
import { fetchCharacterInfo } from '../api/LostArkApi';

const CharacterSearch = () => {
  const [characterName, setCharacterName] = useState('');
  const [characterData, setCharacterData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // 🔄 로딩 상태 추가

  const handleSearch = async () => {
    if (!characterName.trim()) {
      setError("캐릭터 이름을 입력하세요."); // 🔴 빈 입력 방지
      return;
    }

    setError(null);
    setCharacterData(null);
    setLoading(true); // 🔄 로딩 시작

    try {
      console.log(`🔍 검색할 캐릭터: ${characterName}`); // 디버깅용 로그
      const data = await fetchCharacterInfo(characterName);

      if (data.length > 0) {
        setCharacterData(data[0]); // 첫 번째 캐릭터 정보 표시
      } else {
        setError("❌ 해당 캐릭터 정보를 찾을 수 없습니다.");
      }
    } catch (error) {
      setError("🚨 캐릭터 데이터를 불러오는 중 오류가 발생했습니다.");
    } finally {
      setLoading(false); // ✅ 로딩 종료
    }
  };

  return (
    <div style={styles.container}>
      <h2>🔍 로스트아크 캐릭터 검색</h2>
      <input
        type="text"
        placeholder="캐릭터 이름 입력"
        value={characterName}
        onChange={(e) => setCharacterName(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleSearch} style={styles.button} disabled={loading}>
        {loading ? "검색 중..." : "검색"}
      </button>

      {error && <p style={styles.error}>{error}</p>}

      {characterData && (
        <div style={styles.result}>
          <h3>🎮 {characterData.CharacterName}</h3>
          <p>🔹 레벨: {characterData.CharacterLevel}</p>
          <p>🔹 클래스: {characterData.CharacterClassName}</p>
        </div>
      )}
    </div>
  );
};

// ✅ 간단한 CSS 스타일 추가
const styles = {
  container: { padding: "20px", textAlign: "center" },
  input: { padding: "10px", fontSize: "16px", marginBottom: "10px" },
  button: { padding: "10px 20px", fontSize: "16px", cursor: "pointer" },
  error: { color: "red", marginTop: "10px" },
  result: { marginTop: "20px", padding: "10px", border: "1px solid #ddd", display: "inline-block" },
};

export default CharacterSearch;


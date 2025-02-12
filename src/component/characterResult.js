import React, { useEffect, useState } from 'react';
import { fetchCharacterInfo } from '../api/LostArkApi';
import { fetchImageInfo } from '../api/CharacterImgApi';

const CharacterResult = ({ characterName }) => {  // ← Results → CharacterResult
  const [characterData, setCharacterData] = useState(null);
  const [characterImgData, setCharacterImgData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!characterName) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        console.log("🔍 Fetching data for:", characterName);
        
        const data = await fetchCharacterInfo(characterName);
        const imgData = await fetchImageInfo(characterName);
        const matchData = data.find((item) => item.CharacterName === characterName);
        
        console.log("📜 Character Data:", data);
        console.log("🖼 Image Data:", imgData);
        
        if (Array.isArray(data) && data.length > 0) {
          setCharacterData(matchData);
          setCharacterImgData(imgData?.ArmoryProfile);
        } else {
          setError('❌ 해당 캐릭터 정보를 찾을 수 없습니다.');
        }
      } catch (error) {
        setError('🚨 캐릭터 데이터를 불러오는 중 오류가 발생했습니다.');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [characterName]);

  return (
    <div style={styles.container}>

      {loading && <p>로딩 중...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {characterData && (
        <div>
          <h3>{characterData.CharacterName}</h3>
          <p>클래스: {characterData.CharacterClassName}</p>
          <p>아이템 레벨: {characterData.ItemAvgLevel}</p>
          <div style={styles.imgWrap}>
          <img src={characterImgData?.CharacterImage} alt="캐릭터이미지" />
          </div>
        </div>
      )}
    </div>
  );
};
  // ← Results → CharacterResult




const styles = {
  container: {
    maxWidth: '100%',
    padding: '10px',
    textAlign: 'center',
  },


  img : {
    width : '100%',
    height : 'auto',

  }

  
};

export default CharacterResult;

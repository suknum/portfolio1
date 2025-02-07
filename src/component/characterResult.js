import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchCharacterInfo} from '../api/LostArkApi';
import { fetchImageInfo} from '../api/CharacterImgApi';

const Results = () => {
  const [searchParams] = useSearchParams();
  const characterName = searchParams.get('name'); // URL에서 검색어 가져오기

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
        const data = await fetchCharacterInfo(characterName);
        const imgData = await fetchImageInfo(characterName);

        if (Array.isArray(data) && data.length > 0) {
          setCharacterData(data[0]); // 첫 번째 캐릭터 정보 저장
          setCharacterImgData(imgData?.ArmoryProfile); // 이미지 데이터 저장
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
      <h2>🔍 검색 결과: {characterName}</h2>

      {loading && <p>로딩 중...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {characterData && (
        <div>
          <h3>{characterData.CharacterName}</h3>
          <p>클래스: {characterData.CharacterClass}</p>
          <p>아이템 레벨: {characterData.ItemLevel}</p>
          {characterImgData && <img src={characterImgData} alt="캐릭터 이미지" />}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '10px',
    textAlign: 'center',
  },

  img : {
    width : '100%',
    height : 'auto',
  }

  
};

export default Results;

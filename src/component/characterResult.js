import React from 'react';

const CharacterResult = ({ characterData }) => {
  if (!characterData) return <p>❌ 캐릭터 정보를 찾을 수 없습니다.</p>;

  return (
    <div style={styles.resultContainer}>
      <h2>{characterData.CharacterName}</h2>
      <p><strong>레벨:</strong> {characterData.ItemAvgLevel}</p>
      <p><strong>클래스:</strong> {characterData.CharacterClassName}</p>
    </div>
  );
};

const styles = {
  resultContainer: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '20px',
  }
};

export default CharacterResult;

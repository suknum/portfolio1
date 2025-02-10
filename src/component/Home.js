import React, { useState } from 'react';
import Nav from './Nav';
import CharacterSearch from './characterSearch';
import CharacterResult from './characterResult';
import Character from './character';
import EventBanner from './eventBanner';

const Home = () => {
  const [activeTab, setActiveTab] = useState(''); // 현재 선택된 Nav 탭
  const [searchQuery, setSearchQuery] = useState(''); // 검색어 저장
  const [showResult, setShowResult] = useState(false); // 검색 결과 표시 여부

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setShowResult(false); // 탭을 클릭하면 검색 결과는 사라짐
  };

  return (
    <div>
      {/* CharacterSearch는 최상단에 고정 */}
      <CharacterSearch setSearchQuery={setSearchQuery} setShowResult={setShowResult} />

      {/* Nav도 고정 */}
      <Nav handleTabClick={handleTabClick} />

      {/* 검색 결과가 있을 경우 CharacterResult 표시, 없으면 선택된 탭의 콘텐츠 표시 */}
      <div>
        {showResult ? (
          <CharacterResult characterName={searchQuery} />
        ) : (
          <>
            {activeTab === '내정보' && <Character />}
            {activeTab === '이벤트' && <EventBanner />}
            {activeTab === '업데이트' && <p>업데이트 내용 표시</p>}
          </>
        )}
      </div>
    </div>
  );
};








export default Home;
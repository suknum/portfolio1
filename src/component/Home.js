import React, { useState } from 'react';
import Nav from './Nav';
import CharacterSearch from './characterSearch';
import CharacterResult from './characterResult';
import Character from './character';
import EventBanner from './eventBanner';
import Main from './Main';
import CharacterRank from './CharacterRank';


const Home = () => {
  const [activeTab, setActiveTab] = useState(''); // 현재 선택된 Nav 탭
  const [searchQuery, setSearchQuery] = useState(''); // 검색어 저장
  const [showResult, setShowResult] = useState(false); // 검색 결과 표시 여부
  const [showUpdate, setShowUpdate] = useState(true); // 업데이트 표시 여부
  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setShowResult(false); // 탭을 클릭하면 검색 결과는 사라짐
    setShowUpdate(false); //  탭을 클릭하면 업데이트 숨김
  };

  return (
    <div>
      {/* CharacterSearch에서 검색 시 activeTab을 비움 */}
      <CharacterSearch 
        setSearchQuery={setSearchQuery} 
        setShowResult={setShowResult} 
        setActiveTab={setActiveTab} //  검색 시 탭 닫기
        setShowUpdate={setShowUpdate} //  검색 시 업데이트숨김
      />

      <Nav activeTab={activeTab} setActiveTab={setActiveTab} handleTabClick={handleTabClick} />

      {/* 검색 결과가 있을 경우 CharacterResult 표시, 없으면 선택된 탭의 콘텐츠 표시 */}

      {showUpdate && <Main />}
      <div>
        {showResult ? (
          <CharacterResult characterName={searchQuery}/>
        ) : (
          <>
            {activeTab === '내정보' && <Character />}
            {activeTab === '이벤트' && <EventBanner />}
            {activeTab === '순위' && <CharacterRank />}
          </>
        )}
      </div>
    </div>
  );
};










export default Home;
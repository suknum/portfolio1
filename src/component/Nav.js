import React, { useState } from 'react';

const Nav = ({ handleTabClick }) => {
  const [activeTab, setActiveTab] = useState(''); // 현재 선택된 탭

  const handleTabSelection = (tab) => {
    setActiveTab(tab);
    handleTabClick(tab);
  };

  return (
    <nav style={styles.navContainer}>
      <ul style={styles.nav}>
        {['내정보', '이벤트', '업데이트'].map((tab) => (
          <li
            key={tab}
            style={{
              ...styles.tab,
              ...(activeTab === tab ? styles.activeTab : {}),
            }}
            onClick={() => handleTabSelection(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>
    </nav>
  );
};


const styles = {
  navContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#161b22', // 다크한 느낌의 배경
    padding: '10px 0',
    borderBottom: '2px solid #30363d', // 하단 테두리 추가
  },
  nav: {
    display: 'flex',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    gap: '20px', // 탭 간격 조정
  },
  tab: {
    padding: '12px 24px',
    cursor: 'pointer',
    fontSize: '16px',
    color: '#c9d1d9',
    transition: 'all 0.3s ease',
    borderRadius: '8px',
  },
  activeTab: {
    fontWeight: 'bold', 
    backgroundColor: '#30363d',
    color: '#ffffff',
  },
};


export default Nav;




import React, { useState } from 'react';
import Character from './character';

const TabMenu = () => {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <div>
      <nav>
        <ul style={styles.nav}>
          {['내정보', '이벤트', '업데이트'].map((tab) => (
            <li
              key={tab}
              style={{
                ...styles.tab,
                ...(activeTab === tab ? styles.activeTab : {}),
              }}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>
      </nav>
      <div style={styles.content}>
        {activeTab === '내정보' && <Character />}
        {activeTab === '이벤트' && <p>About us section.</p>}
        {activeTab === '업데이트' && <p>Contact us here.</p>}
      </div>
    </div>
  );
};

const styles = {
  nav: {
    display: 'flex',
    listStyle: 'none',
    padding: 0,
  },
  tab: {
    padding: '10px 20px',
    cursor: 'pointer',
    borderBottom: '2px solid transparent',
  },
  activeTab: {
    borderBottom: '2px solid blue',
    fontWeight: 'bold',
  },
  content: {
    marginTop: '20px',
  },
};

export default TabMenu;




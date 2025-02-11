import React from 'react';

const Update = () => {
    return (
        <>
            <ul style={styles.update}>
                <li>25.2.11 모바일로 검색 시 화면 조정 및 키보드 제거</li>
                <li>25.2.10 검색 실행 시 탭 css 제거</li>
                <li>25.2.9 검색창 및 탭 메뉴 상단 고정</li>
                <li>25.2.6 이미지api 추가</li>
                <li>25.2.5 이벤트api 추가</li>
                <li>25.2.4 api연결, 검색기능 정상작동</li>
                <li>25.1.17 탭 메뉴 추가</li>
                <li>25.1.15 검색기능 구현</li>
                <li>25.1.14 스와이퍼 추가</li>
            </ul>
        
        </>
    );

};

const styles = {
    update: {
        display : 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign : 'center',
        listStyle: 'none',
        gap : '10px',
        padding: '0',
    },
};

export default Update;
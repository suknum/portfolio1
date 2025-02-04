import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from './character.module.css';

function Character() {
    const [characterData, setCharacterData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/character.json"); // json 데이터 경로
                const data = await response.json();
                console.log(data);
                setCharacterData(data);
            } catch (error) {
                console.error("데이터 못 불러옴", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className={styles.App}>
            <h1 className={styles.header}>나의 캐릭터들</h1>
            <Swiper
                spaceBetween={30}
                slidesPerView={1} // 슬라이드당 한 개씩 보여줌
                className={styles.swiperContainer}
            >
                {characterData.map((character, index) => (
                    <SwiperSlide key={index} className={styles.swiperSlide}>
                        <div className={styles.characterCard}>
                            <div className={styles.classinfo}>
                                <img 
                                    className={styles.characterImage}
                                    src={character.CharacterImage}
                                />
                                <p className={styles.characterName}>{character.CharacterName}</p>
                                <p>서버 : {character.ServerName}</p>
                                <p>클래스 : {character.CharacterClassName}</p>
                                <p>레벨 : {character.ItemAvgLevel}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Character;




import React , { useState, useEffect } from "react";

import styles from './character.module.css';
import Characer from './character.json';

function Character() {
    const [characterData, setCharacterData] = useState([]);

    useEffect(() =>  {
    
        const fetchData = async() => {
            try {
                const response = await fetch("json 데이터 경로");
                const data = await response.json();
                console.log(data);
                setCharacterData(data);
            } catch(error) {
                console.error("데이터 못 불러옴", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="App">
            <h1 className={styles.header}>나의캐릭터들</h1>
            <div className={styles.lost_wrap}>
                <div className={styles.lost_character}>
                    {characterData.map((character , index) => (
                        <div key={index} className={styles.characterCard}>
                            <div className={styles.classinfo}>
                                <p>서버 : {character.ServerName}</p>
                                <p>클래스 : {character.CharacterClassName}</p>
                                <p>아이템 : {character.ItemAvgLevel}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Character;


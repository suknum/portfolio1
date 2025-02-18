import React from 'react';
import CharacterMain from './characterMain';
import EventBannerMain from './eventBannerMain';
import styles from './Main.module.css';


const Main = () => {
    return (
        <>
            <div className={styles.contentWrap}>
                <div className={styles.con1}><CharacterMain /></div>

                <div className={styles.con2}>
                    <div className={styles.con2Con1}><EventBannerMain /></div>
                    <div className={styles.con2Con2}>내용 입력</div>
                </div>

            </div>
        
        </>
    );

};


export default Main;
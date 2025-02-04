import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from './eventBanner.module.css';

function EventBanner() {
    const [EventData, setEventData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/eventBanner.json"); // json 데이터 경로
                const data = await response.json();
                console.log(data);
                setEventData(data);
            } catch (error) {
                console.error("데이터 못 불러옴", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="App">
            <h1 className={styles.header}>진행중인 이벤트</h1>
            <Swiper
                spaceBetween={30}
                slidesPerView={1} // 슬라이드당 한 개씩 보여줌
                className={styles.swiperContainer}
            >
                {EventData.map((eventBanner, index) => (
                    <SwiperSlide key={index} className={styles.swiperSlide}>
                        <div className={styles.eventBannerCard}>
                            <div className={styles.classinfo}>
                                
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default EventBanner;

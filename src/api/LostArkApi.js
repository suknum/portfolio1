import axios from 'axios';
const api_key = import.meta.env.REACT_APP_API_KEY;
const API_BASE_URL = "https://developer-lostark.game.onstove.com"; // 로스트아크 API 기본 URL
const API_KEY = process.env.REACT_APP_API_KEY; // 여기에 발급받은 API 키를 입력하세요.


export const fetchCharacterInfo = async (characterName) => {
    try {
    const response = await axios.get(
      `${API_BASE_URL}/characters/${encodeURIComponent(characterName)}/siblings`, 
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          accept: "application/json"
        }
      }
    );

    console.log("API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch character data:", error);
    throw error;
  }
};

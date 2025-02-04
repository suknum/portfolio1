import axios from 'axios';

const API_BASE_URL = "https://developer-lostark.game.onstove.com";
const API_KEY = process.env.REACT_APP_API_KEY;

// ✅ 환경 변수가 정상적으로 불러와지는지 확인
console.log("✅ API_KEY:", API_KEY);

if (!API_KEY) {
  throw new Error("🚨 API 키가 설정되지 않았습니다! .env 파일을 확인하세요.");
}

export const fetchCharacterInfo = async (characterName) => {
  try {
    const encodedName = encodeURIComponent(characterName);
    const response = await axios.get(
      `${API_BASE_URL}/characters/${encodedName}/siblings`,
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
    console.error("API 요청 실패:", error.response ? error.response.data : error.message);
    throw error;
  }
};

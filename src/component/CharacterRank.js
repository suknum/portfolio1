import React, { useState, useEffect } from "react";
import { fetchCharacterInfo } from "../api/LostArkApi";

const ITEMS_PER_PAGE = 10; // 한 페이지당 표시할 캐릭터 수

const CharacterRank = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1); // 현재 페이지

  useEffect(() => {
    const fetchRanking = async () => {
      setLoading(true);
      setError("");

      try {
        // 여기에서 특정 상위 유저를 가져오는 API가 있다면 활용
        const data = await fetchCharacterInfo("필례"); // 예제: 임시 캐릭터명 사용
        const sortedCharacters = data.sort(
          (a, b) => parseFloat(b.AvgItemLevel) - parseFloat(a.AvgItemLevel)
        );

        setCharacters(sortedCharacters);
      } catch (err) {
        setError("순위 데이터를 불러올 수 없습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchRanking();
  }, []);

  // 현재 페이지 데이터만 가져오기
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const paginatedCharacters = characters.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">🏆 아이템 레벨 순위</h2>

      {loading && <p className="text-gray-600">로딩 중...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {paginatedCharacters.length > 0 && (
        <div>
          <ul className="divide-y">
            {paginatedCharacters.map((char, index) => (
              <li key={index} className="p-3 flex justify-between">
                <span className="font-medium">{char.CharacterName}</span>
                <span className="text-gray-600">Lv. {char.ItemAvgLevel}</span>
              </li>
            ))}
          </ul>

          {/* 페이지네이션 버튼 */}
          <div className="flex justify-between mt-4">
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              className={`px-4 py-2 rounded ${page === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"}`}
            >
              이전
            </button>
            <span className="text-gray-700">페이지 {page} / {Math.ceil(characters.length / ITEMS_PER_PAGE)}</span>
            <button
              onClick={() => setPage(page + 1)}
              disabled={startIndex + ITEMS_PER_PAGE >= characters.length}
              className={`px-4 py-2 rounded ${startIndex + ITEMS_PER_PAGE >= characters.length ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"}`}
            >
              다음
            </button>
          </div>
        </div>
      )}
    </div>
  );
};





export default CharacterRank;
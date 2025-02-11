import React , {useState , useEffect}from 'react';
import { fetchCharacterInfo } from '../api/LostArkApi';

const CharacterRank = () => {
    const [characterData, setCharacterData] = useState(null);
    const [error, setError] = useState(null);
    const [ loading, setLoading] = useState(false);

    useEffect(() => {
        if ('') return;
    
        const fetchData = async () => {
          setLoading(true);
          setError(null);
    
          try {
            
            const data = await fetchCharacterInfo();
                        
            if (Array.isArray(data) && data.length > 0) {
              setCharacterData();
            } else {
              setError('❌ 해당 캐릭터 정보를 찾을 수 없습니다.');
            }
          } catch (error) {
            setError('🚨 캐릭터 데이터를 불러오는 중 오류가 발생했습니다.');
            console.error(error);
          } finally {
            setLoading(false);
          }
        };
        fetchData();
    }, []);

    return (
        //모든 캐릭터의 랭킹을 보여주는 페이지
        <div>
            <h1>모든 캐릭터 랭킹</h1>
            <table>
                <thead>
                    <tr>
                        <th>순위</th>
                        <th>캐릭터 이름</th>
                        <th>클래스</th>
                        <th>아이템 레벨</th>
                    </tr>
                </thead>
                <tbody>
                    {characterData.map((character, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{character.CharacterName}</td>
                            <td>{character.CharacterClassName}</td>
                            <td>{character.ItemAvgLevel}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

}


export default CharacterRank;
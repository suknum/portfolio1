import React ,{useState, useEffect} from 'react';
import './search.css';


function Search() {

    const [searchTerm, setSearchTerm] = useState('');
    const [characters, setCharacters] = useState([
        { id : 1, name : '1'}
    ]);
    const filteredCharacters = characters.filter((character) =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return(
        <div className='input-box'>
            <input
                className='search'
                type="text"
                placeholder="검색할 캐릭터 명을 입력해주세요."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className='search-button'></button>
        </div>
    )
};

export default Search;
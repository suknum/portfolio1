import React ,{useState, useEffect} from 'react';


function Search() {

    const [searchTerm, setSearchTerm] = useState('');
    const [characters, setCharacters] = useState([
        { id : 1, name : '1'}
    ]);
    const filteredCharacters = characters.filter((character) =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return(
        <div>
            <h1>Character Search</h1>
            <input
                type="text"
                placeholder="Search for a character"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
                {filteredCharacters.map((character) => (
                    <li key={character.id}>
                        <h2>{character.name}</h2>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default Search;
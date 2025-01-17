import React, {useState} from "react";
import { useNavigate } from "react-router-dom";



function Search() {

    const [searchTerm, setSearchTerm] = useState('');
    const handleSearchTerm = (e) => {
        setSearchTerm(e.target.value);
    }

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${searchTerm}`, {});
    }

    return(
        <div className="search">
            <form>
                <label>
                    <span>
                        <input type="text" placeholder="영화, TV프로그램, 인물 검색..." value={searchTerm} onChange={handleSearchTerm}/>
                    </span>
                </label>
                <input type="submit" value='검색' onClick={handleSubmit}/>
            </form>
        </div>
    );
    
}

export default Search;
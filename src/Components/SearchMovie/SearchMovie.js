import React , {useState} from 'react';
import Rate from '../Rate';

import './SearchMovie.css';

const SearchMovie = ({search , setSearch}) => {
 
//ici a creation d'une search donc on traget selon la value 
console.log(search);
  const handelSearch =(e)=>{
    setSearch(e.target.value)
  }
  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Type movie name to search"
          value={search}
         onChange={handelSearch}
        />
        <div className="rating-search">
          <Rate  />
        </div>
      </div>
    </div>
  );
};

export default SearchMovie;

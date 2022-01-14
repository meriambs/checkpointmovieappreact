import React, { useState } from 'react';

import { moviesData } from './Components/MoviesData';
import SearchMovie from './Components/SearchMovie/SearchMovie';
import MoviesList from './Components/MoviesList';
import AddMovie from './Components/AddMovie/AddMovie';

import './App.css';

function App() {
 const [moviesList, setMoviesList] = useState(moviesData);
 //ici on a la state du name 
 const [search, setSearch] = useState('');
//  console.log(moviesList) afficher la liste de movie .
//creation d'une fonction const addmovie qui va modifer le props du addmodal.
const addMovie=(newMovie)=>{

setMoviesList([...moviesList,newMovie]);
console.log('test',moviesList)
}

  return (
    <div className="App">
      {/* //call it before the movie list becose it's position  */}
      <SearchMovie
       setSearch={setSearch}
       search={search}
      />
      <MoviesList
     movielist={moviesList}
     search={search}
      />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <AddMovie   addMovie={addMovie}/>
      </div>
    </div>
  );
}

export default App;

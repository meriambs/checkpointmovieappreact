import React from 'react';

import MovieCard from './MovieCard/MovieCard';

const MoviesList = ({movielist,search}) => {
  //on passe la movielist comme props
  //console.log("test",movielist);lina nla7dhou notre props t3det.

  return (
    <div
      className="movies-list"
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
      }}
    >
      {/* a méthode trim() permet de retirer les blancs en début et fin de chaîne. Les blancs considérés sont les caractères d'espacement (espace, tabulation, espace insécable, etc.) ainsi que les caractères de fin de ligne (LF, CR, etc.). */}
      {/* The includes() method is part of both the Array and String prototypes. This method accepts a search value as a parameter, and returns true if the value is either contained in the array on which it is called, or if it exists as a substring of the string object on which it is called. */}

      {movielist .filter(
          (el) =>
            el.name.toLowerCase().includes(search.toLowerCase()) 
        )
      .map(el=>
        <MovieCard movie={el} />
      )}
     {/* //b3ed le mapina n3diw el movie c3al card */}
    </div>
  );
};

export default MoviesList;

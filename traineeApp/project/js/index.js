'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const lastWatchedFilm = prompt('Один из последних просмотренных фильмов?', '');
const rangOfFilm = +prompt('На сколько вы его оцените?', '');
const lastWatchedFilmNext = prompt('Один из последних просмотренных фильмов?', '');
const rangOfFilmNext = +prompt('На сколько вы его оцениите?', '');


const personalMovieDB = {
   'count': numberOfFilms,
   'movies': {
      'firstFilm': lastWatchedFilm,
      'firstRang': rangOfFilm,
      'secondFilm': lastWatchedFilmNext ,
      'secondRang': rangOfFilmNext 
   },
   'actors': {},
   'genres': [],
   'privat': false
};

console.log(personalMovieDB);
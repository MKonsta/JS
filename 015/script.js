"use strict";


let filmsCount = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
   count: null,
   movies: {},
   actors: {},
   genres: [],
   private: false
}

personalMovieDB.count = filmsCount;

let a = prompt("Один из последних просмотренных фильмов?", "");
let b = prompt("На сколько оцените его?", "");
let c = prompt("Один из последних просмотренных фильмов?", "");
let d = prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
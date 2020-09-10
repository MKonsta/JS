/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания

"use strict";


let personalMovieDB = {
   count: null,
   movies: {},
   actors: {},
   genres: [],
   private: false
}

personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

for (let i = 0; i < 2; i++) {
   let a;
   let b;

   do {
      a = prompt("Один из последних просмотренных фильмов?", "");
      b = prompt("На сколько оцените его?", "");
   } while (a == '' || a == null || a.length > 50 || b == '' || b == null)

   personalMovieDB.movies[a] = b;
}

if (personalMovieDB.count < 10) {
   alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
   alert("Вы классический зритель");
} else {
   alert("Вы киноман");
}

writeYourGenres();

showMyDB();




function showMyDB () {
   if (!personalMovieDB.private) {
      console.log(personalMovieDB);
   }
}

function writeYourGenres() {
   for(let i = 0; i < 3; i++) {
      personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, "");
   }
}
//Создание списка фильмов
var films = [];
films.push("Titanic");
films.push("Interception");
films.push("Batman");

//Создание списка игр
var games = [];
games.push("Dota");
games.push("CS 1.6");
games.push("Portal");

//Создание общего списка
var collection = films.concat(games);

//Создание отзывов
var feedback = [true, true, false, false, false, true];

//Начало работы скрипта
alert("Фильмы: " + films.join() + "\n" + "Игры: " + games.join());
var answer = prompt("Какой фильм хочешь посмотреть или в какую игру хочешь поиграть?");

//Определение индекса введёного фильма или игры
var index = collection.indexOf(answer);

//Сверка с массивом отзывов и вывод финального сообщения
if (index == -1) {
  alert("Ты что-то ввёл неправильно");
}
else if (feedback[index]) {
  alert("Да, это годная штука");
}
else {
  alert("Нет, не советую");
}
alert("Введите 10 ориентиров от Дома до Coddy");

var path = ["Дом"];

for (var i = 1; i <= 10; i++) {           //i = 1, так как мы
  var orientir = prompt("Ориентир " + i); //начинаем считать
  path.push(orientir);                    //ориентиры с первого
}
path.push("Coddy");

var answer = prompt("Если хотите посмотреть путь от Дома" + 
                    " до Coddy – напишите Coddy. Если" + 
                    " хотите посмотреть путь Домой – напишите Дом");
if(answer === "Coddy") {
  alert("Путь от Дома до Coddy:\n" + path.join(" потом "));
}
else if(answer === "Дом") {
  var path2 = [];
  for (var i = 0; i < path.length; i--) {
    var lastElement = path.pop();
    path2.push(lastElement);
  }
  alert("Путь от Coddy до Дома:\n" + path2.join(" потом "));
}
else {
  alert("Такого варианта не было");
}
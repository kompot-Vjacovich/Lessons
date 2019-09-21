var name = prompt("Как тебя зовут?");
var answer = confirm(name + ", ты хочешь выучить таблицу умножения?");

if (answer) {
  alert("Молодец! Приступим!");
}
else {
  alert("А всё равно придётся учить!");
}

for (var j = 2; j <= 9; j++) {
  var tablitsa = "Таблица умножениия на " + j;

  for (var i = 1; i <= 10; i++) {
    tablitsa += "\n" + j + " х " + i + " = " + j*i;
  }
  alert(tablitsa);
}
var phrases = [
  "Скорее да, чем нет",
  "Да, абсолютно точно",
  "Скорее нет, чем да",
  "Оххх, а это сложный вопрос",
  "НЕТ"
];
//Первое подтверждение
var otvet = confirm("Хотите задать вопрос Шару судьбы?");

while(otvet) {
    var question = prompt("Спросите у шара судьбы, что пожелаете");

    if(question[question.length-1] === "?") {
    var randomIndex = Math.floor(Math.random() * phrases.length);
    alert(phrases[randomIndex]);
    }
    else {
    alert("Это не похоже на вопрос!");
    }
    //Ещё одно подтверждение после каждого ответа
    otvet = confirm("Ещё вопрос?");
}

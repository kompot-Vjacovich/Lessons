var animals = ["муха", "крыса", "свинья", "выдра", "мартышка"];
var pril = ["тупая", "вонючая", "унылая"];
var parts = ["рот", "глаз", "нос", "лоб", "локоть"];

var randomAnimal = animals[Math.floor(Math.random()*animals.length)];
var randomPril = pril[Math.floor(Math.random()*pril.length)];
var randomPart = parts[Math.floor(Math.random()*parts.length)];

var name = prompt("Как тебя зовут?");

var str = name + ", твой " + randomPart + "выглядит, как " + randomPril + randomAnimal;
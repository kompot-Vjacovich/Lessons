function setName(name) {
    if(name == null || name == "") {
        const random_Names = ["Бальтозар", "Афанасий", "Птолемей", "Серафим", "Акакий", "Герадот", "Родомир"];
        name = randWord(random_Names);
        alert("Тебя будут звать " + name);
    }
    return name;
}

function randWord(words) {
    return words[Math.floor(Math.random()*words.length)];
}

function chooseSlovo(answer) {
    const slovar = [
        "макака", "компьютер", "глобус", 
        "телефон", "пожарник", "школа", 
        "поступок", "мишень", "параллелепипед"
    ];

    if (answer) {
        let slovo = prompt("Введите слово на русском языке...");
        return slovo.toLowerCase();
    } 
    return randWord(slovar);
}

function printScore(otvetMassiv, ostalosBukv, popytki) {
    alert(otvetMassiv.join(" ") + "   Осталось " + ostalosBukv + " букв(ы). И " + popytki + " попыток.");
}

function printFinal(popytki, slovo, name) {
    if (popytki == 0) {
        alert("Не повезло тебе, " + name +"... А слово было простое: " + slovo);
        return;
    } 

    alert("Поздравляю тебя, " + name + ", ты угадал слово: " + slovo);
    return;
}

function Viselitsa() {
    let tmpname = prompt("Введите своё имя...");

    const name = setName(tmpname);

    const answer = confirm("Хотите ввести слово самостоятельно?");

    const slovo = chooseSlovo(answer);

    let otvetMassiv = [];
    for (let i = 0; i < slovo.length; i++) {
        otvetMassiv[i] = "_";    
    }

    let ostalosBukv = slovo.length;
    let popytki = slovo.length - 1;
    let ugadal = false;

    while (ostalosBukv > 0 && popytki > 0) {
        printScore(otvetMassiv, ostalosBukv, popytki);

        let bukva = prompt("Введи букву или нажми Отмена для выхода");
        bukva = bukva.toLowerCase();

        if(bukva == null) {
            alert("Гудбай");
            break;
        }
        else if(bukva.length != 1) {
            alert("Нужно ввести одну букву");				
        }
        else {
            for(var j = 0; j < slovo.length ; j++) {
                if(bukva === slovo[j]) {
                    if(otvetMassiv[j] == "_") {
                        otvetMassiv[j] = bukva;
                        ostalosBukv--;
                        ugadal = true;
                    }
                }
            }
        }
        if (ugadal == false) popytki--;
    }

    printFinal(popytki, slovo, name);
    
}

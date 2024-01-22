var victories = 250;
var fails = 100;
calculator();

function calculator() {
    var result = victories - fails;
    switch (true) {
        case (victories <= 10):
            console.log("O Herói tem saldo de " + result + " vitórias e está no nível de Ferro.");
            break;
        case (victories === 11 || victories < 20):
            console.log("O Herói tem saldo de " + result + " vitórias e está no nível de Bronze.");
            break;
        case (victories >= 21 && victories <= 50):
            console.log("O Herói tem saldo de " + result + " vitórias e está no nível de Prata.");
            break;
        case (victories >= 51 && victories <= 80):
            console.log("O Herói tem saldo de " + result + " vitórias e está no nível de Ouro.");
            break;
        case (victories >= 81 && victories <= 90):
            console.log("O Herói tem saldo de " + result + " vitórias e está no nível de Diamante.");
            break;
        case (victories >= 91 && victories <= 100):
            console.log("O Herói tem saldo de " + result + " vitórias e está no nível de Lendário.");
            break;
        case (victories >= 101):
            console.log("O Herói tem saldo de " + result + " vitórias e está no nível de Imortal.");
            break;
    }
}


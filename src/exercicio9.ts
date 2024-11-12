var readline = require('readline');

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ehPrimo(num: number): boolean {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function obterFatoresPrimos(num: number): number[] {
    let fatores: number[] = [];
    for (let i = 2; i <= num; i++) {
        while (num % i === 0) {
            if (!fatores.includes(i)) fatores.push(i);
            num /= i;
        }
    }
    return fatores;
}

function questionar() {
    leitor.question("Digite um número inteiro (ou 'sair' para terminar): ", function(answer: string) {
        if (answer.toLowerCase() === 'sair') {
            leitor.close();
            console.log("Encerrando o programa...");
        } else {
            let numero: number = parseInt(answer, 10);

            if (isNaN(numero)) {
                console.log("Por favor, insira um número válido.");
            } else if (ehPrimo(numero)) {
                console.log(`O número ${numero} é primo.`);
            } else {
                let fatoresPrimos = obterFatoresPrimos(numero);
                console.log(`O número ${numero} não é primo. Fatores primos: ${fatoresPrimos.join(', ')}`);
            }

            questionar();
        }
    });
}

questionar();
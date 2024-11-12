var readline = require('readline');

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numeros: number[] = [];

function pedirNumero() {
    if (numeros.length < 10) {
        leitor.question(`Digite 10 números inteiros entre 1 e 100 (${numeros.length + 1}/10): `, function(answer: string) {
            let numero = parseInt(answer, 10);

            if (isNaN(numero) || numero < 1 || numero > 100) {
                console.log("Por favor, insira um número válido entre 1 e 100.");
            } else if (numeros.includes(numero)) {
                console.log("Este número já foi inserido. Digite um número diferente.");
            } else {
                numeros.push(numero);
            }

            pedirNumero();
        });
    } else {
        processarNumeros();
    }
}

function processarNumeros() {
    const menor = Math.min(...numeros);
    const maior = Math.max(...numeros);
    const soma = numeros.reduce((acc, num) => acc + num, 0);
    const ordenados = [...numeros].sort((a, b) => a - b);

    console.log("\nResultados:");
    console.log("Números informados (ordem crescente):", ordenados.join(", "));
    console.log("Menor número:", menor);
    console.log("Maior número:", maior);
    console.log("Soma dos números:", soma);

    leitor.close();
}

pedirNumero();
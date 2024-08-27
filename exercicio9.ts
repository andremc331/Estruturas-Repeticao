var readline = require('readline');
var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let avancar:boolean = true;
function questionar() {
    if (avancar) {
        leitor.question("Digite um número (ou 'sair' para terminar): ", function(answer: string) {
            if (answer.toLowerCase() === 'sair') {
                avancar = false;
                leitor.close();
            } else {
                var valor: number = parseInt(answer, 10);
                var multi: number[] = [];

                if (isNaN(valor) || valor <= 1) {
                    console.log("Por favor, digite um número maior que 1.");
                } else {
                    let num = valor;
                    for (let i: number = 2; i <= num; i++) {
                        while (num % i === 0) {
                            multi.push(i);
                            num /= i;
                        }
                    }
                    console.log("Fatores:", multi.join(', '));
                }
            }

            questionar(); 
        });
    }
}

questionar();
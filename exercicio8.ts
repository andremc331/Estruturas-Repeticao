var readline = require('readline');

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let continuar: boolean = true;

function perguntar() {
    if (continuar) {
        leitor.question("Digite uma palavra (ou 'sair' para terminar): ", function(answer: string) {
            if (answer.toLowerCase() === 'sair') {
                continuar = false;
                leitor.close();
            } else {
                let vogais: number = 0;
                let consoantes: number = 0;
                const vogaisSet = new Set(['a', 'e', 'i', 'o', 'u']);

                for (let char of answer.toLowerCase()) {
                    if (vogaisSet.has(char)) {
                        vogais++;
                    } else if (char >= 'a' && char <= 'z') {
                        consoantes++;
                    }
                }

                console.log("Vogais:", vogais, "Consoantes:", consoantes);
                perguntar();
            }
        });
    }
}

perguntar();
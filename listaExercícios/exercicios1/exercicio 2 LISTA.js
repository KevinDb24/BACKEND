
let prompt = require('prompt-sync')();

function calcularPercentual(valor, total) {
    return (valor / total) * 100;
}

function calcularPercentualVotos() {
    
    let totalEleitores = parseInt(prompt("Informe o número total de eleitores: "));
    let votosBrancos = parseInt(prompt("Informe o número de votos em branco: "));
    let votosNulos = parseInt(prompt("Informe o número de votos nulos: "));
    let votosValidos = parseInt(prompt("Informe o número de votos válidos: "));

   
    let percentualBrancos = calcularPercentual(votosBrancos, totalEleitores);
    let percentualNulos = calcularPercentual(votosNulos, totalEleitores);
    let percentualValidos = calcularPercentual(votosValidos, totalEleitores);

    
    console.log("Percentual de votos em branco: " + percentualBrancos.toFixed(2) + "%");
    console.log("Percentual de votos nulos: " + percentualNulos.toFixed(2) + "%");
    console.log("Percentual de votos válidos: " + percentualValidos.toFixed(2) + "%");
}


calcularPercentualVotos();

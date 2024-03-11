let prompt = require('prompt-sync')();

let nome = prompt("Qual teu nome ? ")

console.log("Salve " + nome + ", ta suave ?")

let resposta = prompt("")

console.log( resposta + " ? Pode crêr")

let idade = prompt("Qual tua idade ? ")

//console.log(typeof idade)

if(idade >= 18){
    console.log("Tu é de maior")
} else {
    console.log("Tu é de menor")
}

let notaProva1 = prompt("Nota prova A1 ")
let notaProva2 = prompt("Nota prova A2 ")
let notaProva3 = prompt("Nota prova A3 ")
let notaProva4 = prompt("Nota prova A4 ")

let nota1 = Number(notaProva1)
let nota2 = Number(notaProva2)
let nota3 = Number(notaProva3)
let nota4 = Number(notaProva4)

let media = (nota1 + nota2 + nota3 + nota4) / 4

console.log("Sua média é: " + media)

if(media >= 7){
    console.log("Aprovado parceiro")
} else{
    console.log("Reprovado menor")
}
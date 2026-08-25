// EXERCÍCIO 21 - DESESTRUTURAÇÃO DE OBJETO
// Crie um objeto viagem com destino, dias e valor.
// Utilize desestruturação para criar variáveis com essas propriedades.
// Mostre as variáveis no console.
//
// Escreva sua solução abaixo:

const viagem = {
    destino: "Rio de Janeiro",
    dias: 5,
    valor: 1500
};

const { destino, dias, valor } = viagem;

console.log("Destino:", destino);
console.log("Dias:", dias);
console.log("Valor:", valor);
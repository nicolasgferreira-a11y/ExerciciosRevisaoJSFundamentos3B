// EXERCÍCIO 10 - FINDINDEX - SETOR
// Crie um array com os setores: Vendas, Financeiro, TI e RH.
// Utilize findIndex() para descobrir a posição de "TI".
// Mostre o índice encontrado.
//
// Escreva sua solução abaixo:

const setores = ["Vendas", "Financeiro", "TI", "RH"];

const indice = setores.findIndex(setor => setor === "TI");

console.log("Índice encontrado:", indice);
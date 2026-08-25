// EXERCÍCIO 20 - FILTRANDO OBJETOS
// Crie um array com cinco funcionários contendo nome e salario.
// Utilize filter() para selecionar funcionários com salário acima de R$ 3.000.
// Mostre o novo array.
//
// Escreva sua solução abaixo:

const funcionarios = [
    { nome: "Ana", salario: 2500 },
    { nome: "Carlos", salario: 3500 },
    { nome: "Julia", salario: 4200 },
    { nome: "Pedro", salario: 2800 },
    { nome: "Marcos", salario: 5000 }
];

const salariosAltos = funcionarios.filter(funcionario => funcionario.salario > 3000);

console.log(salariosAltos);
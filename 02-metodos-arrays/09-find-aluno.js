// EXERCÍCIO 09 - FIND - ALUNO
// Crie um array de objetos com nome e matrícula de quatro alunos.
// Utilize find() para localizar o aluno com a matrícula 103.
// Mostre o aluno encontrado.
//
// Escreva sua solução abaixo:

const alunos = [
    { nome: "Ana", matricula: 101 },
    { nome: "Pedro", matricula: 102 },
    { nome: "Carlos", matricula: 103 },
    { nome: "Julia", matricula: 104 }
];

const alunoEncontrado = alunos.find(aluno => aluno.matricula === 103);

console.log(alunoEncontrado);
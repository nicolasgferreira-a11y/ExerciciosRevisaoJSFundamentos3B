// EXERCÍCIO 29 - ARRAY EM JSON
// Crie um array com três objetos de tarefas contendo id, descricao e concluida.
// Converta o array para JSON e mostre o resultado.
//
// Escreva sua solução abaixo:

const tarefas = [
    { id: 1, descricao: "Fazer o trabalho", concluida: true },
    { id: 2, descricao: "Estudar JavaScript", concluida: false },
    { id: 3, descricao: "Fazer os exercícios", concluida: true }
];

const tarefasJSON = JSON.stringify(tarefas);

console.log(tarefasJSON);
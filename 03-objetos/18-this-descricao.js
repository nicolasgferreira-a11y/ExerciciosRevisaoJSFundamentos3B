// EXERCÍCIO 18 - UTILIZANDO THIS
// Crie um objeto curso com nome, modalidade e um método descrever().
// O método deve utilizar this e retornar uma frase com os dados do curso.
//
// Escreva sua solução abaixo:

const curso = {
    nome: "Programação",
    modalidade: "Presencial",

    descrever() {
        return `Curso: ${this.nome} | Modalidade: ${this.modalidade}`;
    }
};

console.log(curso.descrever());
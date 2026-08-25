// EXERCÍCIO 31 - CLASSE E INSTÂNCIAS
// Crie uma classe Curso com constructor para nome, duracao e modalidade.
// Crie um método exibirInformacoes() e duas instâncias da classe.
// Mostre os dados dos dois cursos.
//
// Escreva sua solução abaixo:

class Curso {
    constructor(nome, duracao, modalidade) {
        this.nome = nome;
        this.duracao = duracao;
        this.modalidade = modalidade;
    }

    exibirInformacoes() {
        console.log(`Curso: ${this.nome}`);
        console.log(`Duração: ${this.duracao} horas`);
        console.log(`Modalidade: ${this.modalidade}`);
        console.log("--------------------");
    }
}

const curso1 = new Curso("JavaScript", 40, "Presencial");
const curso2 = new Curso("Python", 60, "Online");

curso1.exibirInformacoes();
curso2.exibirInformacoes();
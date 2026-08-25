// EXERCÍCIO 19 - ARRAY DE OBJETOS
// Crie um array com três objetos de jogos.
// Cada jogo deve possuir titulo, plataforma e classificacao.
// Percorra o array e mostre o título e a plataforma de cada jogo.
//
// Escreva sua solução abaixo:

const jogos = [
    {
        titulo: "Minecraft",
        plataforma: "PC",
        classificacao: "Livre"
    },
    {
        titulo: "Fortnite",
        plataforma: "PC",
        classificacao: "12 anos"
    },
    {
        titulo: "FIFA",
        plataforma: "PlayStation",
        classificacao: "Livre"
    }
];

jogos.forEach(jogo => {
    console.log("Título:", jogo.titulo);
    console.log("Plataforma:", jogo.plataforma);
});
// EXERCÍCIO 30 - SIMULANDO RESPOSTA DE API
// Crie um objeto resposta com as propriedades status, quantidade e clientes.
// A propriedade clientes deve conter um array com dois objetos.
// Converta a resposta para JSON e depois novamente para objeto.
// Mostre o status e os clientes recebidos.
//
// Escreva sua solução abaixo:

const resposta = {
    status: "Sucesso",
    quantidade: 2,
    clientes: [
        {
            nome: "Ana",
            idade: 16
        },
        {
            nome: "Carlos",
            idade: 17
        }
    ]
};

// Converte o objeto para JSON
const respostaJSON = JSON.stringify(resposta);

// Converte o JSON novamente para objeto
const respostaObjeto = JSON.parse(respostaJSON);

// Mostra o status e os clientes recebidos
console.log("Status:", respostaObjeto.status);
console.log("Clientes:", respostaObjeto.clientes);
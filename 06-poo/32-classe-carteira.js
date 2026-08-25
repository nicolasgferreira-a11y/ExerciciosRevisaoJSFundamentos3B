// EXERCÍCIO 32 - ENCAPSULAMENTO
// Crie uma classe CarteiraDigital com o campo privado #saldo.
// Crie os métodos adicionarCredito(valor), realizarPagamento(valor) e consultarSaldo().
// Não permita pagamentos maiores que o saldo disponível.
//
// Escreva sua solução abaixo:

class CarteiraDigital {
    #saldo = 0;

    adicionarCredito(valor) {
        this.#saldo += valor;
    }

    realizarPagamento(valor) {
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
            console.log("Pagamento realizado!");
        } else {
            console.log("Saldo insuficiente!");
        }
    }

    consultarSaldo() {
        return this.#saldo;
    }
}

const carteira = new CarteiraDigital();

carteira.adicionarCredito(100);
carteira.realizarPagamento(30);

console.log("Saldo:", carteira.consultarSaldo());
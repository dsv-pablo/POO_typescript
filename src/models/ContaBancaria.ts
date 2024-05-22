/*
    -  O constructor é uma função que define os atributos basicos que
        cada instância da classe (objeto) deve possuir
    
    - Se o saldo pudesse ser iniciado com algum valor, por exemplo,
        ele seria recebido como parâmetro do constructor
    
    - Quando não indicamos diretamente o tipo de dado do retorno
        de uma função, o TS infere automaticamente

*/

export class ContaBancaria {
  saldo: number;

  constructor() {
    this.saldo = 0;
  }

  consultarSaldo() {
    return this.saldo;
  }

  sacar(valor: number): boolean {
    if (valor > 0 && this.saldo >= valor) {
      this.saldo -= valor;
      return true;
    }
    return false;
  }

  depositar(valor: number): boolean {
    if (valor > 0) {
      this.saldo += valor;
      return true;
    }
    return false;
  }
}

/*
    -  O constructor é uma função que define os atributos basicos que
        cada instância da classe (objeto) deve possuir
    
    - Se o saldo pudesse ser iniciado com algum valor, por exemplo,
        ele seria recebido como parâmetro do constructor

*/

class ContaBancaria {
  saldo: number;

  constructor() {
    this.saldo = 0;
  }
}

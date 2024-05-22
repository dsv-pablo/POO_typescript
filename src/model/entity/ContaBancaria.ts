/*
    -   O constructor é uma função que define os atributos basicos que
        cada instância da classe (objeto) deve possuir
    
    -   Se o _saldo pudesse ser iniciado com algum valor, por exemplo,
        ele seria recebido como parâmetro do constructor
    
    -   Quando não indicamos diretamente o tipo de dado do retorno
        de uma função, o TS infere automaticamente
    
    -   Por default todo atributo do constructor é publico, ou seja,
        pode ser acessado fora da classe. Para lidar com este comportamento,
        utilizamos o comando private. Uma boa prática de atribuição é utilizar
        um _ antes do nome de um atributo privado, assim como em "_saldo" !
        O ato de privatizar um atributo é chamado encapsulamento!

    -   Getter & Setters: Sao funcoes utilizadas para acessar e alterar
        o valor de um atributo privado, por meio deles podemos setar restrições
        antes de alterar/conferir o valor do atributo, tornando uma operação
        mais segura. Além disso, o acesso a eles é feito diretamente tal como
        um atributo comum.

*/

export class ContaBancaria {
  private _saldo: number;
  private _conta: string;
  private _agencia: string;

  constructor(conta: string, agencia: string) {
    this._saldo = 0;
    this._agencia = this._validarAgencia(agencia) ? agencia : "0000-0";
    this._conta = this._validarConta(conta) ? conta : "00000-0";
  }

  get agencia(): string {
    return this._agencia;
  }

  set agencia(valor: string) {
    if (this._validarAgencia(valor)) {
      this._agencia = valor;
    } else {
      console.log("[ERRO] Tentaiva de cadastro de agência invalida!");
    }
  }

  get conta(): string {
    return this._conta;
  }

  set conta(valor: string) {
    if (this._validarConta(valor)) {
      this._conta = valor;
    } else {
      console.log("[ERRO] Tentaiva de cadastro de conta invalida!");
    }
  }

  consultarSaldo() {
    return this._saldo;
  }

  sacar(valor: number): boolean {
    if (valor > 0 && this._saldo >= valor) {
      this._saldo -= valor;
      return true;
    }
    return false;
  }

  depositar(valor: number): boolean {
    if (valor > 0) {
      this._saldo += valor;
      return true;
    }
    return false;
  }

  private _validarConta(conta: string): boolean {
    const regex = /^\d{5}-\d{1}$/;
    if (regex.test(conta)) {
      return true;
    }
    return false;
  }

  private _validarAgencia(agencia: string): boolean {
    const regex = /^\d{4}-\d{1}$/;
    if (regex.test(agencia)) {
      return true;
    }
    return false;
  }
}

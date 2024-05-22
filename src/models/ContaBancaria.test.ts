import { ContaBancaria } from "./ContaBancaria";

describe("Testa as funcionalidades de uma Conta Bancária", () => {
  test("Deve criar uma conta com agência e conta corretamente passados como parâmetros", () => {
    const conta = new ContaBancaria("01234-1", "0123-1");
    expect(conta.conta).toBe("01234-1");
    expect(conta.agencia).toBe("0123-1");
  });

  test("O saldo de uma conta recém criada deve ser nulo", () => {
    const conta = new ContaBancaria("01234-1", "0123-1");
    expect(conta.consultarSaldo()).toBe(0);
  });

  test("O saldo deve ser alterado corretamente após realizar depósitos", () => {
    const conta = new ContaBancaria("01234-1", "0123-1");
    conta.depositar(23.75);
    conta.depositar(38);
    expect(conta.consultarSaldo()).toBe(61.75);
  });

  test("O saldo deve ser alterado corretamente após realizar saques", () => {
    const conta = new ContaBancaria("01234-1", "0123-1");
    conta.depositar(10350.32);
    conta.sacar(350);
    conta.sacar(100.27);
    expect(conta.consultarSaldo()).toBe(9900.05);
  });
});

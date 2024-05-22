import { ContaBancaria } from "./models/ContaBancaria";

const conta1 = new ContaBancaria();

const saldo1 = conta1.consultarSaldo();

console.log(`Saldo inicial : ${saldo1}`);

const deposito1 = conta1.depositar(10000);

if (deposito1) {
  const saldo2 = conta1.consultarSaldo();
  console.log(`Saldo atual: ${saldo2}`);
} else {
  console.log("[ERRO] Tentativa de deposito de valor invalido!");
}

const saque1 = conta1.sacar(7300);

if (saque1) {
  const saldo3 = conta1.consultarSaldo();
  console.log(`Saldo atual: ${saldo3}`);
} else {
  console.log("[ERRO] Tentativa de saque de valor invalido!");
}

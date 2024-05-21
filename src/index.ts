import { ContaBancaria } from "./models/ContaBancaria";

const conta1 = new ContaBancaria();

const saldo1 = conta1.consultarSaldo();

console.log(`O saldo da conta é: ${saldo1}`);

import { validate } from "email-validator";

export class Contato {
  private _nome: string;
  private _email: string;
  private _telefone: string;
  private _dataNascimento: Date;

  constructor(
    nome: string,
    email: string,
    telefone: string,
    dataNascimento: Date
  ) {
    this._nome = nome;
    this._email = email;
    this._telefone = telefone;
    this._dataNascimento = dataNascimento;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(nome: string) {
    if (nome && nome.length > 0) {
      this._nome = nome;
    } else {
      console.log("Nome invalido!");
    }
  }

  get email(): string {
    return this._email;
  }

  set email(email: string) {
    if (email && validate(email)) {
      this._email = email;
    } else {
      console.log("Email invalido!");
    }
  }

  get telefone(): string {
    return this._telefone;
  }

  set telefone(numero: string) {
    const regex = /^(\+\d{2}.)?\(\d{2}\).(\d{5}|\d{4})-\d{4}$/;
    const validador = new RegExp(regex);
    if (numero && validador.test(numero)) {
      this._telefone = numero;
    } else {
      console.log("Numero Invalido!");
    }
  }

  get dataNascimento(): Date {
    return this._dataNascimento;
  }

  set dataNascimento(data: Date) {
    if (data && data < new Date()) {
      this._dataNascimento = data;
    } else {
      console.log("Data de nascimento invalida!");
    }
  }
}

import { fakerPT_BR as faker } from "@faker-js/faker";
import { writeFileSync } from "fs";
import { join } from "path";

interface IUser {
  nome: string;
  telefone: string;
  email: string;
  dataNascimento: Date;
  sexo: string;
}

const contatos: IUser[] = [];
let linhaCSV = "";
const numeroContatos = 100;

for (let i = 0; i < numeroContatos; i++) {
  const sexo = faker.person.sexType();
  const obj = {
    sexo: sexo,
    nome: faker.person.firstName(sexo),
    telefone: faker.phone.number(),
    email: faker.internet.email(),
    dataNascimento: faker.date.birthdate(),
  };
  contatos.push(obj);
  const linha = `${obj.sexo},${obj.nome}, ${obj.telefone}, ${obj.email}, ${obj.dataNascimento}`;
  linhaCSV += linha + `\n`;
}

// Gravando arquivo JSON
const caminhoDiretorioArquivos = join(__dirname, "data"); // __driname é uma variável global que retorna o caminho atual
const strJSON = JSON.stringify(contatos); // Converte o array contatos em uma string JSON
const caminhoArquivoJSON = join(caminhoDiretorioArquivos, "contatos.json");
writeFileSync(caminhoArquivoJSON, strJSON);

// Gravando arquivo CSV
const caminhoArquivoCSV = join(caminhoDiretorioArquivos, "contatos.csv");
writeFileSync(caminhoArquivoCSV, linhaCSV);

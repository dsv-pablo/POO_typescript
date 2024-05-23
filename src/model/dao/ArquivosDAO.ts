import { readFileSync } from "fs";
import { Contato } from "../entity/Contato";
import { join } from "path";

export abstract class ArquivosDAO {
  protected conteudoStr: string;

  constructor(nomeArquivo: string) {
    const caminhoArquivo = join(__dirname, "../..", "data", nomeArquivo);

    // Le o arquivo contatos.json como uma string
    this.conteudoStr = readFileSync(caminhoArquivo, "utf-8");
  }

  abstract recuperarContatos(): Contato[];
}

import { Contato } from "../entity/Contato";
import { IcontatoDAO } from "./IContatoDAO";
import { join } from "path";
import { readFileSync } from "fs";

export class ArquivosJsonDAO implements IcontatoDAO {
  private _caminhoArquivo: string;

  constructor() {
    this._caminhoArquivo = join(__dirname, "../..", "data", "contatos.json");
  }

  recuperarContatos(): Contato[] {
    // Instancia caminho do arquivo contatos.json
    const caminhoArquivosJSON = this._caminhoArquivo;

    // Le o arquivo contatos.json como uma string
    const stringContatosJSON = readFileSync(caminhoArquivosJSON, "utf-8");

    // Transforma a string em um array de objetos
    const listaContatos: any[] = JSON.parse(stringContatosJSON);

    // Mapeia cada objeto do array e para cada um deles cria um objeto Contato
    const contatos = listaContatos.map(
      (obj) =>
        new Contato(
          obj.nome,
          obj.email,
          obj.telefone,
          new Date(obj.dataNascimento)
        )
    );

    // Retorna a lista de contatos criada
    return contatos;
  }
}

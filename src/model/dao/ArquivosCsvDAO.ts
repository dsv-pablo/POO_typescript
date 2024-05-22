import { Contato } from "../entity/Contato";
import { IcontatoDAO } from "./IContatoDAO";
import { join } from "path";
import { readFileSync } from "fs";
import * as parseCSV from "csv-parse/sync";

export class ArquivosCsvDAO implements IcontatoDAO {
  private _caminhoArquivo;

  constructor() {
    this._caminhoArquivo = join(__dirname, "../..", "data", "contatos.csv");
  }

  recuperarContatos(): Contato[] {
    const contatosStr = readFileSync(this._caminhoArquivo, "utf-8");
    const listaContatos: any[] = parseCSV.parse(contatosStr);

    const contatos = listaContatos.map(
      (obj) => new Contato(obj[1], obj[3], obj[2], new Date(obj[4]))
    );

    return contatos;
  }
}

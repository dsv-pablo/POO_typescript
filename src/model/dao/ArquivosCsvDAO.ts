import { Contato } from "../entity/Contato";
import * as parseCSV from "csv-parse/sync";
import { ArquivosDAO } from "./ArquivosDAO";

export class ArquivosCsvDAO extends ArquivosDAO {
  constructor() {
    super("contatos.csv");
  }

  recuperarContatos(): Contato[] {
    const listaContatos: any[] = parseCSV.parse(this.conteudoStr);

    const contatos = listaContatos.map(
      (obj) => new Contato(obj[1], obj[3], obj[2], new Date(obj[4]))
    );

    return contatos;
  }
}

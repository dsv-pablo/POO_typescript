import { Contato } from "../entity/Contato";
import { ArquivosDAO } from "./ArquivosDAO";

export class ArquivosJsonDAO extends ArquivosDAO {
  constructor() {
    super("contatos.json");
  }

  recuperarContatos(): Contato[] {
    // Transforma a string em um array de objetos
    const listaContatos: any[] = JSON.parse(this.conteudoStr);

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

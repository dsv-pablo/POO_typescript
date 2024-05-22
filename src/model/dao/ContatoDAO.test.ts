import { ArquivosCsvDAO } from "./ArquivosCsvDAO";
import { ArquivosJsonDAO } from "./ArquivosJsonDAO";
import { IcontatoDAO } from "./IContatoDAO";

describe("Testa os DAOs de Contato", () => {
  test("Deve recuperar a contagem total de contatos de cada repositório", () => {
    let contatoDAO: IcontatoDAO = new ArquivosJsonDAO();
    expect(contatoDAO.recuperarContatos().length).toBe(100);

    contatoDAO = new ArquivosCsvDAO();
    expect(contatoDAO.recuperarContatos().length).toBe(100);
  });
});

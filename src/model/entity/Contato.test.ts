import { Contato } from "./Contato";

describe("Testa o modelo de contato", () => {
  test("Deve criar corretamente uma instancia de Contato com os atributos validos", () => {
    const contato = new Contato(
      "Pablo Vieira",
      "pablo.santana@ufv.br",
      "+55 (65) 7632-1561",
      new Date("1998-05-15")
    );

    expect(contato.nome).toBe("Pablo Vieira");
    expect(contato.email).toBe("pablo.santana@ufv.br");
    expect(contato.telefone).toBe("+55 (65) 7632-1561");
    expect(contato.dataNascimento).toStrictEqual(new Date("1998-05-15"));
  });
});

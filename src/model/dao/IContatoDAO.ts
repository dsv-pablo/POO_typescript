/*
    Toda classe que "assinar este contrato de polimorfismo" deverá possuir um metodo chamado
    recuperarContatos() que retorna um Array de objetos Contato
*/

import { Contato } from "../entity/Contato";

export interface IcontatoDAO {
  recuperarContatos(): Contato[];
}

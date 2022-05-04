import { ValidacoesFornecedores } from "../services/validacoesFornecedores.js";

test("Verifica se o nome tem 3 ou mais caracteres", () => {
    expect(ValidacoesFornecedores.validaNomeFornecedor("Papizzo")).toBe(true)
});

test("Verifica se o nome tem 3 ou mais caracteres", () => {
    expect(ValidacoesFornecedores.validaNomeFornecedor("Pa")).toBe(false)
});

test("Verifica se o ramo tem 3 ou mais caracteres", () => {
    expect(ValidacoesFornecedores.validaRamoFornecedor("Alimenticio")).toBe(true)
});

test("Verifica se o ramo tem 3 ou mais caracteres", () => {
    expect(ValidacoesFornecedores.validaRamoFornecedor("Al")).toBe(false)
});

test("Verifica se o cnpj tem 14 digitos", () => {
    expect(ValidacoesFornecedores.validaCnpjFornecedor("11111111111114")).toBe(true)
});

test("Verifica se o cnpj tem 14 digitos", () => {
    expect(ValidacoesFornecedores.validaCnpjFornecedor("1111111111111")).toBe(false)
});

import { ValidacoesFornecedores } from "../services/validacoesFornecedores.js";

test("Verifica se o nome tem 3 ou mais caracteres", () => {
    expect(ValidacoesFornecedores.validaInsertAndUpdate("Papizzo")).toBe(true)
});

test("Verifica se o nome tem 3 ou mais caracteres", () => {
    expect(ValidacoesFornecedores.validaInsertAndUpdate("Pa")).toBe(false)
});

test("Verifica se o ramo tem 3 ou mais caracteres", () => {
    expect(ValidacoesFornecedores.validaInsertAndUpdate("Alimenticio")).toBe(true)
});

test("Verifica se o ramo tem 3 ou mais caracteres", () => {
    expect(ValidacoesFornecedores.validaInsertAndUpdate("Al")).toBe(false)
});

test("Verifica se o cnpj tem 14 digitos", () => {
    expect(ValidacoesFornecedores.validaInsertAndUpdate("11111111111114")).toBe(true)
});

test("Verifica se o cnpj tem 14 digitos", () => {
    expect(ValidacoesFornecedores.validaInsertAndUpdate("1111111111111")).toBe(false)
});

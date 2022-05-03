import ValidacoesClientes from "../services/validacoesClientes.js"

test("Validar se o nome tem pelo menos 3 caracteres.", () => {
    expect(ValidacoesClientes.validaNome("Edu")).toBe(true)
})
test("Validar se o nome tem pelo menos 3 caracteres.", () => {
    expect(ValidacoesClientes.validaNome("Eduardo")).toBe(true)
})
test("Validar se o email tem 8 digitos", () => {
    expect(ValidacoesClientes.validaEmail("12345678")).toBe(true)
})
test("Validar se o email tem 8 digitos", () => {
    expect(ValidacoesClientes.validaEmail("123456")).toBe(false)
})

import ValidacoesPedidos from "../services/ValidacoesPedidos"

test("Verifica se o nome tem 3 ou mais caracteres", () => {
    expect(ValidacoesPedidos.validaNome("João")).toBe(true)
})
test("Verifica se o nome tem 3 ou mais caracteres", () => {
    expect(ValidacoesPedidos.validaNome("Lu")).toBe(true)
})
test("Verifica se existe produto no pedido", () => {
    expect(ValidacoesClientes.validaEmail("X-Bacon")).toBe(true)
})
test("Verifica se existe produto no pedido", () => {
    expect(ValidacoesClientes.validaEmail("")).toBe(true)
})
test("Verificar se o preço contém apenas numeros", () => {
    expect(ValidacoesClientes.validaEmail(15)).toBe(false)
})
test("Verificar se o preço contém apenas numeros", () => {
    expect(ValidacoesClientes.validaEmail("15 Reais")).toBe(false)
})
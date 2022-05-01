import ValidacoesPedidos from "../services/ValidacoesPedidos"

test("Verifica se o nome tem 3 ou mais caracteres", () => {
    expect(ValidacoesPedidos.validaNome("João")).toBe(true)
});
test("Verifica se o nome tem 3 ou mais caracteres", () => {
    expect(ValidacoesPedidos.validaNome("Lu")).toBe(true)
});
test("Verifica se existe produto no pedido", () => {
    expect(ValidacoesPedidos.validaPedido("X-Bacon")).toBe(true)
});
test("Verifica se existe produto no pedido", () => {
    expect(ValidacoesPedidos.validaPedido("")).toBe(true)
});
test("Verificar se o preço contém apenas numeros", () => {
    expect(ValidacoesPedidos.validaPreco(15)).toBe(true)
});
test("Verificar se o preço contém apenas numeros", () => {
    expect(ValidacoesPedidos.validaPreco("15 Reais")).toBe(true)
});
import ValidacoesCardapio from "../services/validacoesCardapio.js";

test("Validar se o nome tem pelo menos 5 caracteres.", ()=>{
    expect(ValidacoesCardapio.validaProduto("X-burger")).toBe(true)
})
test("Validar se o nome tem pelo menos 5 caracteres.", ()=>{
    expect(ValidacoesCardapio.validaProduto("X")).toBe(false)
})

test("Validar se o preço é numero", ()=>{
    expect(ValidacoesCardapio.ValidaPreco("15")).toBe(true)
})

test("Validar se o preço é numero", ()=>{
    expect(ValidacoesCardapio.ValidaPreco("quinze")).toBe(false)
})

test("Verifica se existe o produto no cardapio", () => {
    expect(ValidacoesCardapio.validaProduto("X-Burger")).toBe(true)
});
test("Verifica se existe o produto no cardapio", () => {
    expect(ValidacoesCardapio.validaProduto("")).toBe(false)
});
test("Validar se descricao tem até 100 caracteres", () => {
    expect(ValidacoesCardapio.ValidaDescricao("abcdefghijklmnopqrstuvwxz")).toBe(true)
})
test("Validar se descricao é string", ()=> {
    expect(ValidacoesCardapio.ValidaDescricao(123)).toBe(false)
})
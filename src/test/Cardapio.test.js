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
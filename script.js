const nome_input = document.getElementById("nome-input")
const cartao_nome = document.getElementById("cartao-nome")


nome_input.addEventListener('input', function(){
    cartao_nome.innerText = nome_input.value
})

// =========================================

const cartao = document.getElementById("cartao")
const btnAzul = document.getElementById("btn-azul")
const btnVerde= document.getElementById("btn-verde")

btnAzul.addEventListener('click', () => {
    cartao.classList.remove('fundo-verde')
    cartao.classList.add('fundo-azul')
})

btnVerde.addEventListener('click', () => {
    cartao.classList.remove('fundo-azul')
    cartao.classList.add('fundo-verde')
})

// =========================================

const mudar_fonte = document.getElementById("btn-fonte")

mudar_fonte.addEventListener('click', () => {
    mudar_fonte.classList.toggle('fonte-alternativa')
})

// =========================================

const select_box = document.getElementById("imagem-select")
const imagem = document.getElementById("cartao-img")

select_box.addEventListener('change', () => {
    imagem.setAttribute('src', select_box.value)
})

// =========================================    

const input_habilidade = document.getElementById("habilidade-input")
const btnAdd = document.getElementById("btn-adicionar")
const lista_habilidades = document.getElementById("lista-habilidades")

btnAdd.addEventListener('click', () => {
    const item = document.createElement('li')
    item.textContent = input_habilidade.value
    lista_habilidades.appendChild(item)
    input_habilidade.value = ""
})


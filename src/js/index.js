/*objetivo 1 - Quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body para que os estilos do
modo escuro sejam aplicados e mudar a imagem para lua*/

/*passo 1 - pegar no js, o elemento HTML correspondente ao botao de troca de tema*/
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

/*passo 2 - dar um jeito de pegar no js o elemento HTML correspondente ao body*/
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

/* passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema*/
botaoAlterarTema.addEventListener("click", () => {
  /* passo 6 - remover a classe modo-escuro do body*/

  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro"); /* Verifica se o body está com a classe modo escuro */

    body.classList.toggle("modo-escuro"); /* Alterna em dois modos.. escuro e claro */

  if (modoEscuroEstaAtivo) {
    /*passo 8 - Trocar a imagem do botão de alterar tema pra sol*/
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
} else {
    /* passo 5 - trocar a imagem do botão de alterar tema para lua */
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
  }
});
/*
   OBJETIVO - quando clicar no programador da listagem temos que esconder o cartão do programador aberto 
   e mostrar o cartão correspondente ao que foi selecionado na listagem
   PASSO 1 - precisamos criar uma variável no JS pra trabalhar com a listagem de programador
   PASSO 2 - Identificar o evento de clique no elemento da listagem
   PASSO 3 - remover a classe aberto só do cartão que tá aberto
   PASSO 4 - ao clicar em um programador da lista pegamos o id desse programador pra saber qual cartão abrir
   PASSO 5 - remover a classe ativo que marca o programador selecionado na listagem
   PASSO 6 - adicinar a classe ativo no programador selecionado na listagem
*/

//PASSO 1 - precisamos criar uma variável no JS pra trabalhar com a listagem de programadores
const listaSelecaoProgamadores = document.querySelectorAll(".programador");
console.log(listaSelecaoProgamadores);

//PASSO 2 - Identificar o evento de clique no elemento da listagem
listaSelecaoProgamadores.forEach(programador =>{
    programador.addEventListener("click", () =>{
        //PASSO 3 - remover a classe aberto só do cartão que tá aberto
        const cartaoProgramadorAberto = document.querySelector(".aberto");
        cartaoProgramadorAberto.classList.remove("aberto");

        //PASSO 4 - ao clicar em um programador da lista pegamos o id desse programador pra saber qual cartão abrir
        const idProgramadorSelecionado = programador.attributes.id.value;
        const idDoCartaoProgramadorParaAbrir = "cartao-" 
        + idProgramadorSelecionado;
        const cartaoProgramadorParaAbrir = document.getElementById(idDoCartaoProgramadorParaAbrir);
        cartaoProgramadorParaAbrir.classList.add("aberto");

        //PASSO 5 - remover a classe ativo que marca o programador selecionado na listagem
        const programadorAtivoNaListagem = document.querySelector(".ativo");
        programadorAtivoNaListagem.classList.remove("ativo");

        //PASSO 6 - adicinar a classe ativo no programador selecionado na listagem
        const programadorSelecionadoNaListagem = document.getElementById(idProgramadorSelecionado);
        programadorSelecionadoNaListagem.classList.add("ativo");


    })
})


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

//PASSO 1 - Seleciona todos os elementos da listagem de programadores para aplicar eventos de clique
const listaSelecaoProgamadores = document.querySelectorAll(".programador");
console.log(listaSelecaoProgamadores);

//PASSO 2 Itera sobre cada elemento da listagem para adicionar um evento de clique
listaSelecaoProgamadores.forEach(programador => {
    programador.addEventListener("click", () => {

        // Passo 3: Localiza o cartão atualmente aberto (com a classe "aberto") e remove essa classe para escondê-lo
        const cartaoProgramadorAberto = document.querySelector(".aberto");
        cartaoProgramadorAberto.classList.remove("aberto");

        // Passo 4: Obtém o ID do programador clicado para identificar qual cartão deve ser exibido
        const idProgramadorSelecionado = programador.attributes.id.value;
        const idDoCartaoProgramadorParaAbrir = "cartao-" + idProgramadorSelecionado;
        
        // Seleciona o cartão correspondente ao programador clicado e adiciona a classe "aberto" para exibi-lo
        const cartaoProgramadorParaAbrir = document.getElementById(idDoCartaoProgramadorParaAbrir);
        cartaoProgramadorParaAbrir.classList.add("aberto");

        // Passo 5: Encontra o programador atualmente selecionado (com a classe "ativo") na listagem e remove essa classe
        const programadorAtivoNaListagem = document.querySelector(".ativo");
        programadorAtivoNaListagem.classList.remove("ativo");

        // Passo 6: Adiciona a classe "ativo" ao programador que foi clicado para destacá-lo na listagem
        const programadorSelecionadoNaListagem = document.getElementById(idProgramadorSelecionado);
        programadorSelecionadoNaListagem.classList.add("ativo");
    });
});



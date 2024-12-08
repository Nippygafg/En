// Espera o DOM carregar completamente
document.addEventListener("DOMContentLoaded", function() {

    // Seleciona os elementos do DOM
    const iniciarBtn = document.getElementById("iniciarEnigmaBtn");
    const conteudoEnigma = document.getElementById("conteudoEnigma");
    const verificarRespostaBtn = document.getElementById("verificarRespostaBtn");
    const respostaEnigma = document.getElementById("respostaEnigma");
    const resultadoEnigma = document.getElementById("resultadoEnigma");
    const imagemRitual = document.getElementById("imagemRitual");
    const aprenderRitualBtn = document.getElementById("aprenderRitualBtn");

    // Resposta correta do enigma (preencha com a resposta correta)
    const respostaCorreta = "maldição"; // Substitua por sua resposta

    // URL da imagem do ritual (adicione o link ou caminho da imagem aqui)
    const imagemRitualSrc = "link_ou_caminho_da_imagem.jpg"; // Substitua com o caminho da sua imagem

    // Função para iniciar o enigma
    function iniciarEnigma() {
        iniciarBtn.style.display = "none"; // Esconde o botão de início
        conteudoEnigma.style.display = "block"; // Mostra o conteúdo do enigma
    }

    // Função para verificar a resposta do jogador
    function verificarResposta() {
        const resposta = respostaEnigma.value.trim().toLowerCase();

        if (resposta === respostaCorreta) {
            // Mostra o símbolo do ritual
            imagemRitual.src = imagemRitualSrc;
            resultadoEnigma.style.display = "block";

            // Esconde os elementos do enigma
            respostaEnigma.style.display = "none";
            verificarRespostaBtn.style.display = "none";
        } else {
            alert("Resposta incorreta. Tente novamente.");
        }
    }

    // Função para aprender o ritual com efeitos visuais
    function aprenderRitual() {
        document.body.style.transition = "all 2s ease-in-out";
        document.body.style.filter = "brightness(0.3) blur(5px)";

        setTimeout(() => {
            alert("Você aprendeu o ritual!");
            window.close(); // Fecha o site
        }, 2000);
    }

    // Adiciona eventos aos botões
    iniciarBtn.addEventListener("click", iniciarEnigma);
    verificarRespostaBtn.addEventListener("click", verificarResposta);
    aprenderRitualBtn.addEventListener("click", aprenderRitual);

});




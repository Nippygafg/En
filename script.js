function iniciarEnigma() {
    var palavraInput = document.getElementById('palavra');
    if (!palavraInput) return; // Verificação de segurança

    var palavra = palavraInput.value.toLowerCase();
    if (palavra === 'doom') {
        document.getElementById('inicio').classList.add('hidden');
        document.getElementById('resultado').classList.remove('hidden');
    } else {
        alert("Palavra incorreta! Tente novamente.");
    }
}

function verificarResposta() {
    var respostaInput = document.getElementById('resposta');
    if (!respostaInput) return; // Verificação de segurança

    var resposta = respostaInput.value.toLowerCase();
    if (resposta === 'maldição') {
        document.getElementById('resultado').classList.add('hidden');
        document.getElementById('ritual').classList.remove('hidden');
    } else {
        alert("Resposta incorreta! Tente novamente.");
    }
}

function aprenderRitual() {
    var container = document.getElementById('ritual');
    if (!container) return; // Verificação de segurança

    // Aplicar efeitos de transformação
    container.style.transition = "all 1s ease-in-out";
    container.style.transform = "scale(1.1)";
    container.style.filter = "blur(3px)";
    container.style.backgroundColor = "rgba(0, 255, 0, 0.1)";

    // Criar efeito de luz
    var efeitoLuz = document.createElement('div');
    efeitoLuz.style.position = "absolute";
    efeitoLuz.style.top = "0";
    efeitoLuz.style.left = "0";
    efeitoLuz.style.width = "100%";
    efeitoLuz.style.height = "100%";
    efeitoLuz.style.background = "radial-gradient(circle, rgba(0, 255, 0, 0.8), rgba(0, 255, 0, 0))";
    efeitoLuz.style.zIndex = "9999";
    efeitoLuz.style.animation = "fadeOutLight 3s forwards";
    container.appendChild(efeitoLuz);

    // Remover o efeito após a animação
    setTimeout(() => {
        efeitoLuz.remove();
    }, 3000);

    // Mensagem final
    setTimeout(() => {
        alert("Você aprendeu o ritual!");
    }, 3000);
}



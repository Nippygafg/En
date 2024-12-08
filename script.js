function iniciarEnigma() {
    var palavra = document.getElementById('palavra').value.toLowerCase();
    if (palavra === 'doom') {
        document.getElementById('inicio').classList.add('hidden');
        document.getElementById('resultado').classList.remove('hidden');
    } else {
        alert("Palavra incorreta! Tente novamente.");
    }
}

function verificarResposta() {
    var resposta = document.getElementById('resposta').value.toLowerCase();
    if (resposta === 'maldição') {
        document.getElementById('resultado').classList.add('hidden');
        document.getElementById('ritual').classList.remove('hidden');
    } else {
        alert("Resposta incorreta! Tente novamente.");
    }
}

function aprenderRitual() {
    // Efeitos de luz e distorção
    var container = document.getElementById('ritual');
    container.style.transition = "all 1s ease-in-out";
    container.style.transform = "scale(1.1)";
    container.style.filter = "blur(3px)";
    container.style.backgroundColor = "rgba(0, 255, 0, 0.1)";
    
    // Mostrar efeito de luz (faixa de luz)
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

    // Após 3 segundos, fechar o site
    setTimeout(function() {
        window.close();
    }, 3000);
}

// Efeito de luz
@keyframes fadeOutLight {
    0% { opacity: 1; }
    100% { opacity: 0; }
}


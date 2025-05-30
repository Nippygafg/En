// Bloqueia o menu de contexto (botão direito do mouse)
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert("-1 DE SANIDADE PERMANENTE.");
});

// Bloqueia teclas de atalho (F12, Ctrl+Shift+I, Ctrl+U, Ctrl+Shift+C)
document.addEventListener('keydown', function (e) {
    // F12
    if (e.key === 'F12') {
        e.preventDefault();
        alert("-1 DE SANIDADE PERMANENTE.");
    }
    // Ctrl+Shift+I
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        alert("-1 DE SANIDADE PERMANENTE.");
    }
    // Ctrl+U
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        alert("-1 DE SANIDADE PERMANENTE.");
    }
    // Ctrl+Shift+C
    if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        alert("-1 DE SANIDADE PERMANENTE.");
    }
});

// Objeto com todos os enigmas para organização
const enigmasConfig = {
    doom: {
        target: "cipher",
        correctAnswer: "maldição",
        responseElement: "response"
    },
    artificie: {
        target: "artificieEnigma",
        correctAnswer: "departamento",
        responseElement: "artificieResponse"
    },
    extirpar: {
        target: "extirparLevel",
        correctAnswer: "assassina",
        responseElement: "extirparResponse"
    },
    mentiras: {
        target: "mentirasEnigma",
        correctAnswer: "aline",
        responseElement: "mentirasResponse"
    },
    corromper: {  // Novo enigma
        target: "corromperEnigma",
        correctAnswer: "pureza",
        responseElement: "corromperResponse",
        successTarget: "corromperResposta"
    }
};

function startEnigma() {
    const userInput = document.getElementById("initialInput").value.trim().toLowerCase();
    const initialStepDiv = document.getElementById("initialStep");

    if (enigmasConfig[userInput]) {
        initialStepDiv.style.display = "none";
        document.getElementById(enigmasConfig[userInput].target).style.display = "block";
    } else {
        alert("Resposta incorreta! Tente novamente.");
    }
}

// Função genérica para verificar respostas
function checkAnswer(enigmaKey, inputId, responseDivId) {
    const userAnswer = document.getElementById(inputId).value.trim().toLowerCase();
    const enigma = enigmasConfig[enigmaKey];

    if (userAnswer === enigma.correctAnswer) {
        document.getElementById(enigma.target).style.display = "none";
        
        // Verifica se tem um target específico para sucesso (como no corromper)
        if (enigma.successTarget) {
            document.getElementById(enigma.successTarget).style.display = "block";
        } else {
            // Padrão para os enigmas antigos
            if (enigmaKey === 'doom') {
                document.getElementById("ritual").style.display = "block";
            } else if (enigmaKey === 'artificie') {
                document.getElementById("artificieResposta").style.display = "block";
            } else if (enigmaKey === 'extirpar') {
                document.getElementById("finalLevel").style.display = "block";
            } else if (enigmaKey === 'mentiras') {
                document.getElementById("mentirasFinal").style.display = "block";
            }
        }
    } else {
        const responseDiv = document.getElementById(responseDivId);
        responseDiv.innerHTML = "<p style='color: red;'>Resposta incorreta. Tente novamente!</p>";
    }
}

// Funções específicas para cada enigma (mantidas para compatibilidade)
function checkAnswer() {
    checkAnswer('doom', 'answer', 'response');
}

function checkArtificieAnswer() {
    checkAnswer('artificie', 'artificieAnswer', 'artificieResponse');
}

function checkExtirparAnswer() {
    checkAnswer('extirpar', 'extirparInput', 'extirparResponse');
}

function checkMentirasAnswer() {
    checkAnswer('mentiras', 'mentirasAnswer', 'mentirasResponse');
}

// Nova função para o enigma Corromper
function checkCorromperAnswer() {
    checkAnswer('corromper', 'corromperAnswer', 'corromperResponse');
}

// Funções de animação (mantidas originais)
function iniciarAnimacao() {
    const animationOverlay = document.getElementById("animationOverlay");

    animationOverlay.style.display = "flex";
    animationOverlay.innerHTML = "<p>Absorvendo conhecimento...</p>";

    setTimeout(() => {
        animationOverlay.innerHTML = "<p>Ritual aprendido!</p>";

        setTimeout(() => {
            if (window.opener) {
                window.close();
            } else {
                alert("O site não pode ser fechado automaticamente. Feche a aba manualmente.");
            }
        }, 2000);
    }, 3000);
}

function finalAnimation() {
    const animationOverlay = document.getElementById("animationOverlay");

    animationOverlay.style.display = "flex";
    animationOverlay.style.backgroundColor = "radial-gradient(circle, rgba(0, 255, 0, 0.7), rgba(0, 0, 0, 0.9))";
    animationOverlay.innerHTML = "<p>Absorvendo conhecimento...</p>";

    setTimeout(() => {
        animationOverlay.style.backgroundColor = "black";
        animationOverlay.innerHTML = "<p style='color: red; font-size: 2rem; animation: pulsar 2s infinite;'>Esconder dos Olhos</p>";
    }, 3000);
}

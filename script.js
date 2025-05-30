// Bloqueio de inspeção
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert("-1 DE SANIDADE PERMANENTE.");
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        alert("-1 DE SANIDADE PERMANENTE.");
    }
});

// Função principal
function startEnigma() {
    const userInput = document.getElementById("initialInput").value.trim().toLowerCase();
    const initialStepDiv = document.getElementById("initialStep");

    // Novo caso: "corromper" leva direto ao ritual
    if (userInput === "corromper") {
        initialStepDiv.style.display = "none";
        document.getElementById("ritualCorromper").style.display = "block";
        return;
    }
    // Enigmas existentes
    else if (userInput === "doom") {
        initialStepDiv.style.display = "none";
        document.getElementById("cipher").style.display = "block";
    }
    else if (userInput === "artificie") {
        initialStepDiv.style.display = "none";
        document.getElementById("artificieEnigma").style.display = "block";
    }
    else if (userInput === "extirpar") {
        initialStepDiv.style.display = "none";
        document.getElementById("extirparLevel").style.display = "block";
    }
    else if (userInput === "mentiras") {
        initialStepDiv.style.display = "none";
        document.getElementById("mentirasEnigma").style.display = "block";
    }
    else {
        alert("Sinal não reconhecido. Tente novamente.");
    }
}

// Funções dos enigmas (mantidas originais)
function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
    if (userAnswer === "maldição") {
        document.getElementById("cipher").style.display = "none";
        document.getElementById("ritual").style.display = "block";
    } else {
        document.getElementById("response").innerHTML = "<p style='color: red;'>Errado!</p>";
    }
}

function checkArtificieAnswer() {
    const userAnswer = document.getElementById("artificieAnswer").value.trim().toLowerCase();
    if (userAnswer === "departamento") {
        document.getElementById("artificieEnigma").style.display = "none";
        document.getElementById("artificieResposta").style.display = "block";
    } else {
        document.getElementById("artificieResponse").innerHTML = "<p style='color: red;'>Errado!</p>";
    }
}

function checkExtirparAnswer() {
    const userAnswer = document.getElementById("extirparInput").value.trim().toLowerCase();
    if (userAnswer === "assassina") {
        document.getElementById("extirparLevel").style.display = "none";
        document.getElementById("finalLevel").style.display = "block";
    } else {
        document.getElementById("extirparResponse").innerHTML = "<p style='color: red;'>Errado!</p>";
    }
}

function checkMentirasAnswer() {
    const userAnswer = document.getElementById("mentirasAnswer").value.trim().toLowerCase();
    if (userAnswer === "aline") {
        document.getElementById("mentirasEnigma").style.display = "none";
        document.getElementById("mentirasFinal").style.display = "block";
    } else {
        document.getElementById("mentirasResponse").innerHTML = "<p style='color: red;'>Errado!</p>";
    }
}

// Animação (original)
function iniciarAnimacao() {
    const overlay = document.getElementById("animationOverlay");
    overlay.style.display = "flex";
    overlay.innerHTML = "<p>Absorvendo conhecimento...</p>";

    setTimeout(() => {
        overlay.innerHTML = "<p>Ritual aprendido!</p>";
        setTimeout(() => {
            window.close();
        }, 2000);
    }, 3000);
}

function finalAnimation() {
    const overlay = document.getElementById("animationOverlay");
    overlay.style.display = "flex";
    overlay.innerHTML = "<p>Absorvendo conhecimento...</p>";

    setTimeout(() => {
        overlay.style.backgroundColor = "black";
        overlay.innerHTML = "<p style='color: red;'>Esconder dos Olhos</p>";
    }, 3000);
}

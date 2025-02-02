function startEnigma() {
    const userInput = document.getElementById("initialInput").value.trim().toLowerCase();
    const correctStartDoom = "doom";
    const correctStartArtificie = "artificie";
    const correctStartExtirpar = "extirpar";
    const correctStartMentiras = "mentiras";
    const initialStepDiv = document.getElementById("initialStep");
    const cipherDiv = document.getElementById("cipher");
    const artificieEnigmaDiv = document.getElementById("artificieEnigma");
    const extirparLevelDiv = document.getElementById("extirparLevel");
    const mentirasEnigmaDiv = document.getElementById("mentirasEnigma");

    if (userInput === correctStartDoom) {
        initialStepDiv.style.display = "none";
        cipherDiv.style.display = "block";
    } else if (userInput === correctStartArtificie) {
        initialStepDiv.style.display = "none";
        artificieEnigmaDiv.style.display = "block";
    } else if (userInput === correctStartExtirpar) {
        initialStepDiv.style.display = "none";
        extirparLevelDiv.style.display = "block";
    } else if (userInput === correctStartMentiras) {
        initialStepDiv.style.display = "none";
        mentirasEnigmaDiv.style.display = "block";
    } else {
        alert("Resposta incorreta! Tente novamente.");
    }
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
    const correctAnswer = "maldição";
    const cipherDiv = document.getElementById("cipher");
    const ritualDiv = document.getElementById("ritual");

    if (userAnswer === correctAnswer) {
        cipherDiv.style.display = "none";
        ritualDiv.style.display = "block";
    } else {
        const responseDiv = document.getElementById("response");
        responseDiv.innerHTML = "<p style='color: red;'>Resposta incorreta. Tente novamente!</p>";
    }
}

function checkArtificieAnswer() {
    const userAnswer = document.getElementById("artificieAnswer").value.trim().toLowerCase();
    const correctAnswer = "departamento";
    const artificieEnigmaDiv = document.getElementById("artificieEnigma");
    const artificieRespostaDiv = document.getElementById("artificieResposta");

    if (userAnswer === correctAnswer) {
        artificieEnigmaDiv.style.display = "none";
        artificieRespostaDiv.style.display = "block";
    } else {
        const responseDiv = document.getElementById("artificieResponse");
        responseDiv.innerHTML = "<p style='color: red;'>Resposta incorreta. Tente novamente!</p>";
    }
}

function checkExtirparAnswer() {
    const userAnswer = document.getElementById("extirparInput").value.trim().toLowerCase();
    const correctAnswer = "assassina";
    const extirparLevelDiv = document.getElementById("extirparLevel");
    const finalLevelDiv = document.getElementById("finalLevel");

    if (userAnswer === correctAnswer) {
        extirparLevelDiv.style.display = "none";
        finalLevelDiv.style.display = "block";
    } else {
        const responseDiv = document.getElementById("extirparResponse");
        responseDiv.innerHTML = "<p style='color: red;'>Resposta incorreta. Tente novamente!</p>";
    }
}

// Novo Enigma (Mentiras)
function checkMentirasAnswer() {
    const userAnswer = document.getElementById("mentirasAnswer").value.trim().toLowerCase();
    const correctAnswer = "aline";
    const mentirasEnigmaDiv = document.getElementById("mentirasEnigma");
    const mentirasFinalDiv = document.getElementById("mentirasFinal");

    if (userAnswer === correctAnswer) {
        mentirasEnigmaDiv.style.display = "none";
        mentirasFinalDiv.style.display = "block";
    } else {
        const responseDiv = document.getElementById("mentirasResponse");
        responseDiv.innerHTML = "<p style='color: red;'>Resposta incorreta. Tente novamente!</p>";
    }
}

function iniciarAnimacao() {
    const animationOverlay = document.getElementById("animationOverlay");

    // Mostra a animação
    animationOverlay.style.display = "flex";
    animationOverlay.innerHTML = "<p>Absorvendo conhecimento...</p>";

    // Finaliza a animação e fecha o site
    setTimeout(() => {
        animationOverlay.innerHTML = "<p>Ritual aprendido!</p>";

        // Aguarda um tempo antes de fechar o site
        setTimeout(() => {
            if (window.opener) {
                // Fecha apenas se o site foi aberto por script
                window.close();
            } else {
                alert("O site não pode ser fechado automaticamente. Feche a aba manualmente.");
            }
        }, 2000);
    }, 3000);
}

function finalAnimation() {
    const animationOverlay = document.getElementById("animationOverlay");

    // Mostra a animação de "Absorvendo conhecimento..."
    animationOverlay.style.display = "flex";
    animationOverlay.style.backgroundColor = "radial-gradient(circle, rgba(0, 255, 0, 0.7), rgba(0, 0, 0, 0.9))"; // Fundo original
    animationOverlay.innerHTML = "<p>Absorvendo conhecimento...</p>";

    // Após 3 segundos, muda para o texto "Esconder dos Olhos"
    setTimeout(() => {
        animationOverlay.style.backgroundColor = "black"; // Fundo preto
        animationOverlay.innerHTML = "<p style='color: red; font-size: 2rem; animation: pulsar 2s infinite;'>Esconder dos Olhos</p>";
    }, 3000);
}

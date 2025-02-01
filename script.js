function startEnigma() {
    const userInput = document.getElementById("initialInput").value.trim().toLowerCase();
    const correctStartDoom = "doom";
    const correctStartArtificie = "artificie";
    const initialStepDiv = document.getElementById("initialStep");
    const extirparStepDiv = document.getElementById("extirparStep");
    const artificieEnigmaDiv = document.getElementById("artificieEnigma");

    if (userInput === "extirpar") {
        initialStepDiv.style.display = "none";
        extirparStepDiv.style.display = "block";
    } else if (userInput === correctStartDoom) {
        initialStepDiv.style.display = "none";
        artificieEnigmaDiv.style.display = "block";
    } else if (userInput === correctStartArtificie) {
        initialStepDiv.style.display = "none";
        artificieEnigmaDiv.style.display = "block";
    } else {
        alert("Resposta incorreta! Tente novamente.");
    }
}

function checkExtirparAnswer() {
    const userAnswer = document.getElementById("extirparInput").value.trim().toLowerCase();
    const correctAnswer = "extirpar";
    const extirparStepDiv = document.getElementById("extirparStep");
    const assassinaStepDiv = document.getElementById("assassinaStep");

    if (userAnswer === correctAnswer) {
        extirparStepDiv.style.display = "none";
        assassinaStepDiv.style.display = "block";
    } else {
        const responseDiv = document.getElementById("extirparResponse");
        responseDiv.innerHTML = "<p style='color: red;'>Resposta incorreta. Tente novamente!</p>";
    }
}

function checkAssassinaAnswer() {
    const userAnswer = document.getElementById("assassinaInput").value.trim().toLowerCase();
    const correctAnswer = "assassina";
    const assassinaStepDiv = document.getElementById("assassinaStep");
    const ritualDiv = document.getElementById("ritual");

    if (userAnswer === correctAnswer) {
        assassinaStepDiv.style.display = "none";
        ritualDiv.style.display = "block";
    } else {
        const responseDiv = document.getElementById("assassinaResponse");
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

function startEnigma() {
    const userInput = document.getElementById("initialInput").value.trim().toLowerCase();
    const correctStart1 = "doom";
    const correctStart2 = "luz"; // Nova palavra-chave para o segundo enigma
    const initialStepDiv = document.getElementById("initialStep");
    const cipherDiv = document.getElementById("cipher");
    const cipherDiv2 = document.getElementById("cipher2");

    if (userInput === correctStart1) {
        initialStepDiv.style.display = "none";
        cipherDiv.style.display = "block";
    } else if (userInput === correctStart2) {
        initialStepDiv.style.display = "none";
        cipherDiv2.style.display = "block";
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

function checkAnswer2() {
    const userAnswer = document.getElementById("answer2").value.trim().toLowerCase();
    const correctAnswer = "iluminação"; // Resposta do segundo enigma
    const cipherDiv2 = document.getElementById("cipher2");
    const ritualDiv2 = document.getElementById("ritual2");

    if (userAnswer === correctAnswer) {
        cipherDiv2.style.display = "none";
        ritualDiv2.style.display = "block";
    } else {
        const responseDiv = document.getElementById("response2");
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

function iniciarAnimacao2() {
    const animationOverlay = document.getElementById("animationOverlay");

    // Mostra a animação para o segundo ritual
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

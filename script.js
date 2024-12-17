function startEnigma() {
    const userInput = document.getElementById("initialInput").value.trim().toLowerCase();
    const correctStart = "doom";
    const correctStart2 = "artificie";  // Nova palavra-chave para o segundo enigma
    const initialStepDiv = document.getElementById("initialStep");
    const cipherDiv = document.getElementById("cipher");

    if (userInput === correctStart) {
        initialStepDiv.style.display = "none";
        cipherDiv.style.display = "block";
    } else if (userInput === correctStart2) {
        // Novo enigma: Artificie
        initialStepDiv.style.display = "none";
        cipherDiv.style.display = "block";
        document.querySelector("#cipher p").innerHTML = "Digite a resposta do enigma de 'Artificie'";
    } else {
        alert("Resposta incorreta! Tente novamente.");
    }
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
    const correctAnswer = "maldição"; // Resposta do enigma do Doom
    const correctAnswer2 = "criador"; // Resposta do enigma do Artificie
    const cipherDiv = document.getElementById("cipher");
    const imageDiv = document.getElementById("imageDiv");
    const ritualDiv = document.getElementById("ritualDiv");

    if (userAnswer === correctAnswer) {
        cipherDiv.style.display = "none";
        ritualDiv.style.display = "block";  // Exibe o ritual e o botão "Aprender Ritual" para o Doom
    } else if (userAnswer === correctAnswer2) {
        cipherDiv.style.display = "none";
        imageDiv.style.display = "block";
        // Caso a resposta seja correta para o enigma do Artificie
        document.getElementById("imageEnigma").src = "link_da_imagem_do_enigma_artificie.jpg";  // Adicione o link da imagem aqui
    } else {
        const responseDiv = document.getElementById("response");
        responseDiv.innerHTML = "<p style='color: red;'>Resposta incorreta. Tente novamente!</p>";
    }
}

function learnRitual() {
    alert("Você aprendeu o ritual!");
    // Aqui você pode adicionar qualquer funcionalidade extra após o ritual ser aprendido
}


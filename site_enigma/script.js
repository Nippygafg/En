function startEnigma() {
    const userInput = document.getElementById("initialInput").value.trim().toLowerCase();
    const correctStart = "doom";
    const initialStepDiv = document.getElementById("initialStep");
    const cipherDiv = document.getElementById("cipher");

    if (userInput === correctStart) {
        initialStepDiv.style.display = "none";
        cipherDiv.style.display = "block";
    } else {
        alert("Resposta incorreta! Tente novamente.");
    }
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
    const correctAnswer = "maldição";
    const responseDiv = document.getElementById("response");

    if (userAnswer === correctAnswer) {
        responseDiv.innerHTML = "<p style='color: green;'>Resposta correta! A imagem será exibida.</p>";
        window.location.href = "https://i.pinimg.com/originals/02/39/cb/0239cb155136cc189c20b1b46c5b128c.png";
    } else {
        responseDiv.innerHTML = "<p style='color: red;'>Resposta incorreta. Tente novamente!</p>";
    }
}

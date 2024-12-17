document.getElementById("activateButton").addEventListener("click", () => {
    const input = document.getElementById("triggerInput").value.toLowerCase();
    const ritualEnigma = document.getElementById("ritualEnigma");
    const puzzleEnigma = document.getElementById("puzzleEnigma");

    // Oculta todos os enigmas inicialmente
    ritualEnigma.classList.add("hidden");
    puzzleEnigma.classList.add("hidden");

    if (input === "doom") {
        ritualEnigma.classList.remove("hidden");
    } else if (input === "artificie") {
        puzzleEnigma.classList.remove("hidden");
    } else {
        alert("Palavra mágica inválida!");
    }
});

// Lógica para o aprendizado do ritual
document.getElementById("learnRitual").addEventListener("click", () => {
    const ritualContent = document.getElementById("ritualContent");
    const ritualEffects = document.getElementById("ritualEffects");

    ritualContent.classList.add("hidden");
    ritualEffects.classList.remove("hidden");
});

// Lógica para o caça-palavras
function checkAnswers() {
    const inputs = document.querySelectorAll('.grid input');
    let allCorrect = true;

    inputs.forEach(input => {
        const answer = input.dataset.answer;
        if (input.value.toLowerCase() !== answer) {
            input.style.borderColor = 'red';
            allCorrect = false;
        } else {
            input.style.borderColor = 'green';
        }
    });

    const resultDiv = document.getElementById('result');
    if (allCorrect) {
        resultDiv.textContent = 'Parabéns! Você completou o caça-palavras!';
        resultDiv.style.color = 'green';
    } else {
        resultDiv.textContent = 'Existem erros! Verifique suas respostas.';
        resultDiv.style.color = 'red';
    }
}



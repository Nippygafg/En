// Pegando os elementos da página
const answerInput = document.getElementById('answer-input');
const submitBtn = document.getElementById('submit-btn');
const hint = document.getElementById('hint');
const ritualContainer = document.getElementById('ritual-container');
const learnRitualBtn = document.getElementById('learn-ritual-btn');
const ritualLearnedMessage = document.getElementById('ritual-learned');
const body = document.body;

// Resposta correta do enigma
const correctAnswer = 'ar';

// Enigmas diferentes, baseados no código que o jogador digitar
const enigmas = {
  'doom': {
    prompt: 'O que é invisível e afeta tudo ao seu redor?',
    correctAnswer: 'ar',
    ritualImage: 'doom-ritual.jpg',
    ritualMessage: 'Você agora conhece o Ritual do Doom. Use com sabedoria!'
  },
  'maldição': {
    prompt: 'A maldição é invisível, mas pode destruir um reino. O que é?',
    correctAnswer: 'sombra',
    ritualImage: 'maldicao-ritual.jpg',
    ritualMessage: 'Você agora conhece o Ritual da Maldição. Cuidado ao usá-lo!'
  }
};

// Função para mudar o enigma baseado no código fornecido
function setEnigma(code) {
  if (enigmas[code]) {
    const enigma = enigmas[code];
    document.querySelector('h1').textContent = enigma.prompt;
    return enigma;
  }
  return null;
}

// Inicialização - Definir o enigma com base no código
let currentEnigma = setEnigma('doom');  // Mude 'doom' para 'maldição' para outro enigma

submitBtn.addEventListener('click', () => {
  // Verifica se a resposta está correta
  if (answerInput.value.trim().toLowerCase() === currentEnigma.correctAnswer) {
    // Exibe o próximo conteúdo - o ritual
    ritualContainer.classList.remove('hidden');
    document.getElementById('ritual-image').src = currentEnigma.ritualImage;
  } else {
    // Se a resposta estiver errada, mostra a dica
    hint.classList.remove('hidden');
  }
});

// Função que é chamada quando o jogador clica no botão para aprender o ritual
learnRitualBtn.addEventListener('click', () => {
  // Exibe a mensagem de que o ritual foi aprendido
  ritualLearnedMessage.style.display = 'block';
  ritualLearnedMessage.querySelector('p').textContent = currentEnigma.ritualMessage;

  // Ativa a animação de fundo e outros efeitos
  body.classList.add('ritual-active');
  
  // Opcionalmente, muda a cor da imagem ou anima ela
  document.getElementById('ritual-image').style.opacity = 1;

  // Desativa o botão depois que o ritual for aprendido
  learnRitualBtn.style.display = 'none';
});

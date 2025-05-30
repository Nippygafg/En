// =============================================
// CONFIGURAÇÕES E BLOQUEIO DE INSPEÇÃO
// =============================================

// Bloqueia menu de contexto (botão direito)
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert("-1 DE SANIDADE PERMANENTE.");
});

// Bloqueia atalhos de desenvolvedor
const blockedShortcuts = [
    { keys: ['F12'], message: "Inspeção bloqueada." },
    { keys: ['Control', 'Shift', 'I'], message: "Ferramentas de desenvolvedor desativadas." },
    { keys: ['Control', 'u'], message: "Código-fonte protegido." },
    { keys: ['Control', 'Shift', 'C'], message: "Inspetor desabilitado." }
];

document.addEventListener('keydown', function(e) {
    blockedShortcuts.forEach(shortcut => {
        const match = shortcut.keys.every(key => 
            e.key === key || 
            (key === 'Control' && e.ctrlKey) || 
            (key === 'Shift' && e.shiftKey)
        );
        if (match) {
            e.preventDefault();
            alert(`-1 DE SANIDADE PERMANENTE.\n${shortcut.message}`);
        }
    });
});

// =============================================
// INICIALIZAÇÃO E EVENT LISTENERS
// =============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log("Página carregada - Iniciando configurações...");
    
    // Configura botão de início
    const startButton = document.getElementById('startButton');
    const initialInput = document.getElementById('initialInput');
    
    if (startButton && initialInput) {
        startButton.addEventListener('click', startEnigma);
        initialInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') startEnigma();
        });
    } else {
        console.error("Elementos essenciais não encontrados!");
    }
});

// =============================================
// MAPEAMENTO DE ENIGMAS
// =============================================

const enigmas = {
    corromper: {
        target: "ritualCorromper",
        resposta: null, // Vai direto para o ritual
        mensagemErro: "A corrupção aguarda..."
    },
    doom: {
        target: "cipher",
        resposta: "maldição",
        respostaElement: "response",
        mensagemErro: "O cifrado não se revela..."
    },
    artificie: {
        target: "artificieEnigma",
        resposta: "departamento",
        respostaElement: "artificieResponse",
        mensagemErro: "As pistas estão diante de você..."
    },
    extirpar: {
        target: "extirparLevel",
        resposta: "assassina",
        respostaElement: "extirparResponse",
        mensagemErro: "A lâmina não corta..."
    },
    mentiras: {
        target: "mentirasEnigma",
        resposta: "aline",
        respostaElement: "mentirasResponse",
        mensagemErro: "A verdade dói, mas é necessária..."
    }
};

// =============================================
// FUNÇÕES PRINCIPAIS
// =============================================

function startEnigma() {
    try {
        console.log("Iniciando enigma...");
        
        const userInput = document.getElementById("initialInput").value.trim().toLowerCase();
        const initialStepDiv = document.getElementById("initialStep");
        
        if (!initialStepDiv) throw new Error("Elemento initialStep não encontrado");

        // Esconde todas as seções primeiro
        document.querySelectorAll('.container, [id$="Enigma"], [id$="Level"], [id^="ritual"]').forEach(el => {
            el.style.display = 'none';
        });

        // Verifica se é um enigma válido
        if (enigmas[userInput]) {
            console.log(`Redirecionando para: ${userInput}`);
            initialStepDiv.style.display = "none";
            document.getElementById(enigmas[userInput].target).style.display = "block";
        } else {
            alert("Sinal não reconhecido. Opções válidas:\n\n- corromper\n- doom\n- artificie\n- extirpar\n- mentiras");
        }
    } catch (error) {
        console.error("Erro em startEnigma:", error);
        alert("O portal falhou... Recarregue a página.");
    }
}

// Função genérica para verificar respostas
function checkAnswer(enigmaKey, inputId, responseDivId) {
    try {
        const userAnswer = document.getElementById(inputId).value.trim().toLowerCase();
        const enigma = enigmas[enigmaKey];
        
        if (!enigma) throw new Error("Enigma não configurado");

        if (userAnswer === enigma.resposta) {
            document.getElementById(enigma.target).style.display = "none";
            
            // Redireciona para a próxima tela
            if (enigmaKey === 'doom') {
                document.getElementById("ritual").style.display = "block";
            } else if (enigmaKey === 'artificie') {
                document.getElementById("artificieResposta").style.display = "block";
            } else if (enigmaKey === 'extirpar') {
                document.getElementById("finalLevel").style.display = "block";
            } else if (enigmaKey === 'mentiras') {
                document.getElementById("mentirasFinal").style.display = "block";
            }
        } else {
            document.getElementById(responseDivId).innerHTML = 
                `<p style='color: red;'>${enigma.mensagemErro}</p>`;
        }
    } catch (error) {
        console.error(`Erro em checkAnswer (${enigmaKey}):`, error);
    }
}

// Funções específicas para manter compatibilidade
function checkArtificieAnswer() { checkAnswer('artificie', 'artificieAnswer', 'artificieResponse'); }
function checkExtirparAnswer() { checkAnswer('extirpar', 'extirparInput', 'extirparResponse'); }
function checkMentirasAnswer() { checkAnswer('mentiras', 'mentirasAnswer', 'mentirasResponse'); }

// =============================================
// ANIMAÇÕES E EFEITOS
// =============================================

function iniciarAnimacao() {
    const overlay = document.getElementById("animationOverlay");
    if (!overlay) return;

    overlay.style.display = "flex";
    overlay.innerHTML = "<p>Absorvendo conhecimento...</p>";
    overlay.style.animation = "fadeIn 0.5s";

    setTimeout(() => {
        overlay.innerHTML = "<p>Ritual aprendido!</p>";
        setTimeout(() => {
            overlay.style.animation = "fadeOut 1s";
            setTimeout(() => {
                try {
                    window.close();
                } catch {
                    alert("Feche a aba manualmente para completar o ritual.");
                }
            }, 1000);
        }, 2000);
    }, 3000);
}

function finalAnimation() {
    const overlay = document.getElementById("animationOverlay");
    if (!overlay) return;

    overlay.style.display = "flex";
    overlay.innerHTML = "<p>Absorvendo conhecimento...</p>";
    overlay.style.background = "radial-gradient(circle, rgba(0,255,0,0.7), rgba(0,0,0,0.9))";

    setTimeout(() => {
        overlay.style.background = "black";
        overlay.innerHTML = `
            <p style="color: red; font-size: 2rem; animation: pulsar 2s infinite;">
                Esconder dos Olhos
            </p>
        `;
    }, 3000);
}

// =============================================
// DEBUG (REMOVA EM PRODUÇÃO)
// =============================================
console.log("Script carregado com sucesso!");

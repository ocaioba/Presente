const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const container = document.querySelector(".container");

let moveCount = 0;
let lastX = 0;
let lastY = 0;

// Função para mover o botão
function moveButton() {
    const containerRect = container.getBoundingClientRect();
    const noButtonRect = noButton.getBoundingClientRect();
    
    // Ajuste para mobile - menor distância mínima
    const minDistance = window.innerWidth < 480 ? 100 : 150;
    
    const minX = 0;
    const maxX = containerRect.width - noButtonRect.width;
    const minY = 0;
    const maxY = containerRect.height - noButtonRect.height;

    let newX, newY, distance;
    
    // Tentar no máximo 10 vezes para encontrar uma posição válida
    let attempts = 0;
    do {
        newX = Math.random() * (maxX - minX) + minX;
        newY = Math.random() * (maxY - minY) + minY;
        distance = Math.sqrt(Math.pow(newX - lastX, 2) + Math.pow(newY - lastY, 2));
        attempts++;
    } while (distance < minDistance && attempts < 10);

    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
    noButton.style.position = 'absolute';

    lastX = newX;
    lastY = newY;
    moveCount++;

    handleSpecialActions();
}

// Eventos para desktop (hover)
noButton.addEventListener("mouseenter", moveButton);

// Eventos para mobile (touch/clique)
noButton.addEventListener("click", function(e) {
    // Previne que o clique dispare outros eventos
    e.preventDefault();
    e.stopPropagation();
    moveButton();
});

noButton.addEventListener("touchstart", function(e) {
    // Previne o scroll e outros eventos de touch
    e.preventDefault();
    e.stopPropagation();
    moveButton();
}, {passive: false});

function handleSpecialActions() {
    if (moveCount === 10) {
        showPopupPage("🤔🤔🤔", `<h1 style="font-size: clamp(1.5rem, 6vw, 3rem); color: #ff5252;">Você tá tentando muito clicar no botão de NÃO em... rapaiz ta certo isso??🤔🤔🤔</h1>`);
    }

    if (moveCount === 20) {
        showPopupPage("👎👎👎", `
            <div class="question-container">
                <h1 style="font-size: clamp(1.2rem, 4vw, 2rem); color: #f44336; text-align: center;">Não é possivel...me ajuda ai ana 😿, de 0 a 10, qual é a nossa chance de ficar juntos?</h1>
                <div class="input-container">
                    <input type="number" id="chanceInput" min="0" max="10" placeholder="Digite a sua resposta" style="padding: 12px; font-size: 1rem; margin-right: 10px; border-radius: 5px; border: 1px solid #ccc; width: 60%; max-width: 200px;" />
                    <button onclick="submitAnswer()" style="padding: 12px 20px; font-size: 1rem; cursor: pointer; border-radius: 5px; background-color: #4caf50; color: white; border: none;">Enviar</button>
                </div>
            </div>
            <script>
                function submitAnswer() {
                    const input = document.getElementById("chanceInput");
                    const value = input.value;
                    if (value >= 0 && value < 10) {
                        alert("QUE??? Muito pouco!!!! tem que ser 10! Resposta errada gatinha 👎😭 ");
                    } else if (value == 10) {
                        alert("SUCESSO!!! 😍😍😍😍😍");
                    } else {
                        alert("Sem trapacear Ana, digita um valor entre 0 e 10.");
                    }
                }
            </script>
        `);
    }
}

function showPopupPage(title, content) {
    const popup = window.open("", "_blank", "width=600,height=400");
    popup.document.write(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title}</title>
            <style>
                body {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    font-family: Courier New;
                    background-color: #fcfcf6;
                    padding: 20px;
                    box-sizing: border-box;
                }
                .question-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    width: 100%;
                }
                .input-container {
                    margin-top: 20px;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 10px;
                    width: 100%;
                }
                button {
                    padding: 12px 24px;
                    font-size: 1rem;
                    cursor: pointer;
                    border-radius: 5px;
                    background-color: #4caf50;
                    color: white;
                    border: none;
                    transition: background-color 0.3s;
                }
                button:hover {
                    background-color: #45a049;
                }
            </style>
        </head>
        <body>
            ${content}
        </body>
        </html>
    `);

    if (moveCount === 10) {
        setTimeout(() => {
            popup.close();
        }, 3000);
    }
}

// Adiciona o evento de clique ao botão "SIM"
yesButton.addEventListener("click", () => {
    showPopupPage("Ótima escolha 😍", `<h1 style="font-size: clamp(1.5rem, 6vw, 3rem); color: #4caf50; font-weight: bold;">Ai sim Ana! ❤️❤️😍😍😘😘😂😂</h1>`);
});
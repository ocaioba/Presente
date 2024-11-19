const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const container = document.querySelector(".container");

let moveCount = 0;  // Contador de movimentos
let lastX = 0; // Posição X anterior
let lastY = 0; // Posição Y anterior

noButton.addEventListener("mouseenter", () => {
    // Obtém as dimensões do contêiner e do botão "NÃO"
    const containerRect = container.getBoundingClientRect();
    const noButtonRect = noButton.getBoundingClientRect();

    // Definir limites para o movimento
    const minX = 0;
    const maxX = containerRect.width - noButtonRect.width;
    const minY = 0;
    const maxY = containerRect.height - noButtonRect.height;

    // Gera uma nova posição aleatória
    let newX = Math.random() * (maxX - minX) + minX;
    let newY = Math.random() * (maxY - minY) + minY;

    // Certifique-se de que a nova posição está pelo menos 50px distante da posição anterior
    const minDistance = 150; // Distância mínima de movimento
    let distance = Math.sqrt(Math.pow(newX - lastX, 2) + Math.pow(newY - lastY, 2));

    // Enquanto a nova posição não estiver suficientemente distante, gera uma nova posição
    while (distance < minDistance) {
        newX = Math.random() * (maxX - minX) + minX;
        newY = Math.random() * (maxY - minY) + minY;
        distance = Math.sqrt(Math.pow(newX - lastX, 2) + Math.pow(newY - lastY, 2));
    }

    // Move o botão "NÃO" para a nova posição
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;

    // Atualiza a última posição do botão "NÃO"
    lastX = newX;
    lastY = newY;

    // Incrementa o contador de movimentos
    moveCount++;

    // Quando o botão "NÃO" se mover 10 vezes, abre a primeira página
    if (moveCount === 10) {
        const page1 = window.open("", "_blank");
        page1.document.write(`
            <!DOCTYPE html>
            <html lang="pt-BR">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>🤔🤔🤔</title>
                <style>
                    body {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        margin: 0;
                        font-family: Courier New;
                        background-color: #fcfcf6;
                    }
                    h1 {
                        font-size: 3rem;
                        color: #ff5252;
                    }
                </style>
            </head>
            <body>
                <h1>Você tá tentando muito clicar no botão de NÃO em... rapaiz ta certo isso??🤔🤔🤔</h1>
            </body>
            </html>
        `);

        // Fecha a janela após 3 segundos
        setTimeout(() => {
            page1.close();
        }, 3000);
    }

    // Quando o botão "NÃO" se mover 20 vezes, abre a segunda página com a pergunta e a barra de digitação
    if (moveCount === 20) {
        const page2 = window.open("", "_blank");
        page2.document.write(`
            <!DOCTYPE html>
            <html lang="pt-BR">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>👎👎👎</title>
                <style>
                    body {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        margin: 0;
                        font-family: Courier New;
                        background-color: #fcfcf6;
                    }
                    h1 {
                        font-size: 2rem;
                        color: #f44336;
                        text-align: center;
                    }
                    .question-container {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        text-align: center;
                    }
                    .input-container {
                        margin-top: 20px;
                    }
                    input {
                        padding: 10px;
                        font-size: 1rem;
                        margin-right: 10px;
                        border-radius: 5px;
                        border: 1px solid #ccc;
                    }
                    button {
                        padding: 10px 20px;
                        font-size: 1rem;
                        cursor: pointer;
                        border-radius: 5px;
                        background-color: #4caf50;
                        color: white;
                        border: none;
                    }
                    button:hover {
                        background-color: #45a049;
                    }
                </style>
            </head>
            <body>
                <div class="question-container">
                    <h1>Não é possivel...Então vamos lá de 0 a 10, qual é a nossa chance de ficar juntos?</h1>
                    <div class="input-container">
                        <input type="number" id="chanceInput" min="0" max="10" placeholder="Digite a sua resposta" />
                        <button onclick="submitAnswer()">Enviar</button>
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
                            alert("Sem trapacear Helena, digita um valor entre 0 e 10.");
                        }
                    }
                </script>
            </body>
            </html>
        `);
    }
});

// Adiciona o evento de clique ao botão "SIM"
yesButton.addEventListener("click", () => {
    // Abre uma nova janela (ou aba) com a URL em branco
    const newWindow = window.open("", "_blank");

    // Define o conteúdo da nova página
    newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Ótima escolha 😍</title>
            <style>
                body {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    font-family: Courier New;
                    background-color: #fcfcf6;
                }
                h1 {
                    font-size: 3rem;
                    color: #4caf50;
                    font-weight: bold;
                }
            </style>
        </head>
        <body>
            <h1>Ai sim Helena! ❤️❤️😍😍😘😘😂😂</h1>
        </body>
        </html>
    `);
});

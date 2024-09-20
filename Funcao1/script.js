const alturaInput = document.getElementById("inputAltura");
const pesoInput = document.getElementById("inputPeso");
const botao = document.getElementById("calcularBotao");

function calcularIMC() {
    const altura = parseFloat(alturaInput.value);
    const peso = parseFloat(pesoInput.value);

    // Verifica se os valores são válidos
    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        mostrarClassificacao(0, "Por favor, insira valores válidos.");
        return;
    }

    // Corrigindo a fórmula do IMC
    const imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 16) {
        classificacao = "Baixo peso muito grave";
    } else if (imc >= 16 && imc < 17) {
        classificacao = "Baixo peso grave";
    } else if (imc >= 17 && imc < 18.5) {
        classificacao = "Baixo peso";
    } else if (imc >= 18.5 && imc < 25) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        classificacao = "Obesidade grau I";
    } else if (imc >= 35 && imc < 40) {
        classificacao = "Obesidade grau II";
    } else {
        classificacao = "Obesidade grau III";
    }

    mostrarClassificacao(imc, classificacao);
}

function mostrarClassificacao(imc, classificacao) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<p><strong>IMC:</strong> ${imc.toFixed(2)}</p>
                              <p><strong>Classificação:</strong> ${classificacao}</p>`;
    resultadoDiv.style.display = 'block'; // Torna o resultado visível
}

// Adiciona o evento de clique ao botão
botao.addEventListener('click', calcularIMC);

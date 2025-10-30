// Função para validar entradas
function validarEntradas(alturaCm, peso) {
    if (isNaN(alturaCm) || isNaN(peso) || alturaCm <= 0 || peso <= 0) {
        alert("Por favor, insira valores válidos para altura e peso.");
        return false; 
    }
    return true; 
}

// Função para calcular e exibir o IMC
function calcularIMC() {
    // Obter os valores dos campos do formulário
    const nome = document.getElementById("name").value.trim();
    const alturaCm = parseFloat(document.getElementById("altura").value.trim());
    const peso = parseFloat(document.getElementById("peso").value.trim());

    // Verificar se os campos estão preenchidos
    if (nome === "" || isNaN(alturaCm) || isNaN(peso)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    // Validar as entradas
    if (!validarEntradas(alturaCm, peso)) {
        return; // Se a validação falhar, não continua
    }

    // Converter altura de centímetros para metros
    const alturaM = alturaCm / 100;

    // Calcular o IMC
    const imc = peso / (alturaM * alturaM);
    
    // Determinar a classificação com base no IMC
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

    // Exibir os resultados
    const resultadoDiv = document.getElementById("resultado");
    if (resultadoDiv) {
        resultadoDiv.innerHTML = `<p><strong>Nome:</strong> ${nome}</p>
                                  <p><strong>IMC:</strong> ${imc.toFixed(2)}</p>
                                  <p><strong>Classificação:</strong> ${classificacao}</p>`;
        resultadoDiv.classList.add('visible'); // Torna o resultado visível
    } else {
        console.error("A div de resultado não foi encontrada.");
    }
}

// Adicionar o evento de clique ao botão
document.getElementById('button').addEventListener('click', calcularIMC);

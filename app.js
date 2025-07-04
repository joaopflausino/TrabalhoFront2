// Variáveis globais para o Exemplo 1
function exemplo1() {
  alert("Bem-vindo ao somador de números!");

  let continuar = true;
  let soma = 0;
  let quantidade = 0;

  while (continuar) {
    let numero = parseFloat(
      prompt("Digite um número para somar (ou deixe em branco para finalizar):")
    );

    if (isNaN(numero)) {
      continuar = false;
    } else {
      soma += numero;
      quantidade++;
    }
  }

  if (quantidade > 0) {
    alert(
      `Você somou ${quantidade} número(s).\nTotal: ${soma}\nMédia: ${(
        soma / quantidade
      ).toFixed(2)}`
    );
  } else {
    alert("Nenhum número foi informado para soma.");
  }
}
// Exemplo 2 - Jogo de Cálculo de Média
function exemplo2() {
  alert("Bem-vindo ao Jogo da Média!");

  let quantidade = prompt("Quantos números você quer digitar?");
  quantidade = Number(quantidade);

  if (
    quantidade <= 0 ||
    quantidade === null ||
    quantidade === "" ||
    typeof quantidade !== "number"
  ) {
    alert("Quantidade inválida. Tente novamente com um número maior que zero.");
  } else {
    let soma = 0;

    for (let i = 1; i <= quantidade; i++) {
      let entrada = prompt(`Digite o ${i}º número:`);
      let numero = Number(entrada);

      if (entrada.trim() === "" || entrada === null || isNaN(numero)) {
        alert("Valor inválido. Digite um número.");
        i--; // repetir a rodada
        continue;
      }

      soma += numero;
    }

    let media = soma / quantidade;

    // Aqui está o uso correto da template string com crase:
    alert(
      `A média calculada entre os ${quantidade} números digitados é: ${media.toFixed(
        2
      )}`
    );
  }
}

// Event listener do formulário - Exemplo 3
function exemplo3() {
  alert("Seja bem-vindo ao jogo do número secreto!");

  let numeroSecreto = Math.floor(Math.random() * 10) + 1;
  console.log("Número secreto (para testes):", numeroSecreto);

  let chute;
  let tentativas = 0;

  while (chute != numeroSecreto) {
    let userInput = prompt("Escolha um número entre 1 e 10");
    
    if (userInput === null) {
        alert("Jogo cancelado. Até a próxima!");
        break;
    }

    chute = parseInt(userInput, 10);

    if (chute < 1 || chute > 10) {
      alert("Por favor, insira um número válido entre 1 e 10.");
      continue;
    }

    tentativas++;

    if (chute == numeroSecreto) {
      alert(
        `Parabéns! Você acertou o número secreto ${numeroSecreto} em ${tentativas} tentativa(s).`
      );
    } else if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}. Tente novamente.`);
    } else {
      alert(`O número secreto é maior que ${chute}. Tente novamente.`);
    }
  }
}

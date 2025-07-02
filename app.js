// Variáveis globais
let frutas = [];

// Exemplo 1 - Jogo do Número Secreto com Alert
function atualizarLista() {
  document.getElementById('listaFrutas').textContent = JSON.stringify(frutas);
}

function adicionarFruta() {
  const input = document.getElementById('frutaInput');
  const valor = input.value.trim();

  if (valor) {
    frutas.push(valor);
    input.value = "";
    atualizarLista();
  }
}

function metodo(acao) {
  if (acao === 'push') {
    const fruta = prompt("Digite uma fruta para adicionar no final:");
    if (fruta) frutas.push(fruta);
  } else if (acao === 'pop') {
    frutas.pop();
  } else if (acao === 'shift') {
    frutas.shift();
  } else if (acao === 'unshift') {
    const fruta = prompt("Digite uma fruta para adicionar no início:");
    if (fruta) frutas.unshift(fruta);
  }
  atualizarLista();
}

function verificarBanana() {
  const resultado = frutas.includes('banana')
    ? "🍌 Banana está no array!"
    : "🚫 Banana NÃO está no array.";
  document.getElementById('saida').textContent = resultado;
}

function mostrarIndex(fruta) {
  const index = frutas.indexOf(fruta);
  const resultado = index !== -1
    ? `A fruta '${fruta}' está na posição ${index}.`
    : `'${fruta}' não foi encontrada.`;
  document.getElementById('saida').textContent = resultado;
}

function mostrarJoin() {
  const resultado = "join(', '): " + frutas.join(', ');
  document.getElementById('saida').textContent = resultado;
}

function mostrarSlice() {
  const fatiado = frutas.slice(1, 3);
  document.getElementById('saida').textContent = "slice(1, 3): " + JSON.stringify(fatiado);
}

function fazerSplice() {
  frutas.splice(1, 1);
  atualizarLista();
  document.getElementById('saida').textContent = "splice(1, 1) aplicado.";
}

function mapMaiusculas() {
  const maiusculas = frutas.map(f => f.toUpperCase());
  document.getElementById('saida').textContent = "map (toUpperCase): " + JSON.stringify(maiusculas);
}

function filtrarGrandes() {
  const grandes = frutas.filter(f => f.length > 4);
  document.getElementById('saida').textContent = "filter (length > 4): " + JSON.stringify(grandes);
}
function exemplo1() {
    mostrarResultado('Exemplo 1 - Jogo do Número Secreto', 
                   '<p>Iniciando o jogo do número secreto com alerts...</p>');
    
    // Implementação do jogo
    setTimeout(() => {
        alert('Seja bem-vindo ao jogo do Número Secreto!');
        
        // Gera número aleatório entre 1 e 10
        let numeroSecreto = Math.floor(Math.random() * 10) + 1;
        let chute;
        let tentativas = 0;
        
        while (chute != numeroSecreto) {
            chute = parseInt(prompt('Escolha um número entre 1 e 10'));
            tentativas++;
            
            if (isNaN(chute)) {
                alert('Por favor, digite um número válido!');
                tentativas--;
                continue;
            }
            
            if (chute == numeroSecreto) {
                alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} em ${tentativas} tentativa(s)!`);
                document.getElementById('conteudo-resultado').innerHTML += 
                    `<p><strong>Jogo finalizado!</strong><br>
                     Número secreto: ${numeroSecreto}<br>
                     Total de tentativas: ${tentativas}</p>`;
            } else if (chute > numeroSecreto) {
                alert(`O número secreto é menor que ${chute}. Tente novamente.`);
            } else {
                alert(`O número secreto é maior que ${chute}. Tente novamente.`);
            }
        }
    }, 100);
}

// Exemplo 2 - Jogo de Cálculo de Média
function exemplo2() {
    mostrarResultado('Exemplo 2 - Cálculo de Média', 
                   '<p>Iniciando o cálculo de média...</p>');
    
    setTimeout(() => {
        alert("Bem-vindo ao Jogo da Média!");
        
        let quantidade = prompt("Quantos números você quer digitar?");
        quantidade = Number(quantidade);
        
        if (quantidade <= 0 || isNaN(quantidade)) {
            alert("Quantidade inválida. Tente novamente com um número maior que zero.");
            document.getElementById('conteudo-resultado').innerHTML += 
                '<p style="color: red;">Erro: Quantidade inválida!</p>';
            return;
        }
        
        let soma = 0;
        let numeros = [];
        
        for (let i = 1; i <= quantidade; i++) {
            let entrada = prompt(`Digite o ${i}º número:`);
            let numero = Number(entrada);
            
            if (isNaN(numero)) {
                alert("Valor inválido. Digite um número.");
                i--;
                continue;
            }
            
            soma += numero;
            numeros.push(numero);
        }
        
        let media = soma / quantidade;
        
        alert(`A média calculada entre os ${quantidade} números digitados é: ${media.toFixed(2)}`);
        
        document.getElementById('conteudo-resultado').innerHTML += 
            `<p><strong>Resultado do cálculo:</strong><br>
             Números digitados: ${numeros.join(', ')}<br>
             Soma total: ${soma}<br>
             Média: ${media.toFixed(2)}</p>`;
    }, 100);
}

// Exemplo 3 - Manipulação de Listas de Frutas
function exemplo3() {
    mostrarResultado('Exemplo 3 - Manipulação de Arrays com Frutas', '');
    
    let html = `
        <div class="lista-container">
            <h3>Manipulando Frutas</h3>
            
            <div class="lista-input">
                <input type="text" id="frutaInput" placeholder="Digite uma fruta">
                <button onclick="adicionarFruta()">Adicionar</button>
            </div>
            
            <h3>Frutas:</h3>
            <div class="lista-display" id="listaFrutas">[ ]</div>
            
            <h3>Métodos de Array:</h3>
            <div class="lista-acoes">
                <button onclick="metodo('push')">Push (Adicionar ao final)</button>
                <button onclick="metodo('pop')">Pop (Remover do final)</button>
                <button onclick="metodo('shift')">Shift (Remover do início)</button>
                <button onclick="metodo('unshift')">Unshift (Adicionar ao início)</button>
                <button onclick="verificarBanana()">Includes('banana')</button>
                <button onclick="mostrarIndex('uva')">IndexOf('uva')</button>
                <button onclick="mostrarJoin()">Join(', ')</button>
                <button onclick="mostrarSlice()">Slice(1, 3)</button>
                <button onclick="fazerSplice()">Splice(1, 1)</button>
                <button onclick="mapMaiusculas()">Map (MAIÚSCULAS)</button>
                <button onclick="filtrarGrandes()">Filter (nome > 4 letras)</button>
            </div>
            
            <pre id="saida" style="margin-top: 15px; padding: 10px; background: #fff3cd; border-radius: 5px; min-height: 50px;"></pre>
        </div>
    `;
    
    document.getElementById('conteudo-resultado').innerHTML = html;
    frutas = []; // Reinicia o array de frutas
    atualizarLista();
}

// Função auxiliar para mostrar área de resultado
function mostrarResultado(titulo, conteudo) {
    const resultado = document.getElementById('resultado');
    const tituloResultado = document.getElementById('titulo-resultado');
    const conteudoResultado = document.getElementById('conteudo-resultado');
    
    resultado.classList.add('ativo');
    tituloResultado.textContent = titulo;
    conteudoResultado.innerHTML = conteudo;
}
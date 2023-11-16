document.addEventListener('DOMContentLoaded', function () {
    const tabuleiro = document.getElementById('game-board');
    const celulas = document.querySelectorAll('.cell');
    const jogadorTurnoElement = document.getElementById('player-turn');
    const statusElement = document.getElementById('game-status');
    const restartButton = document.getElementById('restart-button');
    const scoreElement = document.getElementById('score');
  
    let jogadorAtual = 'X';
    let estadoTabuleiro = ['', '', '', '', '', '', '', '', ''];
    let jogoAtivo = true;
    let placarX = 0;
    let placarO = 0;
    let empates = 0;
  
    atualizarTurno();
  
    celulas.forEach(celula => {
      celula.addEventListener('click', handleClick);
    });
  
    restartButton.addEventListener('click', reiniciarJogo);
  
    function handleClick() {
      const indice = this.dataset.index;
  
      if (estadoTabuleiro[indice] === '' && jogoAtivo) {
        estadoTabuleiro[indice] = jogadorAtual;
        this.textContent = jogadorAtual;
        checkWinner();
        jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
        atualizarTurno();
      }
    }
  
    function checkWinner() {
      const padroesVitoria = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
      ];
  
      for (let padrao of padroesVitoria) {
        const [a, b, c] = padrao;
        if (estadoTabuleiro[a] && estadoTabuleiro[a] === estadoTabuleiro[b] && estadoTabuleiro[a] === estadoTabuleiro[c]) {
          alert(`O jogador ${estadoTabuleiro[a]} venceu!`);
          jogoAtivo = false;
          atualizarStatus(`Vitória do jogador ${estadoTabuleiro[a]}!`);
          atualizarPlacar(estadoTabuleiro[a]);
          break;
        }
      }
  
      if (!estadoTabuleiro.includes('') && jogoAtivo) {
        alert('Deu velha!');
        jogoAtivo = false;
        atualizarStatus('Empate!');
        atualizarPlacar();
      }
    }
  
    function atualizarTurno() {
      jogadorTurnoElement.textContent = `Vez do jogador: ${jogadorAtual}`;
    }
  
    function atualizarStatus(status) {
      statusElement.textContent = status;
    }
  
    function atualizarPlacar(vencedor) {
      if (vencedor === 'X') {
        placarX++;
      } else if (vencedor === 'O') {
        placarO++;
      } else {
        empates++;
      }
      scoreElement.textContent = `Placar: Jogador "X" ${placarX} VS Jogador "O" ${placarO} - Empates: ${empates}`;
    }
  
    function reiniciarJogo() {
      celulas.forEach(celula => {
        celula.textContent = '';
      });
  
      jogadorAtual = 'X';
      estadoTabuleiro = ['', '', '', '', '', '', '', '', ''];
      jogoAtivo = true;
      atualizarTurno();
      atualizarStatus('');
    }
  });
  
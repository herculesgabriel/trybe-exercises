const peao =
  'O peão é peça mais numerosa e menos poderosa no tabuleiro de xadrez. Peões são diferentes no seu movimento. De maneira geral, os peões se movem somente para frente, uma casa por vez. Um exceção é a primeira vez que um peão é movido, quando ele pode se mover duas casas. O peão não pode pular outras peças. Qualquer peça exatamente a frente de um peão bloqueia seu avanço para esta casa. O peão é a única peça que não pode mover-se para trás. O peão é também a única peça que não captura da mesma maneira que se move. Os peões capturam a peça adversária movendo-se diagonalmente uma casa - ele não pode capturar movendo-se para frente. Na figura abaixo, o peão de baixo ainda está em sua casa original, assim ele pode mover-se uma ou duas casas para frente (indicadas pelo X verde). Ele pode capturar movendo-se para direita ou esquerda em uma diagonal, mas apenas se a referida casa estiver ocupada por uma peça adversária (indicada pelo X vermelho). Caso contrário, ele não pode se mover na diagonal. O peão de cima já se moveu de sua casa original. Ele pode mover-se somente uma casa para frente. Do mesmo modo, ele pode capturar movendo-se para esquerda ou direita diagonalmente se a casa conter uma peça adversária. O peão também está envolvido em dois movimentos especiais. O primeiro é a captura en passant onde um peão é capturado em seu movimento inicial de duas casas. O segundo é a promoção de peão onde um peão é promovido para outra peça quando ele atinge o final do tabuleiro.';
const bispo =
  'O bispo se move em uma linha reta diagonalmente no tabuleiro. Ele pode mover-se por tantas casas quantas quiser, até encontrar o final do tabuleiro ou outra peça. O bispo não pode pular outras peças. O bispo captura no mesmo caminho em que ele se move, parando na casa da peça adversária. Devido à maneira como os bispos se movem, ele sempre permanece em casas da cor em que ele iniciou. Cada jogador começa com dois bispos, um nas casas pretas e outro nas brancas. Eles são frequentemente chamados de bispo da “casa preta” e bispo da “casa branca”. Os bispos podem também ser chamados de acordo com o lado em que eles iniciam o jogo - bispo do rei e bispo da rainha.';
const torre =
  'A torre se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas, até atingir o final do tabuleiro ou ser bloqueado por outra peça. Ele não pode pular outras peças. A torre captura no mesmo caminho em que se move, ocupando a casa onde se encontra a peça adversária. A torre pode parar em qualquer casa do tabuleiro, sendo por isso uma das peças mais poderosas. A torre está também envolvida em um movimento especial. Ele é o movimento de roque onde uma torre e o rei são agrupados em uma posição defensiva.';
const cavalo =
  'O cavalo é a peça mais especial no xadrez, possuindo uma flexibilidade que o torna poderoso. O cavalo é a única peça do tabuleiro que pode pular sobre outras peças. O cavalo move-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto. O movimento do cavalo forma um “L”. O cavalo sempre termina seu movimento em uma casa de cor oposta à inicial. O cavalo pode pular sobre peças de qualquer cor enquanto vai para sua casa de destino, mas ele não captura nenhuma das peças que pula. O cavalo captura quando termina seu movimento na casa de uma peça adversária. O cavalo não pode terminar seu movimento em uma casa ocupada por uma peça da mesma cor. Uma vez que o movimento do cavalo não é em linha reta, ele pode atacar uma rainha, bispo ou torre sem ser atacado reciprocamente por esta peça.';
const rainha =
  'A rainha é considerada a peça mais poderosa do tabuleiro. Ela pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente. A rainha se move como a torre e o bispo combinados. A menos que esteja realizando uma captura, o movimento deve terminar em uma casa desocupada e ela não pode pular outras peças. A rainha captura no mesmo caminho em que se move, ocupando a casa da peça adversária.';
const rei =
  'O rei é a peça mais importante do xadrez. Se o rei for encurralado de modo que sua captura seja inevitável, o jogo termina e o este jogador perde. O rei tem pouca mobilidade, assim ele é considerado também uma das peças mais fracas no jogo. O rei pode se mover para qualquer casa adjacente. Assim, ele pode mover-se uma casa em qualquer direção: horizontalmente, verticalmente ou diagonalmente. Ele não pode se mover para uma casa ocupada por uma peça da mesma cor. O rei captura outra peça da mesma maneira que se move, ocupando a casa da peça adversária. Existe um limite adicional ao movimento do rei. O rei não pode se mover para uma casa que o coloque sob ataque de uma peça adversária (chamado em “cheque”). Como result desta limitação, dois reis nunca poderão estar ao lado um do outro - uma vez que mover-se para o lado do outro rei o colocaria em cheque. O rei pode também ser forçado a mover-se ou capturar se estiver sob ataque (“cheque”) e a única maneira de interromper o ataque for mover o rei.';

function whatItDoes(chessPiece) {

  let title_result = '';
  let text_result = '';

  const piece = chessPiece.toLowerCase();

  switch (piece) {
    case 'peão':
      titulo_result = 'Peão';
      texto_result = peao;
      break;
    case 'bispo':
      titulo_result = 'Bispo';
      texto_result = bispo;
      break;
    case 'torre':
      titulo_result = 'Torre';
      texto_result = torre;
      break;
    case 'cavalo':
      titulo_result = 'Cavalo';
      texto_result = cavalo;
      break;
    case 'rainha':
      titulo_result = 'Rainha';
      texto_result = rainha;
      break;
    case 'rei':
      titulo_result = 'Rei';
      texto_result = rei;
      break;
    default:
      titulo_result = 'Nenhuma peça encontrada. Favor digitar o nome corretamente.';
      texto_result = null;
      break;
  }

  return `${title_result}: ${text_result}`;
}
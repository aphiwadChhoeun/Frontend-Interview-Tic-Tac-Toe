import { ref } from 'vue';

interface DataType {
  map: Array<Array<null | string>>;
}

export function useCheckGame(data: DataType) {
  const winner = ref<null | string>(null);
  const gameOver = ref(false);

  const checkGameOver = () => {
    for (let i = 0; i < 3; i++) {
      let checkRow = '';
      let checkCol = '';
      let checkDiagonal1 = '';
      let checkDiagonal2 = '';

      for (let j = 0; j < 3; j++) {
        checkRow += data.map[i][j];
        checkCol += data.map[j][i];
        checkDiagonal1 += data.map[j][j];
        checkDiagonal2 += data.map[j][2 - j];
      }
      if (checkRow === 'XXX' || checkRow === 'OOO') {
        gameOver.value = true;
        winner.value = checkRow.charAt(0);
        return;
      }
      if (checkCol === 'XXX' || checkCol === 'OOO') {
        gameOver.value = true;
        winner.value = checkCol.charAt(0);
        return;
      }
      if (checkDiagonal1 === 'XXX' || checkDiagonal1 === 'OOO') {
        gameOver.value = true;
        winner.value = checkDiagonal1.charAt(0);
        return;
      }
      if (checkDiagonal2 === 'XXX' || checkDiagonal2 === 'OOO') {
        gameOver.value = true;
        winner.value = checkDiagonal2.charAt(0);
        return;
      }
    }

    let filledCell = data.map.flat().filter((cell) => !!cell);
    if (filledCell.length >= 9) {
      gameOver.value = true;
      winner.value = 'Draw';
      return;
    }

    gameOver.value = false;
    return;
  };

  const resetGame = () => {
    data.map = [Array(3).fill(null), Array(3).fill(null), Array(3).fill(null)];
    winner.value = null;
    gameOver.value = false;
  };

  return { winner, gameOver, checkGameOver, resetGame };
}

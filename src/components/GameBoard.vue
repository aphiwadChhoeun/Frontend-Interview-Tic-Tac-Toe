<script setup>
import Swal from 'sweetalert2';
import Cell from './Cell.vue';
import { reactive } from 'vue';
import { useTurn } from './useTurn';
import { useCheckGame } from './useCheckGame';

const data = reactive({
  map: [Array(3).fill(null), Array(3).fill(null), Array(3).fill(null)],
});
const { turn, switchTurn } = useTurn();
const { winner, gameOver, checkGameOver, resetGame } = useCheckGame(data);

const onClick = (rowIndex, cellIndex) => {
  // escape if game is over
  if (gameOver.value) return;

  // escape if cell already occupied
  if (data.map[rowIndex][cellIndex]) return;

  // plant play turn
  data.map[rowIndex][cellIndex] = turn.value;

  switchTurn();
  checkGameOver();

  if (winner.value) {
    const message =
      winner.value !== 'Draw' ? `Winner ${winner.value}!` : `Draw Game!`;
    Swal.fire(message).then((res) => {
      if (res.isConfirmed) {
        resetGame();
      }
    });
  }
};
</script>

<template>
  <div class="game_board">
    <div
      v-for="(row, rowIndex) in data.map"
      class="row"
      :key="`row_${rowIndex}`"
    >
      <Cell
        @click="onClick(rowIndex, cellIndex)"
        :cell="cell"
        v-for="(cell, cellIndex) in row"
        :key="`cell_${rowIndex}_${cellIndex}`"
      />
    </div>
  </div>
</template>

<style scoped>
.game_board {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

.row {
  display: flex;
  gap: 0.5em;
}
</style>

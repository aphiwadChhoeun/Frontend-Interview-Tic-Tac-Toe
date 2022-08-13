<script setup>
import { reactive } from 'vue';
import Cell from './Cell.vue';

const data = reactive({
  map: [Array(3).fill(null), Array(3).fill(null), Array(3).fill(null)],
});
</script>

<template>
  <div class="game_board">
    <div
      v-for="(row, rowIndex) in data.map"
      class="row"
      :key="`row_${rowIndex}`"
    >
      <Cell
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

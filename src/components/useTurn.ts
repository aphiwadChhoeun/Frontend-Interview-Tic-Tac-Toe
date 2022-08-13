import { ref } from 'vue';

export function useTurn() {
  let turn = ref('X');

  const switchTurn = () => {
    turn.value = turn.value === 'X' ? 'O' : 'X';
  };

  return { turn, switchTurn };
}

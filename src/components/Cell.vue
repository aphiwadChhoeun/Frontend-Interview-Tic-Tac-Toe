<script setup>
defineProps({
  cell: String,
});
</script>

<template>
  <div class="cell">{{ cell }}</div>
</template>

<style>
.cell {
  --size: 100px;
  --borderColor: #ddd;
  --backgroundColor: #fff;
  --color: #000;

  width: var(--size);
  height: var(--size);
  border: 1px solid var(--borderColor);
  background-color: var(--backgroundColor);
  color: var(--color);
  font-size: 5em;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

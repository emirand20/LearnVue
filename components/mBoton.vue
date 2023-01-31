<template>
  <button
    :style="{ backgroundColor: color }"
    @click="$emit('showConsole', text)"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: ["text", "color"],
};
</script>

<style>
</style>
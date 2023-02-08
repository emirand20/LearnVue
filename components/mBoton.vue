<template>
  <button :style="{ backgroundColor: color }">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: ["text", "color"],
};
</script>
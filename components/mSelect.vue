<template>
  <span>Selected: {{ selected }}</span>
  <br>
  <select v-model="selected" @input="$emit('cambio', $event.target.value)">
    <option v-for="index in options" :key="index.option">
      {{ index.text }}
    </option>
  </select>
  <!-- <pre v-for="index in options" :key="index.option">
  {{ index.text }}
  </pre> -->
</template>
<script>
export default {
  props: ["options"],
  data() {
    return {
      selected: "",
    };
  },
};
</script>

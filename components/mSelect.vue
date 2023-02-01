<template>
  <!--@click="$emit('showConsole', text)" -->
  <span v-for="index in options" :key="index.option">
    <div>Selected: {{ selected }}</div>
    <select v-model="selected">
      <option disabled value="">Elige una opcion</option>
      <option>{{ index.text }}</option>
    </select>
  </span>
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

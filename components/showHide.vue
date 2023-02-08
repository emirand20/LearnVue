<template>
  <div>
    <button @click="toggleText">show/hide</button>
    <p v-if="showText" v-text="text"></p>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      text: "El texto se muestra",
      showText: true,
    };
  },
  methods: {
    toggleText() {
      this.showText = !this.showText;
    },
  },
};
</script>
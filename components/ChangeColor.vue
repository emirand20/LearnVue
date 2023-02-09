<template>
  <div>
    <button @click="ChangeColor">Chane Color</button>
    <p :style="{ color: textColor }">Text</p>
  </div>
</template>
    
    <script>
export default {
  data() {
    return {
      textColor: "green",
    };
  },
  methods: {
    ChangeColor() {
      this.textColor === "green"
        ? (this.textColor = "red")
        : (this.textColor = "green");
    },
  },
};
</script>
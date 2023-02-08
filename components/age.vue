<template>
  <button @click="increaseAge">Aumenta Edad</button>
  <br />
  {{ age }}
</template>
  
<script>
export default {
  data() {
    return {
      age: 0,
    };
  },
  methods: {
    increaseAge() {
      this.age += 1
    },
  },
};
</script>
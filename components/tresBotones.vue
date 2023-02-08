<template>
    <button @click="increaseAge">increase</button>
    <button @click="decrease">decrease</button>
    <button @click="reset">reset</button>

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
      decrease() {
        this.age -= 1
      },
      reset() {
        this.age = 0
      },
    },
  };
  </script>
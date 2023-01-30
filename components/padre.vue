<template>
  <div class="body">
    <header>{{ title }}</header>
    <div>
      <p>{{ message }}</p>

      <input
        v-model="nueva"
        v-on:keypress.enter="addItem"
        placeholder="Agrega elementos a la lista"
      />
      <button @click="addItem">Agrega a la lista</button>
      <button @click="muestraElementosPapelera">
        Ver elementos de la papelera
      </button>
    </div>
    <Hijo ref="childComponent"></Hijo>
  </div>
</template>
  
<script>
// import hijo from './hijo.vue'

export default {
  data() {
    return {
      title: "To Do",
      message: "Crea una lista de tareas",
    };
  },
  // components: {
  //   hijo
  // },
  // methods: {
  //   addItemx () {
  //     this.$refs.hijo.addItem()
  //   }
  // }
};
</script>

<style scoped>
.body {
  padding: 2em;
  font-family: sans-serif;
  text-align: center;
}
header {
  display: block;
  border-radius: 8px 8px 0 0;
  background: #434c5e;
  padding: 10px;
  color: white;
  font-size: 1.5em;
}
</style>
<template>
  <h1>Botons</h1>
  <mBoton @click="add" text="añadir" color="red" />
  <mBoton @click="edit" text="editar" color="yellow" />
  <mBoton @click="destroy" text="eliminar" color="green" />
  <h1>Select</h1>
  <mSelect @cambio="cambio" :options="options" />
  <pre>{{ selected }}</pre>
</template>
<script>
export default {
  data() {
    return {
      selected: null,
      options: [
        { id: 1, text: "Opcion 1" },
        { id: 2, text: "Opcion 2" },
        { id: 3, text: "Opcion 3" },
        { id: 4, text: "Opcion 4" },
        { id: 5, text: "Opcion 5" },

      ],
    };
  },
  methods: {
    add() {
      console.log("añadir");
    },
    edit() {
      console.log("editar");
    },
    destroy() {
      console.log("eliminar");
    },
    cambio(selecionado) {
      this.selected = selecionado;
    },
  },
};
</script>
<template>
  <mBoton @click="add" text="añadir" color="red" />
  <mBoton @click="edit" text="editar" color="yellow" />
  <mBoton @click="destroy" text="eliminar" color="green" />

  <mSelect @cambio="cambio" :options="options" />
</template>
<script>
export default {
  data() {
    return {
      selected: null,
      options: [
        { id: 1, text: "aOpcion 1" },
        { id: 2, text: "bOpcion 2" },
      ],
    };
  },
  methods: {
    add() {
      console.log("añadir");
    },
    edit() {
      console.log("borrar");
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
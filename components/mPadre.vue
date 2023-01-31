<template>
  <mBoton
    @showConsole="showConsole"
    text="añadir"
    color="red"
  />
  <mBoton
    @showConsole="showConsole"
    text="editar"
    color="yellow"
  />
  <mBoton
    @showConsole="showConsole"
    text="eliminar"
    color="green"
  />
</template>
<script>
export default {
  methods: {
    showConsole(val) {
      console.log(val); 
    }
  },
};
</script>
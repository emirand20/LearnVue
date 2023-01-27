<template>
    <div>
        <h1>{{ saludo }}</h1>
        <button @click="accion">Acción</button>
    </div>
</template>
<script>
export default {
  props: ['name'],
  data() {
    return {
      // saludo: "Hola ",
    };
  },
  mounted(){

  },
  destroyed() {
    
  },
  computed:{
    saludo(){
      return 'hola ' + this.name
    }
  },
  watch:{

  },
  methods: {
    accion(){
      this.$emit("foo", 'Pedro')
    }
  },
};
</script>


<style scoped>
h1{
    color: red;
}

</style>
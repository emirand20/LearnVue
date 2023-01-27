<template>
  <div>
    <input type="text" v-model="nombre" />
    <Hijo :name="nombre" @foo="handleFoo"></Hijo>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nombre: "Juan",
    };
  },
  methods:{
    handleFoo(data){
        this.nombre = data
    }
  }
};
</script>
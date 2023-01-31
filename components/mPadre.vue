<template>
    <mBoton @click="consoleBoton" text="añadir" color="red"/>
    <mBoton @click="consoleBoton" text="editar" color="yellow"/>
    <mBoton @click="consoleBoton" text="eliminar" color="green"/>
</template>
<script>
export default {
    methods:{
        consoleBoton(){
            // console.log(this.$emit(this.text))
        }
    }
}
</script>
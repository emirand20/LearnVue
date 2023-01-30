<template>
  <ul>
    <li
      v-for="(item, index) in items"
      :key="index.item"
      v-bind:style="{ display: !item.deleted ? '' : 'none' }"
    >
      <input type="checkbox" v-model="item.checked" />
      <span :class="item.checked ? 'strikeout' : null">{{ item.text }}</span>
      <button @click="hideItem(item)">x</button>
    </li>
  </ul>
  <pre>{{ items }}</pre>
  <!-- <h1>{{ saludo }}</h1> -->
  <!-- <button @click="accion">Acción</button> -->
</template>
<script>
export default {
  // props: ["tarea", "nueva"],
  data() {
    return {
      items: [
        {
          text: "Tomates",
          checked: false,
          deleted: false,
        },
        {
          text: "Judias",
          checked: false,
          deleted: false,
        },
        {
          text: "Manzanas",
          checked: false,
          deleted: false,
        },
      ],
    };
  },
  computed: {
    saludo() {
      return this.tarea;
    },
  },
  mounted:{
  },
  methods: {
    // accion() {
      addItem() {
        if (!this.nueva) {
          alert("añade tarea");
        } else {
          this.items.push({
            text: this.nueva,
            checked: false,
            deleted: false,
          });
        }
        this.nueva = "";
      },
    //   this.$emit("foo", "Pedro");
    // },


    hideItem(item) {
      item.deleted = true;
    },

    muestraElementosPapelera() {
      this.items.forEach((element) => {
        if (element.deleted == true) {
          element.deleted = false;
        }
      });
    },
  },
};
</script>
<style scoped>
ul span.strikeout {
  text-decoration: line-through;
}
</style>
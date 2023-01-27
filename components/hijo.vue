<template>
  <div>
    <li>
      <input type="checkbox" v-model="item.checked" />
      <span :class="item.checked ? 'strikeout' : null">{{ item.text }}</span>
      <button @click="hideItem(item)">x</button>
    </li>
    <h1>{{ saludo }}</h1>
    <!-- <button @click="accion">Acción</button> -->
  </div>
</template>
<script>
export default {
  props: ["tarea", "nueva"],
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
  methods: {
    // accion() {
    //   this.$emit("foo", "Pedro");
    // },

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
    },

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
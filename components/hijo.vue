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
</template>

<script>
export default {
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
    addItem(nueva) {
      if (!nueva) {
        alert("añade tarea");
      } else {
        this.items.push({
          text: nueva,
          checked: false,
          deleted: false,
        });
      }
      nueva = "";
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
<style scoped>
ul span.strikeout {
  text-decoration: line-through;
}
</style>
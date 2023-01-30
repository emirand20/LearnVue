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
      <ul>
        <li
          v-for="(item, index) in items"
          :key="index.item"
          v-bind:style="{ display: !item.deleted ? '' : 'none' }"
        >
          <input type="checkbox" v-model="item.checked" />
          <span :class="item.checked ? 'strikeout' : null">{{
            item.text
          }}</span>
          <button @click="hideItem(item)">x</button>
        </li>
      </ul>
      <pre>{{ items }}</pre>
    </div>

    <!-- <Hijo :tarea="nueva" @foo="handleFoo"></Hijo> -->
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      title: "To Do",
      message: "Crea una lista de tareas",
      nueva: "",
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
  methods: {
    // handleFoo(data) {
    //   this.nueva = data;
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
      this.nueva = ''
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
ul span.strikeout {
    text-decoration: line-through;
}
</style>
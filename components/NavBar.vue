<template>
    <nav>
      <ul>
        <li>
          <router-link to="/">Inicio</router-link>
        </li>
        <li>
          <router-link to="/acerca-de">Acerca de</router-link>
        </li>
        <li>
          <router-link to="/contacto">Contacto</router-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar',
  };
  </script>
  
  <style scoped>
  /* Estilos específicos para el componente NavBar */
  nav {
    background-color: #333;
    color: #fff;
    padding: 1rem;
  }
  
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
  }
  
  li {
    margin: 0 1rem;
  }
  
  a {
    color: #fff;
    text-decoration: none;
  }
  </style>
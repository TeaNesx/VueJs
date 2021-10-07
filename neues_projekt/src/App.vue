<template>
  <div id="app">
    Hallo {{name_first}}

    <NavigationLink url="google.de">
      <template v-slot:image>
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" height="20px" alt="">
      </template>
      Zum Profil
    </NavigationLink>

    <TodoList/>

    <button @click="testen">Test</button>

  </div>
</template>


<script>
import TodoList from "@/components/TodoList";
import NavigationLink from "@/components/NavigationLink.vue"

export default {
  name: 'App',

  data: () => ({
    name_first: 'Long',
  }),

  methods: {
    testen() {
      alert('Hi');
    },

    test() {
      alert('fs');
    },

  },

  //Stellt die Componente zu Verfügung
  components: {
    TodoList,
    NavigationLink
  },
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
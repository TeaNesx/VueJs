<template>
  <div id="app">
    Hallo {{name_first}}
    <TodoList/>
    <button @click="testen">Test</button>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
export default {
  name: 'App',
  data: () => ({
    name_first: 'Long',
  }),
  methods: {
    testen() {
      alert('Hi');
    }
  },

  //Stellt die Componente zu Verfügung
  components: {
    TodoList
  }
}
</script>

<style>
.finishedTask {
  text-decoration: line-through;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
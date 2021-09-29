<template>
  <div id="app">
    Hallo {{name_first}}

    <ul>
      <li v-for="todo, index in todos" :key="todo.id" :class="{'finishedTask': todo.finished}">
        <input type="checkbox" :checked="todo.finished"/>
        <a :href="'?id=' + todo.id">
          zeigen
        </a>

        {{++index}} {{todo.name}}
      </li>
    </ul>

    <button @click="testen">Test</button>

  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    name_first: 'Long',
    todos: [
      {id:1, finished: false,  name: 'Vue Js lernen'},
      {id:2, finished: true, name: 'Code Beispiele lernen'},
      {id:3, finished: false, name: 'Git Commit'},
      {id:4, finished: true, name: 'Ein weitered Todo'},
    ]
  }),
  methods: {
    testen() {
      alert('Hi');
    }
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
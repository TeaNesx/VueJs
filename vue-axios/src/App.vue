<template>
  <div id="app">
    <h1>
      Todo
    </h1>
    <div class="lds-dual-ring" v-if="loading"></div>
    <button v-else @click="loadTodos">
      Laden...
    </button>
    <hr>
    <ul>
      <li v-for="item in items" :key="item.id" :class="{'done':item.is_done}">
       {{item.id}}. {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    loading: false,
    items: []
  }),
  methods: {
    async loadTodos() {
      let apiUrl = 'http://fakeapi.andreaspabst.com/api/todos';

      try {
        let resopnse = await this.axios.get(apiUrl);
        this.items = resopnse.data;

        console.log(resopnse);
      } catch(e) {
        console.log(e);
      }
        this.loading = false
    }
  }
}
</script>

<style>

.done {
  color: green;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid black;
  border-color: #fff transparent black transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>

<template>
  <div id="app">
    {{name_first}}
    {{`${name_first} ${name_last} ${alter}`}}
    {{alter}}
    {{gender}}
    <hr>
    {{fullName}}
    <hr>
    {{alter > 18 ? 'volljährig':'nicht volljährig'}}
  </div>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    name_first: 'Long',
    name_last: 'Vu',
    alter: 17,
    gender: 'männlich'
  }),
  computed: {
    fullName() {
      return this.name_first + " " + this.name_last;
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

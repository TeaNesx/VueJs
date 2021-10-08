<template>
  <ul>
      <h2><slot>TodoList</slot></h2>
      <todo-list-item 
        v-for="item in elemente" 
        :key="item.id"
        :todo="item"
      ></todo-list-item>
  </ul>
</template>

<script>
import TodoListItem from './TodoListItem.vue'
export default {
  components: { TodoListItem },
  props: {
      elemente: Array
  }

}
</script>

<style>

</style>
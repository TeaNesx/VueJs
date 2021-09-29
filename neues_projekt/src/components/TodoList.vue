<template>
  <ul>
    <TodoListItem
        v-for="todo in todos" :key="todo.id"
        :item="todo"
    />
  </ul>
</template>

<script>
import TodoListItem from "@/components/TodoListItem";
export default {
  name:"TodoList",
  data: () => ({
    todos: [
      {id:1, finished: false,  name: 'Vue Js lernen'},
      {id:2, finished: true, name: 'Code Beispiele lernen'},
      {id:3, finished: false, name: 'Git Commit'},
      {id:4, finished: true, name: 'Ein weitered Todo'},
    ]
  }),
  components: {
    TodoListItem
  }
}
</script>

<style>

</style>
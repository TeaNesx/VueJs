// Root Element
// Eine Componente hat genau ein Root Element
<template>
  <li :class="{'finishedTask': item.finished}">
    <input type="checkbox" :checked="item.finished"/>
    <button @click="toggleItem">Toggle</button>
    {{item.name}}
  </li>
</template>

<script>
export default {
  name:'TodoListitem',
  props: ['item'],
  methods: {
    toggleItem() {

      // triggert das event 'toggle'
      this.$emit('toggle', this.item);
    }
  }
}
</script>

<style>
.finishedTask {
  text-decoration: line-through;
}
</style>
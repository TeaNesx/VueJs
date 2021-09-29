// Root Element
// Eine Componente hat genau ein Root Element
<template>
  <li :class="{'finishedTask': item.finished}">
    <input type="checkbox" :checked="item.finished"/>
    <a :href="'?id=' + item.id">
      zeigen
    </a>
    {{item.name}}
  </li>
</template>

<script>
export default {
  name:'TodoListitem',
  props: ['item']
}
</script>

<style>

</style>
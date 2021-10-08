<template>
      <li :class="{'done':todo.is_done}">
       {{todo.id}}. {{todo.title}}
      </li>
</template>

<script>
export default {
    props: {
        todo: Object
    }
}
</script>

<style>

</style>
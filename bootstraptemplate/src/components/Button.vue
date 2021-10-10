<template>
  <a :href="href">
      {{text}}
  </a>
</template>

<script>
export default {
    name:'Call to action button',
    props: ['color', 'text', 'href']
}
</script>

<style>

</style>
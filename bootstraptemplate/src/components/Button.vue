<template>
  <a :id="id" :href="href" :style="{background:color}">
      {{text}}
  </a>
</template>

<script>
export default {
    name:'Call to action button',
    props: ['color', 'text', 'href', 'id']
}
</script>

<style>
 a {
    padding: 10px;
    border-radius: 10px;
    color: white;
    text-decoration: none;
    text-align: center;
 }

 a:hover {
   color: white;
 }
</style>
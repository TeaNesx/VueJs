<template>
    <li class="nav-item">
        {{item.title}}
    </li>
</template>

<script>
export default {
    name:'navItem',
    props: ['item'],

}
</script>

<style scoped>
    .nav-item {
        color: rgba(255, 255, 255, 0.55);
    }
</style>
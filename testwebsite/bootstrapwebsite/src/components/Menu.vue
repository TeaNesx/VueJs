<template>
    <div id="menu">
        <ul>
            <li v-for="item in navItem" :key="item.id">{{item.title}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'Menu',
        data: () => ({
            navItem: [
                {id: 1, title:'Home'},
                {id: 2, title:'About'},
                {id: 3, title:'Service'},
                {id: 4, title:'Portfolio'},
                {id: 5, title:'Team'}, 
            ]
        }),
    }
</script>

<style>

</style>
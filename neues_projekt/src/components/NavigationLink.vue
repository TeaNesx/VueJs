<template>
    <a :href="url" class="nav-link">
        <slot name="image">
            Kein Bild
        </slot> |

        <slot></slot>
    </a>
</template>

<script>
export default {
    name:"NavigationLink",
    props: ['url'],
}
</script>

<style>
    a:link, a:active, a:visited, a:hover {
        color: red;
    }
</style>
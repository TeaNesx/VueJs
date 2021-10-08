<template>
    <div class="container">
        <div class="row">
            <div class="logo-container col-2">
                <slot name="navLogo">
                    <p class="missingSlot">
                        Missing Logo
                    </p>
                </slot>
            </div>

            <div class="nav-item col-5">
                <ul>
                    <nav-item
                        v-for="item in items" :key="item.id"
                        :item="item"
                    />
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import NavItem from './NavItem.vue'
export default {
    name:'navigation',
    components: { NavItem },

    data: () => ({
        items: [
            {id: 1, title: 'Home', isActive: false, href:'/home'},
            {id: 2, title: 'Landings', isActive: false, href:'/landings'},
            {id: 3, title: 'Pages', isActive: false, href:'/pages'},
            {id: 4, title: 'Documnetation', isActive: false, href:'/docs'},
        ]
    }),

}
</script>

<style scoped>
    .missingSlot {
        color: red;
    }

    p {
        color: white;
    }
</style>
<template>
    <div class="container">
        <div class="row">
            <div id="logo-container" class="col-2">
                <slot name="navLogo">
                    <p class="missingSlot">
                        Missing Logo
                    </p>
                </slot>
            </div>

            <div id="nav-list" class="col-5">
                <ul>
                    <nav-item
                        v-for="item in items" :key="item.id"
                        :item="item"
                    />
                </ul>
            </div>

            <div id="buy-now" class="col-2">
                <BuyButton
                    :color="ButtonColor"
                    :href="ButtonLink"
                    :text="ButtonText"
                />
            </div>
            
        </div>
    </div>
</template>

<script>
import NavItem from './NavItem.vue'
import BuyButton from './Button.vue'
export default {
    name:'navigation',
    components: { NavItem , BuyButton},

    data: () => ({
        items: [
            {id: 1, title: 'Home', isActive: false, href:'/home'},
            {id: 2, title: 'Landings', isActive: false, href:'/landings'},
            {id: 3, title: 'Pages', isActive: false, href:'/pages'},
            {id: 4, title: 'Documnetation', isActive: false, href:'/docs'},
        ],

        ButtonColor:'red',
        ButtonLink: 'google.de',
        ButtonText: 'Buy Now'
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

    ul {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-top: 10px;
    }
</style>
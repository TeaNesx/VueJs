<template>
    <div class="container">
        <div class="row">
            <div id="logo-container" class="col-3">
                <slot name="navLogo">
                    <p class="missingSlot">
                        Missing Logo
                    </p>
                </slot>
            </div>

            <div id="nav-list" class="col-7">
                <ul class="list-unstyled">
                    <nav-item
                        v-for="item in items" :key="item.id"
                        :item="item"
                    />
                </ul>
            </div>

            <div id="buy-now" class="col-2">
                <BuyButton
                    :id="ButtonId"
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
        ButtonId:'buy-now-button',
        ButtonColor:'#00ba94',
        ButtonLink: 'google.de',
        ButtonText: 'Buy Now',

        items: [
            {id: 1, title: 'Home', isActive: false, href:'/home'},
            {id: 2, title: 'Landings', isActive: false, href:'/landings'},
            {id: 3, title: 'Pages', isActive: false, href:'/pages'},
            {id: 4, title: 'Documnetation', isActive: false, href:'/docs'},
        ],

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

    #buy-now {
        display: flex;
    }
    
    #buy-now a{
        width: 8rem;
    }
</style>
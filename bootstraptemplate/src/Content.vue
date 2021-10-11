<template>
    <section id="content">
        <div id="header-image">
            <grid-two-column>
                <template v-slot:col-1>
                    <div class="text-view">
                        <h1 class="header-view">
                            Build your next project faster with SB UI Kit Pro
                        </h1>
                        <p class="subheader-view">
                            Welcome to SB UI Kit Pro, a toolkit for building beautiful 
                            web interfaces, created by the development team at Start Bootstrap
                        </p>

                        <div class="row">
                            <div class="col-4">
                                <custom-button
                                    :text="ButtonText"
                                    :href="ButtonLink"
                                    :color="ButtonColor"
                                    :id="ButtonId"
                                />
                            </div>

                            <div class="col-4">
                                <a id="learn-more">
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>
                </template>
                <template v-slot:col-2>
                    <img src="./assets/images/windows.svg" alt="">
                </template>
            </grid-two-column>
        </div>
    </section>
</template>

<script>
    import GridTwoColumn from './components/Grids/GridTwoColumn.vue'
    import CustomButton from './components/Button.vue'

    export default {
        components: { GridTwoColumn , CustomButton},
        name: 'Main Content',
        data: () => ({
            ButtonId: 'header-button',
            ButtonLink: 'test.de',
            ButtonColor: '#00ba94',
            ButtonText : 'Get Started'
        })
    }
</script>

<style>
    #header-image {
        background-color: #0061f2 !important;
        background-image: linear-gradient(135deg, #0061f2 0%, rgba(105, 0, 199, 0.8) 100%) !important;
        padding-top: 8rem;
        padding-bottom: 8rem;
    }

    #header-image .text-view .header-view {
        font-size: 2.5rem;
        color: white;
    }

    #header-image .text-view .subheader-view {
        color: rgba(255, 255, 255, 0.5) !important;
        font-size: 1.15rem;
    }

    #header-image .text-view #header-button {
        width: 100%;
        display: block;
    }

    #header-image .text-view #learn-more {
        display: flex;
        color: white;
    }
</style>

import Vue from 'vue'
import Navigation from './Navigation.vue'
// https://startbootstrap.com/previews/sb-ui-kit-pro

Vue.config.productionTip = false

new Vue({
  render: h => h(Navigation),
}).$mount('#navigation')

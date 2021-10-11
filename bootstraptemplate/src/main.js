import Vue from 'vue'
import Navigation from './Navigation.vue'
import Footer from './Footer.vue'
import Content from './Content.vue'

// https://startbootstrap.com/previews/sb-ui-kit-pro

Vue.config.productionTip = false

new Vue({
  render: h => h(Navigation),
}).$mount('#navigation')

new Vue({
  render: h => h(Content),
}).$mount('#content')

new Vue({
  render: h => h(Footer),
}).$mount('#footer')

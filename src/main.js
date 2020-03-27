import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import Element from 'element-ui'
import '../element-variables.scss'
import router from './router'

Vue.config.productionTip = false
Vue.use(Element)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

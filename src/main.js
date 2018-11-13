import Vue from 'vue'
import VueChromeTabs from 'vue-chrome-tabs'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
 
Vue.use(VueChromeTabs)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')

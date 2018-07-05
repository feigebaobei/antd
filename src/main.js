// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Button from 'vue-antd-ui/lib/button'
import Antd from 'vue-antd-ui'
import App from './App'
import 'vue-antd-ui/dist/antd.css'
import router from './router'

// Vue.component(Button.name, Button)

Vue.config.productionTip = false

Vue.use(Antd)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

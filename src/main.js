import Vue from 'vue'
import App from './App'

var VueTouch = require('vue-touch')
Vue.use(VueTouch)

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})

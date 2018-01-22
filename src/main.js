// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.toUpperCase()
})

Vue.filter('epoch-to-date-gmt', function (value) {
  if (!value) return ''
  var date = new Date()
  date.setTime(value * 1000)
  return date.toUTCString()
})

Vue.filter('epoch-to-date-local', function (value) {
  if (!value) return ''
  var date = new Date()
  date.setTime(value * 1000)
  return date.toString()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  created () {
    // console.log(DateTime.local())
  }
})

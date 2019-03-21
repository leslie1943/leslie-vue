import Vue from 'vue'

Vue.filter('dateSimple', function (d) {
  if (!d) return ''
  return d.substring(0, 16)
})
// import Vue from 'vue'
import Demo from './Demo.vue'
console.log(window.Vue)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render(h) {
    return h(Demo)
  }
})
//h就是creatElement,用来生成html DOM元素的
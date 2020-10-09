// import Vue from 'vue'
// import App from './App.vue'
console.log(window.Vue)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render(h) {
    return h('div', [this.n, h('button', { onClick: this.add }, '+1')])
  },
  data: { n: 1 },
  methods: {
    add() {
      this.n += 1
    }
  }
})
//h就是creatElement
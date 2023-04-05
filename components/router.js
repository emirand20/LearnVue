import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Age from './components/age.vue'
import changeColor from './components/changeColor.vue'
import router from './router'


Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/Age', component: Age },
    { path: '/changeColor', component: changeColor }
]

const router = new VueRouter({
    routes
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


export default router
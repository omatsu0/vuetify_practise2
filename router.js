import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Work from './components/Work.vue'
import Service from './components/Service.vue' // 今回追加
 
Vue.use(Router)
 
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/work',
      name: 'work',
      component: Work
    },
    // ここから追加
    {
      path: '/service',
      name: 'service',
      component: Service
    }
    // ここまで追加
  ],
  scrollBehavior (to, from, savedPosition) {
    // ハッシュがある時にはその地点へとスクロールする
    return to.hash ? { selector: to.hash, offset: { x: 0, y: 64 } } : { x: 0, y: 0 }
  }
})
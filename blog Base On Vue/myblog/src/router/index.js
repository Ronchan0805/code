import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/share',
    name: 'Share',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Share.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'*',
    redirect:{ name:'Index' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

 
// 解决重复点击导航路由报错
import Router from 'vue-router'
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
return originalPush.call(this, location).catch(err => err);
}

export default router

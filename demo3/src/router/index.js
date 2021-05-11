/*
 * @Author: w
 * @Date: 2021-05-10 15:58:27
 * @LastEditors: w
 * @LastEditTime: 2021-05-11 09:25:42
 */
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about3',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/demo3' : process.env.BASE_URL),
  routes
})

export default router

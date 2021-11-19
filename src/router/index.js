/**
 * 路由配置文件
 * 使用 createRouter() 函数来进行 Vue Router 的实例化
 * 使用 createWebHashHistory() 函数来创建Hash模式的路由模式对象
 */
import {
  createRouter,
  createWebHistory
} from 'vue-router'
const Test = () => import('@/views/home/Test.vue') //主页
const routes = [{
    path: '/',
    redirect: '/Test'
  },
  {
    name: 'Test',
    path: '/Test',
    component: Test,
  }
]
const routerHistory = createWebHistory()
const router = createRouter({
  mode: 'history',
  history: routerHistory,
  routes
})

export default router
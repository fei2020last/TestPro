/**
 * 路由配置文件
 * 使用 createRouter() 函数来进行 Vue Router 的实例化
 * 使用 createWebHashHistory() 函数来创建Hash模式的路由模式对象
 */
import {
  createRouter,
  createWebHistory
} from 'vue-router'
const Index = () => import('@/views/Index.vue') //主页
const Test = () => import('@/views/Test.vue') //测试使用 Css、Less、Sass、Scss
const MatrixBg = () => import('@/views/MatrixBg.vue') //黑客帝国背景

const routes = [{
    path: '/',
    redirect: '/Index'
  },
  {
    name: 'Index',
    path: '/Index',
    component: Index,
  },
  {
    name: 'Test',
    path: '/Test',
    component: Test,
  },
  {
    name: 'MatrixBg',
    path: '/MatrixBg',
    component: MatrixBg,
  },

]
const routerHistory = createWebHistory()
const router = createRouter({
  mode: 'history',
  history: routerHistory,
  routes
})

export default router
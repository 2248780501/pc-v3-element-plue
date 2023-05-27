import { createRouter, createWebHashHistory } from 'vue-router'
const Layout = () => import('@/views/Layout')
// 路由规则
const routes = [
  // 一级路由布局容器
  {
    path: '/',
    component: Layout,
    // children: []
  },
 ]
// vue2.0 new VueRouter({}) 创建路由实例
// vue3.0 createRouter({}) 创建路由实例
const router = createRouter({
  // 使用hash的路由模式
  history: createWebHashHistory(),
  routes,
  // 每次切换路由的时候滚动到页面顶部
  scrollBehavior () {
    // vue2.0  x  y  控制
    // vue3.0  left  top 控制
    return { left: 0, top: 0 }
  }
})



export default router

// createRouter:创建router实例对象
// createWebHistory：创建history模式的路由
import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), //路由器的工作模式：history模式和hash模式
  // path和component对应关系的位置
  routes: [ //一个个的路由规则
    {
      //一级路由配置
      path:'/',
      component:Layout,
      //二级路由配置
      children:[
        {
          path:'',
          component:Home
        },
        {
          path:'category/:id',//子级不需要写斜杠
          component:Category
        }
      ]
    },
    {
      path:'/login',
      component:Login
    }
  ]
})

export default router
  
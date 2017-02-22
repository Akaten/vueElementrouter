import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import Login from 'components/Login.vue'
import Home from 'components/Home.vue'
import massFunction from 'components/nav1/massFunction.vue'
import autoreplyFunction from 'components/nav1/autoreplyFunction.vue'
import Form from 'components/nav1/Form.vue'
import User from 'components/nav1/user.vue'
import Page4 from 'components/nav2/Page4.vue'
import userManage from 'components/nav2/userManage.vue'
import Page6 from 'components/nav3/Page6.vue'
import Page7 from 'components/nav3/Page7.vue'
import materialManage from 'components/nav2/materialManage.vue'
import createMessage from 'components/nav2/createMessage.vue'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login,
      name: '',
      hidden: true
    },
    {
      path: '/',
      name: '功能',
      component: Home,
      iconCls: 'el-icon-menu',
      children: [
        { path: '/massFunction', component: massFunction, name: '群发功能' },
        { path: '/autoreplyFunction', component: autoreplyFunction, name: '自动回复' },
        { path: '/form', component: Form, name: '自定义菜单' },
        { path: '/user', component: User, name: '投票管理' }
      ]
    },
    {
      path: '/',
      component: Home,
      name: '管理',
      iconCls: 'fa fa-briefcase',
      children: [
        { path: '/page4', component: Page4, name: '消息管理' },
        { path: '/userManage', component: userManage, name: '用户管理' },
        { path: '/materialManage', component: materialManage, name: '素材管理' },
        { path: '/createMessage', component: createMessage, name: '新建图文管理' }
      ]
    },
    {
      path: '/',
      component: Home,
      name: '统计',
      iconCls: 'fa fa-pie-chart',
      children: [
        { path: '/page6', component: Page6, name: '用户分析' },
        { path: '/page7', component: Page7, name: '图文分析' }
      ]
    }
  ]
})

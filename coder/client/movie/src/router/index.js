import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import MyAcom from '@/components/MyAcom'
import MyBcom from '@/components/MyBcom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/a',
      name: 'MyAcom',
      component: MyAcom
    },
    {
      path: '/b',
      name: 'MyBcom',
      component: MyBcom
    }
  ]
})

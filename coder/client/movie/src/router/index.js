import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyAcom from '@/components/MyAcom'
import MyBcom from '@/components/MyBcom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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

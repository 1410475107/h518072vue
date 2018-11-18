// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
// 定义全局组件
import MyNav from '@/components/MyNav';
import MyBottom from '@/components/MyBottom';
Vue.component('my-nav', MyNav);
Vue.component('my-bottom', MyBottom);

//注册全局的axios
Axios.defaults.baseURL= 'http://lulaoshi:81';
Vue.prototype.$http = Axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

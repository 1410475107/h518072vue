import Vue from 'vue';

// 定义组件
Vue.component('passwd', {
    template:`<div>新密码：<input class="f-input" type="text" name="passwd" value=""></div>`,
    data:function(){return {}},
    methods:{}
});
Vue.component('myheader', {
    template:`<div class="myheader">修改头像</div>`
});
Vue.component('order', {
    template:`<div>我的订单</div>`
});

let vm = new Vue({
    el:'#app',
    data:{
        mycom:'passwd'
    },
    methods:{
        changeMycom(com){
            this.mycom = com;
        }
    }
});


import Vue from 'vue';

Vue.component('my-tag', {
    data:function(){
        return {
            username:'章苗苗'
        }
    },
    template:`  <div>
                    <div> 欢迎<b>{{username}}</b></div>
                    <div> <a href="###">个人中心</a></div>
                    <div><a href="###">我的订单</a></div>
                    <div><a href="###" @click="Logout">退出</a></div>
                </div>`,
    methods:{
        Logout:function(){
            this.username = '游客';
        }
    }
});


let vm1 = new Vue({
    el:'#app',
    data:{

    },
    methods:{

    },
    components:{
        myCenter:{
            data:function(){
                return {
                    num:100
                }
            },
            template:'<div><button>我的按钮:{{num}}</button></div>'
        }
    }
});


let vm2 = new Vue({
    el:'#app1',
    data:{

    },
    methods:{

    }
});


window.onload = function () {
    vue();
    myvue();
}

function vue () {
    //注册一个全局组件
    Vue.component(
        'my-page-footer',
        {
            template:'<div>{{noprop}}Copyright © 2004- ' + new Date().getFullYear() + 
            '北京华清远见科技发展有限公司 版权所有 ，京ICP备{{number}}号，京公海网安备11010802025203号</div>',
            props:['number_f', 'mydata'],
            data: function () {
                return {
                    number:this.number_f,
                    noprop:''
                };
            },
            mounted:function () {
                console.log(this.$el);
                this.noprop =  this.$el.dataset.noprop;
                this.$el.dataset.noprop = '新的值';
                console.log('我是一个组件');
            }
        }
    );
    Vue.component(
        'my-page-header',
        {
            template:`<ul class="nav nav-pills">
                        <li><a href="">菜单1</a></li>
                        <li><a href="">菜单2</a></li>
                        <li><a href="">菜单3</a></li>
                        <li><a href="">菜单4</a></li>
                    </ul>`
        }
    );
    let v = new Vue({
        el:'#app',
        data:{
            number:'16055280'
        },
        mounted:function () {
            console.log('根实例');
        },
        components:{
            'my-self-tag':{
                template:`<span>私有的标签</span>`
            }
        }
    });
    console.log(v);
}

function myvue (argument) {
    new Vue({
        el:'#myapp'
    });
}
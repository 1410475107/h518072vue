<template>
    <form>
        <slot>定义一个插槽</slot>
        <h3>登录</h3>
        <div class="form-group">
            <label for="email">Email address</label>
            <input v-if="showemail" type="email" class="form-control" id="email" @blur="myblur" v-myfocus v-model="myemail">
            <input v-else type="email" class="form-control" id="email" @blur="myblur" placeholder="邮箱" v-model="myemail">
            <span></span>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" v-focus placeholder="Password">
        </div>
        <button type="submit" class="btn btn-default">登录</button>
    </form>
</template>

<script>
    module.exports = {
        name:'mylogin',
        data:function(){
            return {
                mydogname:'谢谢',
                showemail:true,
                myemail:'1410475107@qq.com'
            };
        },
        methods:{
            checkdata:function(){
                let email  =document.querySelector('#email');
                if(!email.value){
                    email.value = '请输入邮箱';
                    console.log('123');
                    return  ;
                }
            },
            myblur:function(e){
                this.showemail = false;
                this.myemail = '666@qq.com'
            }
        },
        //支持自定义局部指令
        directives:{
            myfocus:{
                //不同的钩子函数在不同时期产生不同的结果
                update:function(myel, bindsdsad, vnode123, oldVnode321){
                    console.log(myel);
                    console.log(bindsdsad);
                    console.log(vnode123);
                    console.log(oldVnode321);
                    myel.style.backgroundColor = '#fd2';
                },
                bind:function(myel){
                    myel.style.backgroundColor = '#f12';
                },
                unbind:function(myel, bindsdsad, vnode123, oldVnode321){
                    myel.style.backgroundColor = '#112';
                }
            }
        }
    };
</script>
//使用vue   引入
import Vue123 from 'vue';

//创建vue实例

let vm = new Vue123({
    el:'#app',
    data:{
        mname:'赵佳培'
    },
    methods:{
        changeName:function(){
            console.log(1);
            //修改姓名
            this.mname = '李委金';
        }
    }
});
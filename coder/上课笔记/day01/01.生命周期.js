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
            this.mname = '李委金：' + Math.random();
        },
        desVue:function(){
            this.$destroy();
        }
    },

    beforeCreate:function(){
        console.group('------beforeCreate创建前状态------');
        console.log("%c%s", "color:red" , "el     : " + this.$el); //undefined
        console.log("%c%s", "color:red","data   : " + this.$data); //undefined 
    },
    
    created:function(){
        console.group('------created创建后状态------');
        console.log("%c%s", "color:red" , "el     : " + this.$el); //undefined
        console.log("%c%s", "color:red","data   : " + this.$data); //[object Object] 
    },
    
    beforeMount:function(){
        console.group('------beforeMount创建后状态------');
        console.log("%c%s", "color:red" , "el     : " + this.$el); // [object HTMLDivElement]
        console.log("%c%s", "color:red","data   : " + this.$data); // [object Object] 
    },
    
    mounted:function(){
        console.group('------mounted创建后状态------');
        console.log("%c%s", "color:red" , "el     : " + this.$el); //undefined
        console.log("%c%s", "color:red","data   : " + this.$data); //undefined 
    },
    beforeUpdate: function () {
        
        let mes = this.message;
        console.group('beforeUpdate 更新前状态===============》');
        console.log(document.querySelector('span').innerHTML);
        console.log("%c%s", "color:red","el     : " + this.$el);
        console.log(this.$el);   
        console.log("%c%s", "color:red","data   : " + this.$data); 
    },
    updated: function () {
        let mes = this.message;
        console.group('updated 更新完成状态===============》');
        console.log(document.querySelector('span').innerHTML);
        console.log("%c%s", "color:red","el     : " + this.$el);
        console.log(this.$el); 
        console.log("%c%s", "color:red","data   : " + this.$data); 
    },
    beforeDestroy: function () {
      console.group('beforeDestroy 销毁前状态===============》');
      console.log("%c%s", "color:red","el     : " + this.$el);
      console.log(this.$el);    
      console.log("%c%s", "color:red","data   : " + this.$data); 
    },
    destroyed: function () {
      console.group('destroyed 销毁完成状态===============》');
      console.log("%c%s", "color:red","el     : " + this.$el);
      console.log(this.$el);  
      console.log("%c%s", "color:red","data   : " + this.$data); 
    }
});
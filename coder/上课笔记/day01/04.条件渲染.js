import Vue from 'vue';

let vm = new Vue({
    el:'#app',
    data:{
        myname:'吴豪',
        myshow:false
    },
    methods:{
        myShow:function(){
            this.myshow = !this.myshow;
        }
    }
});
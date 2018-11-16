import Vue from 'vue';
import axios  from 'axios';
Vue.component('search-form', {
    template:`<form action="/" method="GET">
                关键词：<input type="text" name="keywords" value="" v-model="keywords">
                <button type="button" @click="searchData">搜索</button>
            </form>`,
    data:function(){
        return {
            keywords:''
        }
    },
    methods:{
        searchData(){
            console.log(this.keywords);
            let _this = this;
            axios.get('http://localhost:81/getkw', {
                params: {
                    kw:_this.keywords
                }
            })
            .then(function (response) {
                _this.$emit('myevent', response.data)
            })
            .catch(function (error) {
            })
        }
    }
});

let vm = new Vue({
    el:'#app',
    data:{
        kwlists:[]
    },
    methods:{
        getResult(results){
            this.kwlists = results;
            console.log(results);
        }
    }
});
import mycss from './css/my.css';
import Vue from 'vue';
import Axios from 'axios';

let vm = new Vue({
    el: '#app',
    data: {
        birthday:'1992-09-09',
        kw:'女装',
        list:[]
    },
    //计算属性
    computed:{
        age:function(){
            return new Date().getFullYear() - this.birthday.split('-')[0];
        }
    },
    watch: {
        birthday:function(){
            console.log(this.age);
        },
        kw:function(){
            let _this = this;
            Axios.get('http://localhost:81/getkw', {
                params: {
                    kw:_this.kw
                }
            })
            .then(function (response) {
                console.log(response.data);
                //服务器返回值交给  list
                for (let index = 0; index < response.data.length; index++) {
                    response.data[index].kw = response.data[index].kw.replace(_this.kw, `<span class="err">${_this.kw}</span>`);
                }
                _this.list = response.data;
            })
            .catch(function (error) {
            })
        }
    }
});
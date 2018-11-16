import mycss from './css/my.css';
import Vue from 'vue';
import Axios from 'axios';

let vm = new Vue({
    el: '#app',
    data: {
        myform:{
            username: '',
            passwd: ''
        },
        tips:'',
        tc:'err'
    },
    methods: {
        Login() {
            let _this =this;
            Axios.post('http://localhost:81/login', _this.myform)
                .then(function (response) {
                    console.log(response.data);
                    if(response.data.r == 'username_not_exist'){
                        _this.tips = '账号不存在';
                        _this.tc = 'err';
                    }else if(response.data.r == 'passwd_err'){
                        _this.tips = '密码错误';
                        _this.tc = 'err';
                    }else  if(response.data.r == 'success'){
                        _this.tips = '登录成功';
                        _this.tc = 'success';
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }
});
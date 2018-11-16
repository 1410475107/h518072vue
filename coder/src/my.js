import mycss from './css/my.css';
import Vue from 'vue';
import Axios from 'axios';

Vue.component('book-info', {
    template:`  <div class="binfo">
                    <img :src="binfo.bimg" alt="">
                    <div>{{binfo.btitle}}</div>
                    <div class="authors">{{binfo.authors}}</div>
                </div>`,
    data:function(){
        return {imgsrc:'1'}
    },
    // props:['bimg', 'btitle', 'authors']
    props:['binfo']
});

new Vue({
    el:'#app',
    data:{
        booklist:[]
    },
    methods:{

    },
    beforeMount:function(){
        let _this = this;
        Axios.get('http://localhost:81/getbooks', {
            params: {
                page:1
            }
        })
        .then(function (response) {
            console.log(response.data);
            _this.booklist = response.data;
        })
        .catch(function (error) {
        })
    },
    components:{

    }
});
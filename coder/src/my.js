import Vue from 'vue';
import axios  from 'axios';
Vue.component('my-div', {
    template:` <div style="color:red">
                 <slot></slot>
                 <slot name="dabao"></slot>
                 <slot name="erbao"></slot>
                </div>`,
    data:function(){
        return {
            keywords:''
        }
    }
});

let vm = new Vue({
    el:'#app',
    
});
module.exports = {
    topMenu:{
        data:function(){
            return {
                
            };
        },
        template:`<ul class="menu">
                    <li>菜单1</li>
                    <li>菜单2</li>
                    <li>菜单3</li>
                 </ul>`
    },
    footBar:{
        props:['icp'],
        data:function(){
            return {
                datetime:new Date().toLocaleDateString()
            };
        },
        template:`<div class="foot">版权所有@{{icp}}-{{datetime}}</div>`
    },
    stuForm:{
        data:function(){
            return {
                username:'',
                gender:''
            }
        },
        methods:{
            myData:function () {
                console.log(this.$data);
                this.$emit('myeve', this.username, this.gender);
            }
        }
        ,
        template:`<form action="">
                    姓名：<input type="text" name="username" value="" v-model="username"> <br>
                    性别： 
                        <input type="radio" name="gender" value="男" v-model="gender"> 男
                        <input type="radio" name="gender" value="女" v-model="gender"> 女 <br>
                    <input type="button" @click="myData" value="确定">
                </form>`
    }

}

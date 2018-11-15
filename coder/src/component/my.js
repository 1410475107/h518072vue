module.exports = {
    myDiv:{
        template:`<div style="color:red" @click="changgeInn">{{btn}}</div>`,
        data:function () {
            return {btn:'我的盒子'}
        },
        methods:{
            changgeInn(){
                this.btn = '新盒子';
            }
        }
    },
    headerMenu:{
        template:`<div><ul>
                    <li>菜单1</li>
                    <li>菜单2</li>
                    <li>菜单3</li>
                    <li>菜单4</li>
                    <li>菜单5</li>
                </ul>
                <hr></div>
                `,
        data:function () {
            return {}
        },
        methods:{}
    }
}
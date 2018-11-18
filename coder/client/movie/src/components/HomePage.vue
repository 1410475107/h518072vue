<template>
    <div class="index">
        <my-nav></my-nav>

        <ul class="r">
            <li> <img src="http://image14.m1905.cn/uploadfile/2018/1117/thumb_1_1380_460_20181117121251533836.jpg" alt=""> </li>
        </ul>


        <ul class="ban2">
            <li>
                <div>要闻</div> 
            </li>
            <li>快讯</li>
            <li>深度</li>
        </ul>
        <my-bottom></my-bottom>
    </div>
</template>

<script>
// 子组件的使用
import MyNav from './MyNav';
import MyBottom from './MyBottom';
export default {
  name: 'HomePage',
  data () {
    return {
    }
  },
  components:{
      MyNav,
      MyBottom
  }
}
</script>

<style scoped>
.r img, .ban2{
    width: 100%;
    min-width: 980px;
}

.ban2 li{
    float: left;
    width: 33.3333%;
    height: 500px;
    background-color: #ccc;
}

.ban2 div{
    font-size: 24px;
    font-weight: bolder;
    color: black;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #ddd;
}
</style>

<template>
    <div class="index">
        <my-nav></my-nav>
        <el-carousel :interval="2000"  type="card" arrow="hover" height="450px">
            <el-carousel-item v-for="img1 in imglists" :key="img1">
                <img :src="img1" alt="">
            </el-carousel-item>
        </el-carousel>

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

export default {
  name: "HomePage",
  data() {
    return {
        imglists:[
            'http://image13.m1905.cn/uploadfile/2018/1117/thumb_1_1380_460_20181117121251533836.jpg',
            'http://image14.m1905.cn/uploadfile/2018/1118/thumb_1_1380_460_20181118101941685289.jpg',
            'http://image13.m1905.cn/uploadfile/2018/1116/thumb_1_1380_460_20181116031827495096.jpg',
            'http://image14.m1905.cn/uploadfile/2018/1115/thumb_1_1380_460_20181115015021288714.jpg']
    };
  },
  components: {}
};
</script>

<style scoped>
.r img,
.ban2 {
  width: 100%;
  min-width: 980px;
}

.ban2 li {
  float: left;
  width: 33.3333%;
  height: 500px;
  background-color: #ccc;
}

.ban2 div {
  font-size: 24px;
  font-weight: bolder;
  color: black;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #ddd;
}
</style>

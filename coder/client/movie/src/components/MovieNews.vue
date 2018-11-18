<template>
    <div class="index">
        <my-nav></my-nav>

        <ul class="r">
            <li> <img src="http://image14.m1905.cn/uploadfile/2018/1117/thumb_1_1380_460_20181117121251533836.jpg" alt=""> </li>
        </ul>
        <movie-info v-for="minfo in movieinfo" :key="minfo.id" :minfo="minfo"></movie-info>

        <my-bottom></my-bottom>
    </div>
</template>

<script>
// 子组件的使用
import MovieInfo from "./movie/MovieInfo";
export default {
  name: "MovieNews",
  data() {
    return {
      movieinfo: []
    };
  },
  components: {
    MovieInfo
  },
  mounted() {
      let _this = this;
      _this.$http.get('http://lulaoshi:81/getmovie').then(function(response){
          console.log(response.data);
          _this.movieinfo = response.data;
      });
  }
};
</script>

<style scoped>
.r img,
.ban2 {
  width: 100%;
  min-width: 980px;
}
</style>

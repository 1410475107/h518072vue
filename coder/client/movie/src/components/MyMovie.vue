<template>
    <div class="index">
        <my-nav></my-nav>
        <div>播放电影的播放器</div>
        <h2>电影名称</h2>
        <my-bottom></my-bottom>
    </div>
</template>

<script>
// 子组件的使用
export default {
  name: "MyMovie",
  data() {
    return {
      minfo:{}
    };
  },
  components: {
  },
  watch: {
    '$route' (to, from) {
      console.log(this.$route.params); 
      this.getMovie(this.$route.params.id);
    }
  },
  mounted() {
      let _this = this;
      console.log(_this.$route.query);  //{id:3}
      console.log(_this.$route.params); 
      _this.getMovie(_this.$route.params.id);
  },
  methods:{
      getMovie(id){
        //发起ajax请求到服务器获取对应的信息
      }
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

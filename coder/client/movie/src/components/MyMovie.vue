<template>
    <div class="index">
        <my-nav></my-nav>
        <div>播放电影的播放器</div>
        <h2>电影名称</h2>
        <h3>评论</h3>

        <el-form ref="form" :model="form" name="mycoment" label-width="80px">
            <el-form-item label="评分">
                <el-rate v-model="mycoment.score" :allow-half="true" :show-text="false" :texts="tips">
                </el-rate>
            </el-form-item>

            <el-form-item label="评语">
                <el-input type="textarea" class="mywidth" v-model="mycoment.s"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">发表</el-button>
            </el-form-item>
        </el-form>

        <my-bottom></my-bottom>
    </div>
</template>

<script>
// 子组件的使用
export default {
  name: "MyMovie",
  data() {
    return {
      minfo: {},
      mycoment:{
          score:5,
          s:'评语'
      },
      value3: 3,
      tips: ["极差", "差", "一般", "满意", "非常满意"]
    };
  },
  components: {},
  watch: {
    $route(to, from) {
      console.log(this.$route.params);
      this.getMovie(this.$route.params.id);
    }
  },
  mounted() {
    let _this = this;
    console.log(_this.$route.query); //{id:3}
    console.log(_this.$route.params);
    _this.getMovie(_this.$route.params.id);
  },
  methods: {
    getMovie(id) {
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
.mywidth {
  width: 300px;
}
</style>

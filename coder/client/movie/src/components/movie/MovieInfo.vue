<template>
    <div class="minfo">
        <img :src="minfo.img" alt="">
      <div class="mtitle">{{minfo.mtitle}}</div>
      <div class="score">{{minfo.score}}</div>
      <div class="sum">{{minfo.sum}}</div>
    </div>
</template>

<script>
// 子组件的使用
export default {
  name: 'MovieInfo',
  data () {
    return {
    }
  },
  props:['minfo']
}
</script>

<style scoped>
.minfo{
    float: left;
}
</style>

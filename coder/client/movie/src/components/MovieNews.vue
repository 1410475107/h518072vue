<template>
    <div class="index">
        <my-nav></my-nav>

        

        <my-bottom></my-bottom>
    </div>
</template>

<script>
// 子组件的使用
import MyNav from './MyNav';
import MyBottom from './MyBottom';
export default {
  name: 'MovieNews',
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

</style>

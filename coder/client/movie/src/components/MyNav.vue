<template>
    <ul class="nav">
        <li><a href="###">首页</a></li>
        <li><a href="###">新闻</a></li>
        <li><a href="###">独家栏目</a></li>
    </ul>
</template>

<script>
export default {
  name: "MyNav",
  data() {
    return {};
  }
};
</script>

<style scoped>
.nav {
  min-width: 980px;
  width: 100%;
  background: #20232c;
  height: 70px;
  position: relative;
  z-index: 10;
  line-height: 70px;
}
.nav li {
  float: left;
  list-style-type: none;
}
.nav a {
  color: #bdbdbd;
  text-decoration: none;
  font-size: 16px;
  padding: 0 18px;
}
.nav a:hover {
  color: #fff;
}
</style>
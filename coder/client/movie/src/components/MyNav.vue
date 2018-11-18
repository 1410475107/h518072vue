<template>
    <ul class="nav">
        <li><router-link to="/">首页</router-link></li>
        <li> <router-link to="/news">新闻</router-link></li>
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
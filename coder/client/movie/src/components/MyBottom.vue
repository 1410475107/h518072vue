<template>
<div>
    <div class="clear"></div>
    <div class="bottom">
       底部导航
    </div>
    </div>
</template>

<script>
export default {
  name: "MyBottom",
  data() {
    return {};
  }
};
</script>

<style scoped>
.clear{
    clear: both;
}
.bottom {
  min-width: 980px;
  width: 100%;
  background: #20232c;
  height: 150px;
  position: relative;
  z-index: 10;
}

</style>
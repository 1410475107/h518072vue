<template>
    <div class="mymenu">
        <ul>
            <li>菜单1</li>
            <li>菜单1</li>
            <li>菜单1</li>
            <li>菜单1</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "MyBcom",
  data() {
    return {
      msg: ""
    };
  }
};
</script>


<style scoped>
.mymenu {
  width: 100%;
  height: 42px;
  line-height: 42px;
  background-color: #eee;
}
.mymenu li {
  float: left;
  padding: 0 15px;
}
.mymenu li:hover {
  background-color: #aaa;
}
</style>

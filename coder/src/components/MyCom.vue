<template>
    <div class="myclass">
        <slot></slot>
        <slot name="dabao"></slot>
        <slot name="erbao"></slot>
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      keywords:''
    }
  },
  methods: {
    changeMsg: function() {}
  }
};
</script>

<style scoped>
/* scoped:当前的css只在组件里面起作用 */
.myclass{
    color:aquamarine;
}
</style>

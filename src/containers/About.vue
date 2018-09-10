<template>
<div>
     <van-nav-bar
    title="首页"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
   ></van-nav-bar>
    一级路由跳转测试
</div>
</template>

<script>
export default {
  components: {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
</style>


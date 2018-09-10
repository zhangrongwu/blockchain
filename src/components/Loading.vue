<template>
  <div class="loading">
    <img src="../assets/loading_green.gif" alt="loading">
  </div>
</template>

<script>
export default {
  name: "loading",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.loading {
  margin: 30px;
  text-align: center;

  img {
    width: 20px;
  }
}
</style>

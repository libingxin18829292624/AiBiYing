<template>
  <header class="header">
    <i class="iconfont icon-houtui1" @click="goBack"></i>
  </header>
</template>

<script>
    export default {
        name: "orderHeader",
      methods:{
          goBack(){
            window.history.back();
          }
      }
    }
</script>

<style scoped lang="scss" type="text/scss">
  .header{
    width: 100%;
    height: .75rem;
    overflow: hidden;
  }
  .icon-houtui1{
    font-size: .22rem;
    display: block;
    margin-top: .4rem;
  }
</style>

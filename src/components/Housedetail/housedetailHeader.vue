<template>
    <div class="header">
      <i class="iconfont1 iconfont icon-houtui"></i>
      <i class="iconfont2 iconfont icon-xin"></i>
    </div>
</template>

<script>
    export default {
        name: "HousedetailHeader"
    }
</script>

<style scoped>
  .header{
    width: 100%;
    height: 2.285rem;
    background: url("../../assets/img/s_header_bj.jpg") no-repeat;
    background-size:100%;
    display: flex;
    justify-content: space-between;
  }
  .iconfont{
    font-size: 0.25rem;
    color: #fff;
    padding-top: 0.17rem;
  }
  .iconfont1{
    padding-left: 0.25rem;
  }
  .iconfont2{
    padding-right: 0.25rem;
  }

</style>

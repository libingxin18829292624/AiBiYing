<template>
  <div class="order-li">
    <span class="left">{{data.left}}</span>
    <span class="right">{{data.right}}</span>
  </div>
</template>

<script>
    export default {
      name: "orderLi",
      props:['data'],
      data(){
          return {
            leftContent:'住宿晚数',
            rightContent:'4'
          }
      }
    }
</script>

<style scoped lang="scss" type="text/scss">
  .order-li{
    width: 100%;
    height: .7rem;
    border-bottom:1px solid #e6e6e6;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .left{
    font-size: .14rem;
  }
  .right{
    color: #00797f;
    font-size: .14rem;
  }
</style>

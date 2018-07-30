<template>
    <div class="payFinished">
      <order-header></order-header>
      <p class="tip">支付成功！</p>
    </div>
</template>

<script>
  import orderHeader from "../components/order/orderHeader"
    export default {
        name: "abyPayFinished",
      components:{
        orderHeader
      }
    }
</script>

<style scoped lang="scss" type="text/scss">
  .payFinished{
    width: 100%;
    height: 100%;
    padding: 0 .25rem;
    box-sizing:border-box;
  }
  .tip{
    text-align: center;
    font-size: .3rem;
    margin-top: 2rem;
  }
</style>

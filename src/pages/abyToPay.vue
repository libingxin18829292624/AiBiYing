<template>
    <div class="pay">
      <order-header></order-header>
      <div class="main">
        <img :src="payMa" alt="">
        <p class="tip">请扫码完成支付</p>
      </div>
    </div>
</template>

<script>
  import orderHeader from "../components/order/orderHeader"
    export default {
        name: "abyToPay",
      data(){
          return {
            "payMa":"/src/assets/img/payMa.png"
          }
      },
      components:{
        orderHeader
      }
    }
</script>

<style scoped lang="scss" type="text/scss">
  .pay{
    width: 100%;
    height: 100%;
    padding: 0 .25rem;
    box-sizing:border-box;
  }
  .main{
    width: 60%;
    height: 50%;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    img{
      width: 2rem;
      height: 2rem;
      display: block;
      margin: 0 auto;
    }
    .tip{
      font-size: .15rem;
      text-align: center;
      margin-top: .2rem;
    }
  }
</style>

<template>
  <aby-transtion-to-top-fast>
    <div class="pay">
      <order-header></order-header>
      <div class="main">
        <img :src="payMa" alt="">
        <p class="tip">请扫码完成支付</p>
      </div>
    </div>
  </aby-transtion-to-top-fast>
</template>

<script>
  import orderHeader from "../components/order/orderHeader"
  import abyTranstionToTopFast from '../components/common/abyTranstionToTopFast'

  export default {
        name: "abyToPay",
      data(){
          return {
            "payMa":"/src/assets/img/payMa.png"
          }
      },
      components:{
        orderHeader,
        abyTranstionToTopFast
      }
    }
</script>

<style scoped lang="scss" type="text/scss">
  .pay{
    width: 100%;
    height: 100%;
    padding: 0 .25rem;
    box-sizing:border-box;
    background-color: #fff;
  }
  .main{
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
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

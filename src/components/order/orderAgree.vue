<template>
  <div class="order-agree">
    <order-header></order-header>
    <div class="title">
      <h1>查阅{{}}的房屋守则</h1>
      <p>这里是在{{}}的房屋中要遵守的守则，以及您需要了解的其他信息。</p>
    </div>
    <order-agree-li :data=""></order-agree-li>
  </div>
</template>

<script>
  import orderHeader from './orderHeader'
  import orderAgreeLi from './orderAgreeLi'
    export default {
      name: "orderAgree",
      data(){
        return {
            agreeLis:[

            ]
        }
      },
      components:{
        orderHeader,
        orderAgreeLi
      }
    }
</script>

<style scoped lang="scss" type="text/scss">
  .order-agree{
    width: 100%;
    height: 100%;
    padding: 0 .25rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background-color: #fff;
  }
</style>

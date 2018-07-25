<template>
  <div class="order-agree">
    <order-header></order-header>
    <div class="title">
      <h1>查阅{{}}的房屋守则</h1>
      <p>这里是在{{}}的房屋中要遵守的守则，以及您需要了解的其他信息。</p>
    </div>
    <order-agree-li v-for="n in agreeLis" :data="n"></order-agree-li>
    <div class="agree">同意</div>
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
              "不适合婴幼儿（2岁以内）入住，或不能为婴幼儿提供安全的住宿环境",
              "禁止吸烟",
              "不适合携带宠物入住",
              "不允许举办派对和活动",
              "入住时间为14:00 - 23:00",
              "进门请记得换拖鞋，我们的拖鞋都是一客一消毒的，如果需要使用盘子和碗或者洗衣服，请联系我",
              "您同时还需确认：房源里养有宠物"
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
  .title{
    h1{
      font-size: .24rem;
    }
    p{
      font-size: .12rem;
    }
  }
  .agree{
    font-size: .11rem;
    color: #fff;
    width: 100%;
    height: .52rem;
    border-radius:.04rem;
    border: 1px solid #007278;
    background-color: #008489;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<template>
  <aby-transtion-to-top-fast>
    <div class="order-agree">
      <order-header></order-header>
      <div class="title">
        <h1>查阅{{ownerName}}的房屋守则</h1>
        <p>这里是在{{ownerName}}的房屋中要遵守的守则，以及您需要了解的其他信息。</p>
      </div>
      <order-agree-li v-for="n in agreeLis" :key="n" :data="n"></order-agree-li>
      <div class="footer">
        <order-button @click.native="agree" :data="'同意'"></order-button>
      </div>
    </div>
  </aby-transtion-to-top-fast>
</template>

<script>
  import orderHeader from './orderHeader'
  import orderAgreeLi from './orderAgreeLi'
  import orderButton from './orderButton'
  import abyTranstionToTopFast from '../common/abyTranstionToTopFast'
    export default {
      name: "orderAgree",
      data(){
        return {
            "agreeLis":[
              "不适合婴幼儿（2岁以内）入住，或不能为婴幼儿提供安全的住宿环境",
              "禁止吸烟",
              "不适合携带宠物入住",
              "不允许举办派对和活动",
              "入住时间为14:00 - 23:00",
              "进门请记得换拖鞋，我们的拖鞋都是一客一消毒的，如果需要使用盘子和碗或者洗衣服，请联系我",
              "您同时还需确认：房源里养有宠物"
            ],
            "ownerName":this.$store.state.ownerName,
        }
      },
      methods:{
        agree(){
          this.$store.state.isAgree = true;
          window.history.back();
        }
      },
      components:{
        orderHeader,
        orderAgreeLi,
        orderButton,
        abyTranstionToTopFast
      }
    }
</script>

<style scoped lang="scss" type="text/scss">
  .order-agree{
    width: 100%;
    padding: 0 .25rem;
    box-sizing: border-box;
    letter-spacing: .01rem;
    background-color: #fff;
  }
  .title{
    h1{
      font-size: .24rem;
      height: .42rem;
      line-height: .42rem;
    }
    p{
      font-size: .12rem;
      line-height: .18rem;
      margin-top: .05rem;
      margin-bottom: .25rem;
    }
  }
  .footer{
    width: 100%;
    height: .85rem;
    display: flex;
    align-items: center;
    background-color: #fff;
  }
</style>

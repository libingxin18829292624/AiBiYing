<template>
  <aby-transtion-to-top-fast>
    <div class="container">
      <header class="header">
        <i class="iconfont icon-guanbi" @click="back"></i>
      </header>
      <section class="main">
        <h1 class="title">房客个人资料</h1>
        <p class="content">根据有关部门规定，所有前往中国的旅客都必须提供以下信息。作为中国居民，您的信息将由爱彼迎中国存储处理。完成本次预定，您同意爱彼迎中国可以向中国政府披露您的信息而不向您提供进一步通知。</p>
        <p class="info-title">您的个人资料</p>
        <ul class="info">
          <li v-for="(n,index) in info" :key="index" @click="over">{{n.name}}&nbsp;{{n.id}}</li>
        </ul>
      </section>
      <p class="tip">爱彼迎中国不会将您所填写的信息与房东共享。房客信息将由爱彼迎中国妥善保管，以便下次预定时使用。<a class="more">了解更多</a></p>
    </div>
  </aby-transtion-to-top-fast>
</template>

<script>
  import abyTranstionToTopFast from '../common/abyTranstionToTopFast'
    export default {
        name: "addPersonInfo",
      data(){
          return {
            "info":[
              {"name":"Ice","id":"612522199604194013"}
            ]
          }
      },
      methods:{
        back(){
          window.history.back();
        },
        over(){
          this.$store.state.isAddPersonInfo = true;
          window.history.back();
        }
      },
      components:{
        abyTranstionToTopFast
      }
    }
</script>

<style scoped lang="scss" type="text/scss">
  .container{
    background-color: #fff;
  }
  .header {
    width: 100%;
    height: .8rem;
    padding: 0 .25rem;
    box-sizing: border-box;
    overflow: hidden;
    border-bottom: 1px solid #e6e6e6;
    i {
      font-size: .26rem;
      display: block;
      margin-top: .4rem;
    }
  }
  .main{
    width: 100%;
    padding: 0 .25rem;
    box-sizing:border-box;
  }
  .title{
    height: .46rem;
    font-size: .24rem;
    line-height: .46rem;
  }
  .content{
    line-height: .18rem;
    font-size: .13rem;
    margin-bottom: .44rem;
  }
  .info-title{
    height: .33rem;
    line-height: .33rem;
    font-size: .14rem;
  }
  .info{
    padding-top: .1rem;
    li{
      padding: .1rem 0;
      text-indent:.1rem;
      font-size: .14rem;
      background-color: #ccc;
    }
  }
  .tip{
    margin-top: 3rem;
    padding: 0 .25rem;
    width: 100%;
    line-height: .16rem;
    font-size: .11rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    .more{
      color: #309b9f;
      font-size: .11rem;
    }
  }
</style>

<template>
    <div class="container">
      <header class="header">
        <i class="iconfont icon-guanbi" @click="back"></i>
      </header>
      <div class="main">
        <h1>选择您的付款方式</h1>
        <ul class="pasMethods">
          <li ref="method" class="method" @click="choose(index)" v-for="(n,index) in payMethods" :key="n">{{n}}</li>
        </ul>
      </div>
      <div class="footer">
        <div class="addMore">添加付款方式</div>
        <div class="store" @click="chooseOK">保存<i class="iconfont icon-jiantouyou"></i></div>
      </div>
    </div>
</template>

<script>
  import $ from 'jquery'
    export default {
        name: "orderAddPayMethod",
      data(){
          return {
            "payMethods":["支付宝"],
            "isChoose":"false"
          }
      },
      methods:{
          choose(index){
            $('.method')[index].style.color = '#343434';
            this.isChoose = "true";
          },
        chooseOK(){
            if(this.isChoose){
              this.$store.state.isAddPayMethod = "true";
              this.$store.state.payMethod = this.$refs.method[0].innerHTML;
              window.history.back();
            }
        },
        back(){
            window.history.back();
        }
      },
      mounted(){
          this.isChoose = false;
      }
    }
</script>

<style scoped lang="scss" type="text/scss">
  $color : #fff;
  .container{
    width: 100%;
    height: 100%;
    position: fixed;
    background-image: url("/src/assets/img/l3.png");
    -webkit-background-size: cover;
    background-size: cover;
    padding: 0 .25rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .header{
    width: 100%;
    height: .75rem;
    overflow: hidden;
  }
  .icon-guanbi{
    font-size: .26rem;
    color: $color;
    margin-top: .35rem;
    display: block;
  }
  .main{
    width: 100%;
  }
  h1{
    font-size: .24rem;
    color: $color;
    height: .42rem;
    line-height: .42rem;
    margin-bottom: .25rem;
  }
  .pasMethods{
    li{
      width: 100%;
      height: .43rem;
      line-height: .43rem;
      font-size: .2rem;
      color: $color;
    }
  }
  .footer{
    width: 100%;
    height: .78rem;
    position: fixed;
    left: 0;
    bottom: 0;
    padding: 0 .25rem;
    box-sizing:border-box;
    overflow: hidden;
  }
  .addMore{
    display: block;
    font-size: .11rem;
    color: $color;
    padding: .09rem .23rem;
    border: 1px solid $color;
    border-radius: .4rem;
    float: left;
    margin-top: .2rem;
  }
  .store{
    padding: .12rem .2rem .12rem .24rem;
    background-color: $color;
    font-size: .14rem;
    color: #006c72;
    float: right;
    border-radius:.5rem;
    vertical-align: middle;
    margin-top: .12rem;
    i{
      font-size: .22rem;
      vertical-align: middle;
      position: relative;
      top: -.01rem;
      left: .08rem;
    }
  }
</style>

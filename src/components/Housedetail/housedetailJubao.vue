<template>
<div class="header">
  <i class="iconfont icon-houtui1"></i>
  <h1>您为何举报该房源？</h1>
  <p class="tongzhi">不会通知该房东</p>
  <ul>
    <li v-for="(n,index) in liebiao"><span>{{n.neirong}}</span>
    <div  class="kuang"><img class="asd" @click="updataCount(index)"  :class="{tu:tutu == index}" src="../../assets/img/s_kuang.png" alt=""></div>
    </li>
  </ul>
  <p class="up">下一步<i class="iconfont .icon-jiantouyou"></i></p>
</div>
</template>

<script>
    export default {
        name: "housedetailJubao",
      data(){
          return{
            liebiao:[
              {
                  neirong:"这是不准确或不正确的",

              },
              {
                neirong:"这根本不能算是个房源",

              },
              {
                neirong:"是一个骗局",

              },
              {
                neirong:"很受冒犯",

              },
              {
                neirong:"其他",

              },
            ],

            tutu:"",
          }

      },
      methods:{
        updataCount(index){
          this.tutu = index;
        }
      }
    }
</script>

<style scoped>
  .header{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .iconfont{
    font-size: 0.15rem;
    padding-left: 0.25rem;
    padding-top: 0.28rem;
    display: block;
    width: 100%;
  }
  .header h1{
    font-size: 0.26rem;
    color: #484848;
    padding-top: 0.32rem;
    padding-left: 0.25rem;
  }
  .header .tongzhi{
    font-size: 0.135rem;
    color: #484848;
    padding-top: 0.11rem;
    padding-left: 0.25rem;
  }
  ul{
    width: 100%;
    padding-top: 0.6rem;
    padding-left: 0.25rem;
  }
  li{
    font-size: 0.15rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 0.78rem;
    border-bottom: 1px solid #ebebeb;
  }
  .kuang{
    width: 0.31rem;
    height: 0.31rem;
    border-radius: 50%;
    border: 1px solid #ebebeb;
    background: #f2f2f2;
    margin-right: 0.23rem;
    display: flex;
  }
  .kuang img{
    width: 0.31rem;
    height: 0.31rem;
  }
  .asd{
    opacity: 0;
  }
.tu{
  opacity: 1;
}
  .up{
    width: 1.06rem;
    height: 0.47rem;
    background: #008489;
    color: #fff;
    font-size: 0.15rem;
    line-height: 0.47rem;
    text-align: center;
    border-radius: 0.045rem;
    position: absolute;
    bottom: 0.225rem;
    right: 0.225rem;
  }
</style>

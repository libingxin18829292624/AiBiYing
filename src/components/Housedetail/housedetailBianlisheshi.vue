<template>
  <aby-transtion>
<div class="bianli">
  <div class="header">
    <i @click="goBack" class="iconfont icon-chacha"></i>
    <h1>便利设施</h1>
  </div>
  <div class="content">
    <ul>
      <li v-for="n in one" class="da">
            <p>{{n.stairTwo}}</p>
            <span class="pei">{{n.stairhtree}}</span>
      </li>
    </ul>
  </div>
  <div class="wei">
    <h1 class="footer">未配备</h1>
    <ul>
      <li class="da_2" v-for="n in Not">
        <span class="weipi">{{n.pei}}</span>
      </li>
    </ul>
  </div>
</div>
  </aby-transtion>
</template>

<script>
  import abyTranstionToTopfast from '../common/abyTranstionToTopFast'
  import AbyTranstion from "../common/abyTranstionToLeft";
    export default {
        name: "housedetailBianlisheshi",
      components: {AbyTranstion},
      abyTranstionToTopfast,
      data(){
          return{
            one:[
              {
                stairTwo:"无线网络",
                stairhtree:"可在房源内持续使用",
              },
              {
                stairTwo:"生活必须品",
                stairhtree:"毛巾、床单、香皂和卫生纸",
              },
              {
                stairTwo:"暖气 ",
                stairhtree:"中央暖气或房源内的暖气设备",
              },
              {
                stairTwo:"空调",
              },
              {
                stairTwo:"电梯",
              },
              {
                stairTwo:"早餐 ",
                stairhtree:"提供早餐",
              },
              {
                stairTwo:"房东将会迎接您 ",
              },

              {
                stairTwo:"洗发水 ",
              },
            ],
            Not:[
              {
                pei:"厨房",
            },
              {
                pei:"吹风机",
              },
              {
                pei:"洗衣机",
              },
              {
                pei:"电视",
              },
              {
                pei:"独立入口",
              },
              {
                pei:"一氧化碳报警器",
              },
              {
                pei:"烟雾报警器",
              },

            ]
          }
      },
      methods:{
        goBack:function (){
          window.history.back()
        }
      }
    }
</script>

<style scoped>
  .bianli{
  }
.header{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
  .iconfont{
    font-size: 0.14rem;
    color: #292929;
    padding-top: 0.255rem;
    padding-left: 0.25rem;
    display: block;
    width: 100%;
  }
  h1{
    font-size: 0.25rem;
    color: #484848;
    padding-left: 0.25rem;
    padding-top: .31rem;
  }

  .content{
    width: 100%;
  }
  .da{
    font-size: 0.215rem;
    color: #464646;
    border-bottom: 1px solid #e5e5e5;
    padding-top: 0.27rem;
    font-weight: 600;
    padding-left: 0.25rem;
  }
 p{
    font-size: 0.15rem;
    color: #464646;
   font-weight: 100;
   padding-bottom: 0.25rem;

 }
.pei{
    font-size: 0.125rem;
    color: #464646;
    font-weight: 100;
  line-height: 0.5rem;
}
.wei{
  width: 100%;
}
  .footer{
    font-size: 0.21rem;
    color: #484848;
    padding-top: 0.26rem;
  }
  .da_2{
    width: 100%;
    display: flex;
    padding-left: 0.25rem;
    border-bottom: 1px solid #e5e5e5;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .weipi{
    font-size: 0.125rem;
    color: #464646;
    line-height: 0.64rem;
    text-decoration:line-through;
  }
  </style>

<template>
  <aby-transtion>
<div class="ziji">
  <div class="ziji_1">
    <i @click="goBack" class="iconfont icon-houtui"></i>
  </div>
  <div class="ziji_2">
    <h1 class="lianxi">联系房东</h1>
    <h3 class="jieguo">榕通常会在一个小时内回复</h3>
    <img class="xiala" src="../../assets/img/s_touxiang.png" alt="">
    <p class="gaikuang">该房源概况</p>
  </div>
  <div class="caidan">
    <ul v-for="n in zilei" class="xiao1">
      <li class="yiji">
      <p class="fangyuan" href="#">{{n.biaoti}}</p>
      <img class="xiala2" src="../../assets/img/s_xiala.png" alt="">
      </li>
           <li class="none">{{n.juli}}</li>
           <li class="none">{{n.shijian}}</li>
    </ul>
  </div>
  <div class="footer">
    <p class="yiwen">仍有疑问？</p>
    <p class="anniu">给榕发消息</p>
  </div>
</div>
  </aby-transtion>
</template>

<script>
  import abyTranstionToTopfast from '../common/abyTranstionToTopFast'
  import $ from "jquery"
  import AbyTranstion from "../common/abyTranstionToLeft";
    export default {
      name: "housedetailZiye",
      components: {AbyTranstion},
        abyTranstionToTopfast,
      data() {
        return {
            zilei:[
              {
                biaoti:"前往房源",
                juli:"距离西安咸阳国际机场50分钟车程",
                shijian:"此房源的入住时间是从14:00到23:00."
              },
              {
                biaoti:"房源详情及守则",
                juli:"享用独立房间，但必须与他人公用房源的其他区域",
                shijian:"禁止吸烟、不适合携带宠物入住."
              },
              {
                biaoti:"价格和可定状态",
                juli:"住宿天数超过一周的预定可享5%的折扣，超过一个月可享受25%的折扣",
                shijian:"退订政策-中等：限定期内全额退款."
              },
            ]
        }
      },
      methods: {
        xiao1:function(){
             $(".xiao1").click(function(){
               $(".xiao1").css("height","100%");
              })
      },
      goBack:function (){
          window.history.back()
        }

      },
      mounted:function(){
        this.xiao1()
      }
    }


</script>

<style scoped>
.ziji{
  width: 100%;
}
.ziji_1{
  width: 100%;
  display: flex;
}
  .iconfont{
    font-size: 0.22rem;
    color: #2a2a2a;
    padding-top: 0.34rem;
    padding-left: 0.36rem;
  }
  .ziji_2{
    width: 100%;
    position: relative;
  }
  .lianxi{
    font-size: 0.26rem;
    color: #515151;
    padding-top: 0.31rem;
    padding-left: 0.36rem;
  }
  .jieguo{
    font-size: 0.14rem;
    color: #515151;
    padding-top: 0.11rem;
    padding-left: 0.36rem;
  }
  .gaikuang{
    font-size: 0.15rem;
    color: #515151;
    padding-top: 0.46rem;
    padding-left: 0.36rem;
  }
.xiala{
  position: absolute;
  right: 0.56rem;
  top: 0.65rem;
  width: 0.61rem;
  height: 0.61rem;
}
  .caidan{
    width: 100%;
  }
.yiji{
  display: flex;
  justify-content:space-between;
  align-items: center;
  width: 100%;
  padding-left: 0.36rem;
  height: 0.61rem;
}
  .xiao1{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.61rem;
    flex-wrap: wrap;
    border-bottom: 1px solid #e7e7e7;
    overflow: hidden;
  }
  .none{
    font-size: 0.155rem;
    color: #2e2e2e;
    padding-right: 0.25rem;
    padding-left: 0.36rem;
    line-height: 0.61rem;
    /*display: none;*/
  }
  .fangyuan{
    font-size: 0.155rem;
    color:  #2e2e2e;
  }
.xiala2{
  width: 0.11rem;
  height: 0.07rem;
  padding-right: 0.37rem;
}
.footer{
  width: 100%;

}
  .yiwen{
    font-size: 0.155rem;
    color:  #2e2e2e;
    padding-left: 0.36rem;
    padding-top: 0.255rem;
  }
  .anniu{
    width:3.25rem ;
    height: 0.435rem;
    border: 4px solid #016975;
    -webkit-border-radius: 9px;
    -moz-border-radius: 9px;
    border-radius: 9px;
    font-size: 0.13rem;
    color: #016975;
    line-height: 0.435rem;
    text-align: center;
    margin: 0 auto;
    margin-top: 0.13rem;
  }
</style>

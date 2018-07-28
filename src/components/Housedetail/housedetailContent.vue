<template>
<div class="content_1">
  <span class="biaoti">整套独户房间和独立房间</span>
  <h1 class="mingcheng">「双囍和八两」♡旅行<br>已经很累了，那就睡个好觉吧！</h1>
  <span class="dizhi">西安，陕西，中国</span>
  <br>
  <span class="fangdong">房东：榕</span>
  <img class="touxiang" src="../../assets/img/s_touxiang.png" alt="">
  <div class="content_2">
      <div v-for="n in xinxi" class="content_2_1">
        <img class="tu" :src="n.img" alt="">
        <span class="renshu">{{n.name}}</span>
      </div>
    <div class="jieshao">
      <span class="jieshao_1">点我头像进去还有另外两套房源</span>
      <span class="jieshao_2">我的房源位于西安老城区，又或者说我们位于所有景点的中间位置，公交直达各个景点楼...<a>阅读更多</a></span>
    </div>
  </div>
  <div class="content_3">
    <span class="chuangxing">床型信息</span>
    <div class="xiangxixinxi">
      <img class="xiangxichuang" src="../../assets/img/s_xiangxichuang.png" alt="">
      <span class="woshi1">卧室1</span>
      <span class="shuangrenchuang">1张双人床</span>
    </div>
    <span class="zuishao">最少1晚</span>
  </div>
  <div class="content_4">
      <span class="bianli">便利设施</span>
    <ul>
      <li>
        <i v-for="n in viewArr" :class="icon(n)" class="iconfont"></i>
        <span class="jiaer">+2</span>
      </li>
    </ul>

  </div>
  <img class="daditu" src="../../assets/img/s_ditu.png" alt="">
  <div class="content_5">
    <ul>
      <li v-for="i in shijian"><span>{{i.date}}</span><span>{{i.time}}</span></li>
    </ul>
  </div>
</div>
</template>

<script>
    export default {
        name: "housedetailContent",
      data(){
          return{

            kafei:true,
            wifi:true,
            thermometer_icon:true,
            xinxi:[
              {img:require("../../assets/img/s_renshu.png"),name:"最多住2人"},
              {img:require("../../assets/img/s_woshi.png"),name:"1间卧室"},
              {img:require("../../assets/img/s_chuang.png"),name:"1张床"},
              {img:require("../../assets/img/s_renshu.png"),name:"1个公共卫生间"}
            ],
            shijian:[
              { "date":"入住时间",
                "time":"14:00 - 23:00"
              },
              { "date":"退房时间",
                "time":"13:00"
              }
            ],
            viewArr:[
              "wifi",
              "maojin",
              "kafei",
              "yigui",
              "thermometer_icon",
            ]
          }
      },
      methods:{
        icon :  function (id){
          return "icon-"+id
        }
      }
    }
</script>

<style scoped>

  .content_1{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    position: relative;
  }
  .biaoti{
    font-size: 0.11rem;
    color: #4b3d21;
    font-weight: 600;
    padding-top: 0.26rem;
    padding-left: 0.25rem;
  }
  .mingcheng{
    font-size: 0.24rem;
    color: #323232;
    padding-left: 0.2rem;
  }
  .dizhi{
    font-size: 0.13rem;
    color: #242424;
    padding-top: 0.32rem;
    padding-left: 0.26rem;
    width: 100%;
    display: block;
    font-weight: 600;

  }
  .fangdong{
    font-size: 0.13rem;
    color: #242424;
    padding-top: 0.08rem;
    padding-left: 0.26rem;
    font-weight: 600;

  }
  .touxiang{
    width: 0.67rem;
    height: 0.67rem;
    position: absolute;
    right: 0.25rem;
    top: 1.29rem;
  }
  .content_2{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

  }
  .content_2_1{
    width: 50%;
    display: flex;
    height: 0.3rem;
    align-items: center;
  }
  .tu{
    width: 0.165rem;
    height: 0.145rem;
    padding-left: 0.25rem;
  }
  .renshu{
    font-size: 0.13rem;
    color: #3f3f3f;
  }
  .jieshao{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .jieshao_1{
    font-size: 0.13rem;
    color: #272727;
    padding-top: 0.27rem;
    padding-left: 0.26rem;
  }
  .jieshao_2{
    font-size: 0.13rem;
    color: #272727;
    padding-top: 0.27rem;
    margin-left: 0.26rem;
    margin-right: 0.33rem;
    padding-bottom: 0.28rem;
    border-bottom: 1px solid #cccccc;
  }
  a{
    color: #0d8b8f;
  }
  .content_3{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .chuangxing{
    font-size: 0.15rem;
    color: #333333;
    display: block;
    width: 100%;
    padding-top: 0.255rem;
    padding-left: 0.25rem;
    font-weight: 600;
  }
  .xiangxixinxi{
    border: 1px solid #999999;
    display: flex;
    flex-wrap: wrap;
    border-radius:5px;
    width: 2.135rem;
    height: 1.025rem;
    margin-top: 0.28rem;
    margin-left: 0.25rem;
  }
  .xiangxichuang{
    width: 0.27rem;
    height: 0.23rem;
    padding-left: 0.16rem;
    padding-top: 0.175rem;
  }
.woshi1{
  font-size: 0.13rem;
  color: #2b2b2b;
  display: block;
  padding-left: 0.16rem;
  width: 100%;
}
  .shuangrenchuang{
    font-size: 0.13rem;
    color: #2b2b2b;
    display: block;
    width: 100%;
    padding-left: 0.16rem;
  }
  .zuishao{
    font-size: 0.13rem;
    color: #2b2b2b;
    display: block;
    width: 100%;
    margin-left: 0.25rem;
    margin-right: 0.25rem;
    border-bottom: 1px solid #e7e7e7;
    padding-top: 0.503rem;
    padding-bottom: 0.26rem;
  }
  .content_4{
    width: 100%;
    display:flex;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-bottom: 0.36rem;
  }
  .bianli{
    font-size: 0.15rem;
    color: #1e1e1e;
    display: block;
    width: 100%;
    padding-top: 0.275rem;
    padding-bottom: 0.15rem;
  }
  .jiaer{
    font-size: 0.2rem;
    color: #008085;
    display: block;
    width: 0.29rem;
  }
  .iconfont{
    font-size: 0.29rem;
  }
  .daditu{
    width: 100%;
    height: 3.235rem;
  }
  .content_5{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  ul{
    width: 100%;

    margin-right:0.25rem;
    margin-left: 0.25rem;
  }
  li{
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 0.15rem;
    color: #545454;
    line-height: 0.685rem;
    border-bottom: 1px solid #e7e7e7;
  }

</style>

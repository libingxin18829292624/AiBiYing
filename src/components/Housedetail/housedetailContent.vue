<template>
<div class="content_1">
  <div class="chuan">
  <div class="content1" >
  <span class="biaoti">{{cityData.desc}}</span>
  <h1 class="mingcheng">{{cityData.houseTitle}}</h1>
  <div class="houseInfo">
    <div class="ownerInfo">
      <div class="info-left">
        <p class="dizhi" v-for="n in cityData.address">{{n}},</p>
      </div>
      <span class="fangdong">房东:{{cityData.ownerName}}</span>
    </div>
    <img class="touxiang" :src="cityData.ownerImg" alt="">
  </div>
  <div class="content_2">
      <div v-for="n in xinxi" class="content_2_1">
        <img class="tu" :src="n.img" alt="">
        <span class="renshu">{{cityData.rooms.bedroom}}{{n.name}}</span>
      </div>
  </div>
    <div class="jieshao" v-for="n in pinglun">
      <span class="jieshao_2">{{cityData.ownerWords}}<a> 阅读更多</a></span>
    </div>
  </div>
  <div class="content_3">
    <span class="chuangxing">床型信息</span>
    <div v-for="n in chuangwei" class="xiangxixinxi">
      <img class="xiangxichuang" :src="n.img" alt="">
      <span class="woshi1">{{n.woshi}}</span>
      <span class="shuangrenchuang">{{n.chuang1}}</span>
    </div>
    <span class="zuishao">最少1晚</span>
  </div>
  <router-link @click="chuancan(index)" to="/housedetailBianlisheshi" class="Link">
    <div  class="content_4">
    <span class="bianli">便利设施</span>
    <ul class="bianli-ul">
      <li>
        <i v-for="n in viewArr" :class="icon(n)" class="iconfont"></i>
        <span class="jiaer">+{{cityData.more}}</span>
      </li>
    </ul>

  </div>
  </router-link>
  <img class="daditu" :src="cityData.addressImg" alt="">
  <div class="content_5">
    <ul>
      <li ><span>入住时间</span><span>{{cityData.inTime}}</span></li>
      <li ><span>退房时间</span><span>{{cityData.outTime}}</span></li>
    </ul>
  </div>
  </div>
</div>
</template>

<script>
    export default {
      props:['shuju'],
        name: "housedetailContent",
      data(){
          return{
            allData:this.$store.state.allData,
            cityData:"",
            kafei:true,
            wifi:true,
            thermometer_icon:true,
            xinxi:[
              {img:require("../../assets/img/s_renshu.png"),name:"人最多同住"},
              {img:require("../../assets/img/s_woshi.png"),name:"间卧室"},
              {img:require("../../assets/img/s_chuang.png"),name:"张床"},
              {img:require("../../assets/img/s_renshu.png"),name:"个公共卫生间"}
            ],
            shijian:[
              { "date":"入住时间",
                "time":"14:00 - 23:00"
              },
              { "date":"退房时间",
                "time":"13:00"
              }
            ],
            chuangwei:[
              {
                img:require("../../assets/img/s_xiangxichuang.png"),
                woshi:"卧室1",
                chuang1:"1张双人床"
              }
            ],
            imgs:[
              {img:require("../../assets/img/s_ditu.png")}
            ],
            viewArr:[
              "wifi",
              "maojin",
              "kafei",
              "yigui",
              "thermometer_icon",
            ],
            xiangqing:[
              {
                biaoti:"整套独户房间和独立房间",
                mingcheng:"「双囍和八两」♡旅行已经很累了，那就睡个好觉吧！",
                dizhi:"西安，陕西，中国",
                fangdong:"榕",
                img:require("../../assets/img/s_touxiang.png")
              },
              ],
            pinglun:[
              {
                jieshao_2:"我的房源位于西安老城区，又或者说我们位于所有景点的中间位置，公交直达各个景点楼.."
              }
            ],
          }
      },
      created () {
        this.cityData = this.allData[this.shuju.city][this.shuju.index];
      },
      methods:{
        icon :  function (id){
          return "icon-"+id
        },
      },
      mounted(){

        console.log(this.cityData)
      }
    }
</script>

<style scoped>
body{
  background: #fff;
}
  .content1{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    padding: 0 .25rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

  }
  .content_1{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    position: relative;
  }
  .biaoti{
    width: 100%;
    display: block;
    font-size: 0.11rem;
    color: #4b3d21;
    font-weight: 600;
    padding-top: 0.26rem;
  }
  .mingcheng{
    width: 100%;
    font-size: 0.24rem;
    color: #323232;
  }
  .dizhi{
    font-size: 0.13rem;
    color: #242424;
    padding-top: 0.2rem;
    font-weight: 100;
    height: 0.2rem;
  }
  .fangdong{
    font-size: 0.13rem;
    color: #242424;
    display: block;
    margin: .4rem 0;
  }
  .houseInfo{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .ownerInfo{
    display: flex;
    flex-direction: column;
  }
  .info-left{
    display: flex;
  }
  .touxiang{
    width: 0.67rem;
    height: 0.67rem;
    display: block;
  }
  .content_2{
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;

  }
  .content_2_1{
    width: 50%;
    display: flex;
    float: left;
    height: 0.3rem;
    align-items: center;
  }
  .tu{
    width: 0.165rem;
    height: 0.145rem;
    margin-right: .05rem;
    display: block;
  }
  .renshu{
    font-size: 0.13rem;
    color: #3f3f3f;
    display: block;
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
    display: block;
    width: 100%;
    font-size: 0.13rem;
    color: #272727;
    padding-top: 0.27rem;
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
    padding: 0 .25rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .chuangxing{
    font-size: 0.15rem;
    color: #333333;
    display: block;
    width: 100%;
    padding-top: 0.255rem;
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
  }
  .xiangxichuang{
    width: 0.27rem;
    height: 0.23rem;
    padding-left: 0.16rem;
    padding-top: 0.175rem;
  }
  .Link{
    width: 100%;
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
    border-bottom: 1px solid #e7e7e7;
    padding-top: 0.503rem;
    padding-bottom: 0.26rem;
  }
  .content_4{
    width: 100%;
    display:flex;
    box-sizing: border-box;
    padding-right: 0.25rem;
    padding-left: 0.25rem;
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
  .bianli-ul{
    margin: 0;
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
    padding: 0 .25rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  ul{
    width: 100%;
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

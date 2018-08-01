<template>
<div class="pingjia">
  <div class="pingjia1">
   <span class="ping">评价</span>
  </div>
  <div class="pingjia_1">
    <div class="pingjia-xinxi">
      <img :src="cityData.rate.img" alt="">
      <span class="xingming">{{cityData.rate.name}}</span>
      <p class="time">{{cityData.rate.time}}</p>
    </div>
    <div class="pinglun">
      <span class="pinglun1"><a>翻译 </a>{{cityData.rate.content}}</span>
    </div>
  </div>
  <div class="gengduopingjia">
    <span>阅读全部146条评价</span>
    <div class="xing">
    <i class="iconfont icon-star"></i>
    <i class="iconfont icon-star"></i>
    <i class="iconfont icon-star"></i>
    <i class="iconfont icon-star"></i>
    <i class="iconfont icon-star"></i>
    </div>
  </div>
  <div class="pinglun2" v-for="n in fangdong">
    <span>{{cityData.ownerName}}是位超赞的房东.超赞房东经验丰富、评分很高，他们致力于为访客提供优质的住宿体验</span>
    <div class="imgs"><img src="../../assets/img/s_huizhang.png" alt=""></div>
  </div>
</div>
</template>

<script>

    export default {
      props:['shuju'],
        name: "housedetailEvaluate",
      created () {
        this.cityData = this.allData[this.shuju.city][this.shuju.index];
      },
      data(){
          return{
            allData:this.$store.state.allData,
            cityData:"",
            fangdong:[
              {person:"榕"}
            ]
          }
      }
    }
</script>

<style scoped>
 .pingjia{
   width: 100%;
   display: flex;
   flex-wrap: wrap;
 }
 .pingjia1{
   width: 100%;
   height: 0.7rem;
   display: flex;
   margin-left: 0.25rem;
   margin-right: 0.25rem;
   line-height: 0.7rem;
   flex-wrap: wrap;
 }
  .ping{
    font-size: 0.14rem;
    color: #2c2c2c;
  }
 .pingjia-xinxi{
   width:100%;
   height: 0.8rem;
   display: flex;
   align-items: center;
   -webkit-box-sizing: border-box;
   -moz-box-sizing: border-box;
   box-sizing: border-box;
   margin-right: 0.25rem;
 }
  .pingjia-xinxi img{
    width: 0.51rem;
    height: 0.5rem;
    padding-left: 0.25rem;
  }
  .xingming{
    font-size: 0.12rem;;
    color: #272727;
    font-weight: 600;
    padding-left: 0.22rem;
  }

  .time{
    font-size: 0.08rem;
    color: #272727;
    padding-left: 0.22rem;
  }
  .pinglun{
    width: 100%;
    display: flex;
  }
  .pinglun1{
    font-size:0.13rem;
    color: #333333;
    line-height: 0.27rem;
    padding-top: 0.19rem;
    padding-bottom: 0.38rem;
    padding-right: 0.25rem;
    padding-left: 0.25rem;
    box-sizing: border-box;
  }
  a{
    color: #008085;
  }
 .gengduopingjia{
   width: 100%;
   height: 0.41rem;
   margin: 0 0.25rem;
   border-bottom: 1px solid #e6e6e6;
   display: flex;
   justify-content: space-between;
 }
  .gengduopingjia span{
    font-size: 0.145rem;
    color: #008085;
  }
  .xing{
    width: 30%;
    display: flex;
    padding-left: 0.2rem;
  }
  .iconfont{
    color: #008085;
    font-size: 0.1rem;
    padding-top: 0.02rem;
  }
  .pinglun2{
    width: 100%;
    height:1.06rem ;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0.25rem;
    border-bottom: 1px solid #e6e6e6;

  }
  .pinglun2 span{
    font-size: 0.14rem;
    line-height:0.2rem;
    flex-shrink: 1;
  }
  .pinglun2 img{
    width: 0.3rem;
    height: 0.51rem;
    display: block;
    flex-shrink: 1;
  }
  .imgs{
    width: 0.3rem;
    height: 0.51rem;

  }
</style>

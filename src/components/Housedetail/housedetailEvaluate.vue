<template>
<div class="pingjia">
  <div class="pingjia1">
   <span class="ping">评价</span>
  </div>
  <div class="pingjia-xinxi">
    <img src="../../assets/img/s_touxiang1.png" alt="">
  </div>
  <div class="jieshao">
    <span class="xingming">亚荣</span>
    <span class="time">2018年7月</span>
  </div>
  <div class="pinglun">
    <span class="pinglun1"><a>翻译</a> 小姐姐说话特别温柔，房间里也很干净，我觉得这次入住还蛮不错的哦，姐姐家离市里景区都不远，很方便</span>
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
  <div class="pinglun2">
    <span>榕是位超赞的房东.超赞房东经验丰富、评分很高，他们致力于为访客提供优质的住宿体验</span>
    <div class="imgs"><img src="../../assets/img/s_huizhang.png" alt=""></div>
  </div>
</div>
</template>

<script>

    export default {
        name: "housedetailEvaluate",
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
   width: 14%;
   height: 0.5rem;
   display: flex;
   margin-left: 0.25rem;
   flex-wrap: wrap;
   align-items: center;
 }
  .pingjia-xinxi img{
    width: 0.51rem;
    height: 0.5rem;
  }
  .xingming{
    font-size: 0.12rem;;
    color: #272727;
    display: block;
    width: 100%;
    font-weight: 600;
  }
  .jieshao{
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    float: right;
    padding-left: 0.17rem;
  }
  .time{
    font-size: 0.08rem;
    color: #272727;

  }
  .pinglun{
    width: 100%;
    margin-left: 0.25rem;
    margin-right: 0.25rem;
    display: flex;
  }
  .pinglun1{
    font-size:0.13rem;
    color: #333333;
    line-height: 0.27rem;
    padding-top: 0.19rem;
    padding-bottom: 0.38rem;
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

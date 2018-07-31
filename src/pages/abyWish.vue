<template>
  <div class="wish">
    <div class="title">
      <h1>心愿单</h1>
    </div>
  <div class="content">
      <p>如果看到了喜欢的东西，您可以轻点心形图标将其保存。如果您计划和其他人一起出行，也可以邀请他们一起来看看，选出各自的最爱。</p>
  </div>
    <div class="kuai"  v-for="n in houselist" :key='n.pic'>
      <div class="kuai-top">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img :src="n.pic1" alt=""></div>
            <div class="swiper-slide"><img :src="n.pic2" alt=""></div>
            <div class="swiper-slide"><img :src="n.pic3" alt=""></div>
            <div class="swiper-slide"><img :src="n.pic4" alt=""></div>
            <div class="swiper-slide"><img :src="n.pic5" alt=""></div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="kuai-bottom">
        <div class="bottom-left">
          <p>{{n.huxing}}</p>
          <p>{{n.title}}</p>
          <p>{{n.jiage}}</p>
          <p><i class="iconfont icon-star"></i><i class="iconfont icon-star"></i><i class="iconfont icon-star"></i><i class="iconfont icon-star"></i><i class="iconfont icon-star"></i>  &nbsp;&nbsp;{{n.star}} </p>
        </div>
      </div>
    </div>
    <div class="footer">
      <a href="#">开始探索</a>
    </div>
  </div>
</template>

<script>
  import Swiper from "Swiper"
    export default {
        name: "abyWish",
      data(){
        return{
          houselist:[
            {
              pic1:"/src/assets/img/hll-house1.1.jpg",
              pic2:"/src/assets/img/hll-house1.2.jpg",
              pic3:"/src/assets/img/hll-house1.3.jpg",
              pic4:"/src/assets/img/hll-house1.4.jpg",
              pic5:"/src/assets/img/hll-house1.5.jpg",
              huxing:"独立房间·1室1卫1床",
              title:"[双囍和八两]❤❤❤远方的家——不赶路，只感受",
              jiage:"￥ 142 每晚·免费取消预订",
              star:"146",
            },
          ]
        }
      },
      mounted(){
        var mySwiper = new Swiper ('.swiper-container', {
          pagination: {
            el: '.swiper-pagination',

            type: 'bullets',

            dynamicBullets: true,
          },

        })
      },

    }
</script>

<style scoped>
.title{
  width: 100%;
}
.title h1{
  font-size: 0.23rem;
   color: #3a3a3a;
  padding-top: 0.65rem;
  padding-left: 0.26rem;
 }
  .content{
    width: 100%;
  }
  .content p{
    font-size: 0.13rem;

    padding-left: 0.25rem;
    padding-right: 0.25rem;
    color: #373737;
    padding-top:0.575rem ;
  }
  .footer{
    width: 100%;
  }
  .footer a{
    font-size:0.13rem;
    color: #007479;
    padding-top: 0.55rem;
    padding-left: 0.25rem;
  }
.content{
  width: 100%;
  height: 100%;
  text-align: center;
}
.kuai{
  padding-top: 0.27rem;
  padding-left:0.25rem;
  padding-right:0.25rem;
  box-sizing: border-box;
}

.kuai-top{
  position: relative;
  height:2.17rem;
  border-radius: 5px;
}
.icon-xihuan2{
  display: block;
  position: absolute;
  top:0.1rem;
  right:0.18rem;
  z-index: 999;
  font-size: 0.28rem;
  color:white;
  opacity: 0.9;
}
.swiper-container{
  width:100%;
  height:100%;
}
.swiper-wrapper{
  width:100%;
  height:100%;
}
.swiper-slide {
  width:100%;
  height:100%;
}
.swiper-slide img{
  width:100%;
  height: 100%;
}
/* .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
    bottom: -18px;
    left: 0;
    width: 100%;
}*/
.swiper-pagination-bullet-active {
  opacity: 1;
  background: white;
}
.swiper-pagination-bullet {
  background: white;
  opacity: 1;}
.kuai-bottom{

  margin-top:0.18rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.bottom-left{
  width:2.55rem;
}
.bottom-left p:nth-child(1){
  font-size: 0.1rem;
  color:#686868;
}
.bottom-left p:nth-child(2){
  font-size: 0.16rem;
  color:#323232;
  font-weight: 600;
}
.bottom-left p:nth-child(3){
  font-size: 0.13rem;
  color:#505050;
  line-height: 0.21rem;
}
.kuai-bottom img{
  width:0.5rem;
  height:0.5rem;
}
.bottom-left p:nth-child(4){
  font-size: 0.09rem;
  color:#383838;
  display: flex;
  line-height: 0.18rem;
}
.icon-star{
  font-size: 0.1rem;
  color:#008287;
}


</style>

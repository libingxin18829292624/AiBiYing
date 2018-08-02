<template>
  <div class="kuai-body">
    <div class="kuai" v-for="(n,index) in data" @click="into(index,$event)">
      <div class="kuai-top">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="m in n.imgs" :key="m.ll"><img :src="m" alt=""></div>
            <div class="swiper-slide"><img :src="n.pic2" alt=""></div>
            <div class="swiper-slide"><img :src="n.pic3" alt=""></div>
            <div class="swiper-slide"><img :src="n.pic4" alt=""></div>
            <div class="swiper-slide"><img :src="n.pic5" alt=""></div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
        <i class="iconfont icon-xihuan2"></i>
      </div>
      <div class="kuai-bottom">
        <div class="bottom-left">
          <p>{{n.desc}}</p>
          <p>{{n.houseTitle}}</p>
          <p>￥ {{n.price}} 每晚·免费取消预订</p>
          <p><i class="iconfont icon-star"></i><i class="iconfont icon-star"></i><i class="iconfont icon-star"></i><i
            class="iconfont icon-star"></i><i class="iconfont icon-star"></i> </p>
        </div>
        <img :src="n.ownerImg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from "swiper"
  import $ from "jquery"

  export default {
    props: ['data','city'],
    name: "houselistBody",
    data() {
      return {}
    },
    methods: {
      into(index,$event) {
        if($('.icon-xihuan2').index($event.target) < 0) {
          this.$store.state.addressInfo.city = this.city;
          this.$store.state.addressInfo.index = index;
          this.$router.push({
            path:'/housedetail',
            query:{
              city:this.city,
              index:index
            }
          })
        }
      }
    },
    mounted() {
      var mySwiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          dynamicBullets: true,
        },
      })


      var a = 0
      $(".kuai-top").find("i").click(function () {

        a++
        if (a % 2 == !0) {
          $(this).addClass("icon-hongxin")
          $(this).css({animation: "hongxinchange 0.5s 1"})
          $(".kuai-body").append("<b>向xi'an添加一个房子</b>")
        } else if (a % 2 == 0) {
          $(this).removeClass("icon-hongxin")
          $(this).css({animation: "hongxinchange2 0.5s 1"})
          $(".kuai-body").find("b").replaceWith("<b>从xi'an移除一个房子</b>")
        }


        $(".kuai-body").find("b").animate({

          lineHeight: "0.24rem",

        }, 1000, function () {
          setTimeout(function () {
            $(".kuai-body").find("b").css({display: "none"})
          }, 1000)
        })
      })


    },


  }
</script>

<style scoped="scoped">

  .kuai-body b {
    display: block;
    position: fixed;
    bottom: 0.6rem;
    left: 0rem;
    font-size: 0.13rem;
    color: black;
    font-weight: 100;
    z-index: 999;
    background: #c8c8ca;
    text-align: center;
    width: 100%;
    line-height: 0.24rem;
  }

  .kuai {
    padding-top: 0.27rem;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    box-sizing: border-box;
  }

  .kuai-top {
    position: relative;
    height: 2.17rem;
    border-radius: 5px;
  }

  .icon-xihuan2 {
    display: block;
    position: absolute;
    top: 0.1rem;
    right: 0.18rem;
    z-index: 999;
    font-size: 0.28rem;
    color: white;
    opacity: 0.9;
  }

  .icon-hongxin {
    display: block;
    position: absolute;
    top: 0.13rem;
    right: 0.2rem;
    z-index: 999;
    font-size: 0.25rem;
    color: red;
    opacity: 0.9;
  }

  .swiper-container {
    width: 100%;
    height: 100%;
  }

  .swiper-wrapper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    width: 100%;
    height: 100%;
  }

  .swiper-slide img {
    width: 100%;
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
    opacity: 1;
  }

  .kuai-bottom {

    margin-top: 0.18rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .bottom-left {
    width: 2.55rem;
  }

  .bottom-left p:nth-child(1) {
    font-size: 0.1rem;
    color: #686868;
    line-height: .15rem;
  }

  .bottom-left p:nth-child(2) {
    font-size: 0.16rem;
    color: #323232;
    font-weight: 600;
    line-height: .25rem;
  }

  .bottom-left p:nth-child(3) {
    font-size: 0.13rem;
    color: #505050;
    line-height: 0.21rem;
  }

  .kuai-bottom img {
    width: 0.5rem;
    height: 0.5rem;
  }

  .bottom-left p:nth-child(4) {
    font-size: 0.09rem;
    color: #383838;
    display: flex;
    line-height: 0.18rem;
  }

  .icon-star {
    font-size: 0.1rem;
    color: #008287;
  }

  @keyframes hongxinchange {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.7);
    }
    20% {
      transform: scale(0.5);
    }
    30% {
      transform: scale(1);
    }
    40% {
      transform: scale(1.2);
    }
    50% {
      transform: scale(1.4);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes hongxinchange2 {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.7);
    }
    20% {
      transform: scale(0.5);
    }
    30% {
      transform: scale(1);
    }
    40% {
      transform: scale(1.2);
    }
    50% {
      transform: scale(1.4);
    }
    100% {
      transform: scale(1);
    }
  }
</style>

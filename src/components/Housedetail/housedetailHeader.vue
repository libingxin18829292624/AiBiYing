<template>
    <div class="header">
      <div class="lunbo">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="h in cityData.imgs"><img :src="h" alt=""></div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div id="searchBar" class="header_2">
      <i  @click="goBack" class="iconfont1 iconfont icon-houtui"></i>
      <i @click="red();wei()" :class="{'icon-xin':isA,'icon-hongxin':!isA}" class="iconfont2 iconfont"></i>
      </div>
      <div class="box">已保存到Captain Cook中</div>
    </div>
</template>

<script>
  import $ from "jquery"
  import Swiper from "swiper"
    export default {
    props:['shuju'],
      name: "HousedetailHeader",
      data(){
        return{
          isA:true,
          allData:this.$store.state.allData,
          cityData:""
        }
      },
      created () {
        this.cityData = this.allData[this.shuju.city][this.shuju.index];
        window.addEventListener('scroll', this.handleScroll)
      },
      mounted(){
        var mySwiper = new Swiper ('.swiper-container', {
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            dynamicBullets: true,
          }
        });
      },
      methods: {
        red:function(){
          this.isA=!this.isA
        },
        wei:function(){
          $(".box").animate({
            bottom:"0.9rem",
          },400)
        },
          goBack:function (){
            window.history.back()
          },


        handleScroll () {
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          var offsetTop = document.querySelector('#searchBar').offsetTop;

          if(scrollTop<=0){
            offsetTop = 0- Number(scrollTop);
            document.querySelector('#searchBar').style.top = offsetTop+'0rem';
            document.querySelector('#searchBar').style.background = 'none';
            document.querySelector('.iconfont1').style.color = '#fff';
            document.querySelector('.iconfont2').style.color = '#fff';

          }else if(scrollTop>=2.285){
            document.querySelector('#searchBar').style.top = '0rem';
            document.querySelector('#searchBar').style.background = '#fff';
            document.querySelector('.iconfont1').style.color = '#000';
            document.querySelector('.iconfont2').style.color = '#ff0000';
          }
        },
      },
      destroyed () {//离开该页面需要移除这个监听的事件
        window.removeEventListener('scroll', this.handleScroll)
      },
      }

</script>

<style scoped>
  .header{
    width: 100%;
    height: 2.2rem;
    background-size:100%;
    display: flex;

  }
  .header_2{
    width: 100%;
    height: 0.7rem;
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 999;
    justify-content: space-between;
    transition: all .5s;
  }
  .iconfont{
    font-size: 0.25rem;
  }
  .iconfont1{
    padding-left: 0.25rem;
  }
  .iconfont2{
    padding-right: 0.25rem;
  }
  .lunbo{
    width: 100%;
    height: 2.2rem;
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
  .icon-hongxin{
    color: red!important;
  }
  .box{
    width: 100%;
    position: fixed;
    bottom: 0.5rem;
    background: #fff;
    border-top: 1px solid #ddd;
    font-size: 0.15rem;
    text-align: center;
    line-height: 0.4rem;
    height: 0.4rem;
    color: #008186;
    z-index: 900;
    transition:all .4ms;

    padding-right: 0.25rem;
  }

</style>

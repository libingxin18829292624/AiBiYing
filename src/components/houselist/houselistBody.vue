<template>
    <div class="kuai">
        <div class="kuai-top">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"></div>
                    <div class="swiper-slide"></div>
                    <div class="swiper-slide"></div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper"
export default {
    name:"houselistBody",
    data(){
        return{

        }
    },
    mounted(){
        var mySwiper = new Swiper ('.swiper-container', {
  	        pagination: {
            el: '.swiper-pagination',
    
            type: 'bullets',
    
        
        },

        })    
    },
}
</script>

<style>
.kuai-top{
    position: relative;
    width:3.26rem;
    height:2.17rem;
    border-radius: 5px; 
    margin:0.27rem auto 0;
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
.swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
    bottom: -18px;
    left: 0;
    width: 100%;
}
.swiper-pagination-bullet-active {
    opacity: 1;
    background: #00757b;
}
</style>

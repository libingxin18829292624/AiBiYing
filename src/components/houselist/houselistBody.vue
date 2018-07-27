<template>
<div>
    <div class="kuai"  v-for="n in houselist" :key='n.pic'>
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
        <div class="kuai-bottom">
            <div class="bottom-left">
                <p>{{n.huxing}}</p>
                <p>{{n.title}}</p>
                <p>{{n.jiage}}</p>
                <p><i class="iconfont icon-star"></i><i class="iconfont icon-star"></i><i class="iconfont icon-star"></i><i class="iconfont icon-star"></i><i class="iconfont icon-star"></i>  &nbsp;&nbsp;{{n.star}} </p>
            </div>
            <img :src="n.touxiang" alt="">
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
             houselist:[
                {
                    pic1:"",
                    pic2:"",
                    pic3:"",
                    pic4:"",
                    huxing:"独立房间·1室1卫1床",
                    title:"[双囍和八两]❤❤❤远方的家——不赶路，只感受",
                    jiage:"￥ 142 每晚·免费取消预订",
                    star:"146",
                    touxiang:"/src/assets/img/l1.png",
                },
                 {
                    pic1:"",
                    pic2:"",
                    pic3:"",
                    pic4:"",
                    huxing:"独立房间·1室1卫1床",
                    title:"[双囍和八两]❤❤❤远方的家——不赶路，只感受",
                    jiage:"￥ 142 每晚·免费取消预订",
                    star:"146",
                    touxiang:"/src/assets/img/l1.png",
                },
                 {
                    pic1:"",
                    pic2:"",
                    pic3:"",
                    pic4:"",
                    huxing:"独立房间·1室1卫1床",
                    title:"[双囍和八两]❤❤❤远方的家——不赶路，只感受",
                    jiage:"￥ 142 每晚·免费取消预订",
                    star:"146",
                    touxiang:"/src/assets/img/l1.png",
                },
                 {
                    pic1:"",
                    pic2:"",
                    pic3:"",
                    pic4:"",
                    huxing:"独立房间·1室1卫1床",
                    title:"[双囍和八两]❤❤❤远方的家——不赶路，只感受",
                    jiage:"￥ 142 每晚·免费取消预订",
                    star:"146",
                    touxiang:"/src/assets/img/l1.png",
                },
                 {
                    pic1:"",
                    pic2:"",
                    pic3:"",
                    pic4:"",
                    huxing:"独立房间·1室1卫1床",
                    title:"[双囍和八两]❤❤❤远方的家——不赶路，只感受",
                    jiage:"￥ 142 每晚·免费取消预订",
                    star:"146",
                    touxiang:"/src/assets/img/l1.png",
                },
            ]
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
.kuai{
    padding-top: 0.27rem;
}

.kuai-top{
    position: relative;
    width:3.26rem;
    height:2.17rem;
    border-radius: 5px; 
    margin:0 auto 0;
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
.kuai-bottom{
     width:3.26rem;
     margin:0.18rem auto 0;
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

<template>
<div>
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
            <i class="iconfont icon-xihuan2"></i>
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
                    pic1:"/src/assets/img/hll-house1.1.jpg",
                    pic2:"/src/assets/img/hll-house1.2.jpg",
                    pic3:"/src/assets/img/hll-house1.3.jpg",
                    pic4:"/src/assets/img/hll-house1.4.jpg",
                    pic5:"/src/assets/img/hll-house1.5.jpg",
                    huxing:"独立房间·1室1卫1床",
                    title:"[双囍和八两]❤❤❤远方的家——不赶路，只感受",
                    jiage:"￥ 142 每晚·免费取消预订",
                    star:"146",
                    touxiang:"/src/assets/img/l1.png",
                },
                 {
                    pic1:"/src/assets/img/hll-house2.1.jpg",
                    pic2:"/src/assets/img/hll-house2.2.jpg",
                    pic3:"/src/assets/img/hll-house2.3.jpg",
                    pic4:"/src/assets/img/hll-house2.4.jpg",
                    pic5:"/src/assets/img/hll-house2.2.jpg",
                    huxing:"独立房间·1室1卫1床",
                    title:"{素心禅隐}市中心地铁旁，10分钟内到达南门城墙/钟楼/回民街",
                    jiage:"￥ 109 每晚·免费取消预订",
                    star:"102",
                    touxiang:"/src/assets/img/hll-housetx.jpg",
                },
                 {
                    pic1:"/src/assets/img/hll-house3.1.jpg",
                    pic2:"/src/assets/img/hll-house3.2.jpg",
                    pic3:"/src/assets/img/hll-house3.3.jpg",
                    pic4:"/src/assets/img/hll-house3.4.jpg",
                    pic5:"/src/assets/img/hll-house3.5.jpg",
                    huxing:"整套公寓·1室1卫2床",
                    title:"钟楼/鼓楼/回民街/城墙步行到达精美公寓8,旅游度假首选",
                    jiage:"￥ 170 每晚·免费取消预订",
                    star:"129",
                    touxiang:"/src/assets/img/l1.png",
                },
                 {
                    pic1:"/src/assets/img/hll-house4.1.jpg",
                    pic2:"/src/assets/img/hll-house4.2.jpg",
                    pic3:"/src/assets/img/hll-house4.5.jpg",
                    pic4:"/src/assets/img/hll-house4.4.jpg",
                    pic5:"/src/assets/img/hll-house4.5.jpg",
                    huxing:"整套公寓·单间1卫1床",
                    title:"【A-Way民宿】长安很开心遇见你",
                    jiage:"￥ 218 每晚·免费取消预订",
                    star:"60",
                    touxiang:"/src/assets/img/hll-housetx.jpg",
                },
                 {
                    pic1:"/src/assets/img/hll-house5.1.jpg",
                    pic2:"/src/assets/img/hll-house5.2.jpg",
                    pic3:"/src/assets/img/hll-house5.3.jpg",
                    pic4:"/src/assets/img/hll-house5.4.jpg",
                    pic5:"/src/assets/img/hll-house5.5.jpg",
                    huxing:"独立房间·1室1卫1床",
                    title:"【一木一宿】NO.4市中心地铁旁近钟楼 北欧森系自然风温馨文艺小屋",
                    jiage:"￥ 300 每晚·免费取消预订",
                    star:"131",
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
    
            dynamicBullets: true,
        },

        })    
    },
}
</script>

<style>
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

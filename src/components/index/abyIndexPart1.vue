<template>
    <div>
        <div class="tansuo">
    <h2>探索爱彼迎</h2>
    <div class="tansuoNav">
        <ul>
            <li><a href="#"><img src="/src/assets/img/1.jpg" alt=""><p>房源</p></a></li>
            <li><a href="#"><img src="/src/assets/img/2.jpg" alt=""><p>餐馆</p></a></li>
            <li><a href="#"><img src="/src/assets/img/3.jpg" alt=""><p>体验</p></a></li>
     
        </ul>
    </div>
</div>

<div class="picpart1">
    <div class="piccont">
        <img src="/src/assets/img/picbg.png" alt="">
        <h2>你的盛夏之旅 遇到意想不到的惊喜</h2>
        <a href="#">最高￥300首单礼</a>
    </div>
</div>
    </div>
</template>

<script>
export default {
    name:"abyIndexPart1",
    data(){
        return{

        }
    }
}
</script>

<style>
.tansuo{
    width: calc(100% - 0.3rem);
    height: 2.3rem;
    padding-left: 0.3rem;
    margin-top: 1.3rem;
     box-sizing: border-box;

}
.tansuo h2{
    font-size: 0.2rem;
    color: #141414;
    margin-top: 0.8rem;
    
    margin-bottom: 0.35rem;
}
.tansuoNav{
    width: 100%;
    height:1.31rem ;
    
}
.tansuoNav ul{
    white-space: nowrap;
    overflow-x: scroll;
    width: 100%;
    height: 1.31rem;
    display: flex;
}
.tansuoNav ul li{
    flex-shrink: 0;
    width: 1.29rem;
    height: 1.31rem;
    box-shadow: -1px 1px 12px -1px;
    border-radius: 5px;
    box-sizing: border-box;
    margin-right: 0.2rem;
    z-index: 1;
}
.tansuoNav ul li a{
    display: flex;
    flex-direction: column;

}
.tansuoNav ul li a img{
    width: 1.29rem;
    border-radius: 5px;
}

.tansuoNav ul li a p{
    font-size: 0.12rem;
    color: #141414;
    padding: 0.12rem;
}



/* picpart1 */
.picpart1{
    width: 100%;
    height: 3.66rem;

    
}
.piccont{
    margin: 0.13rem 0.16rem;
    font-size: 0.13rem;
    width: 3.4rem;
    height: 3.4rem;
     position: relative;
  
}
.piccont img{
 width: 3.4rem;
 height: 3.4rem;
}
.piccont h2{
    font-size: 0.2rem;
    color: #fff;
    position: absolute;
    width: 2.4rem;
    left: 0.15rem;
    bottom:0.85rem;
}
.piccont a{
    color: #fff;
    padding: 0.15rem 0.22rem;
    position: absolute;
    left: 0.15rem;
    bottom:0.15rem;
    border: 1px solid #fff;
    border-radius: 5px;
    overflow: hidden;
}
</style>

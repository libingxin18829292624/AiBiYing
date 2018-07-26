<template>
    <div>
        <div class="fangyuan">
    <div class="plusfangyuan">
            <h2>诚意推出爱彼迎Plus</h2>
            <p>品质和舒适性经过验证的精选房源</p>
        <div class="liulan">
            <a href="#">浏览 Plus 房源  ></a>
        </div>
    </div>
    <div class="globfangyuan">
        <h2>全球房源</h2>
        <div class="fangyuanBox">
            <ul>
                <li>
                   <div class="Fcontop">
                         <i class="iconfont icon-xihuan2"></i>
                   </div>
                    <p>整套公寓.哥本哈根</p>
                    <h4>penthouse, 4-5 rooms + 5 balconies</h4>
                    <h3>￥1586每晚.免费取消预订</h3>
                    <div class="starsBox">
                            <i class="iconfont icon-star"></i>
                            <i class="iconfont icon-star"></i>
                            <i class="iconfont icon-star"></i>
                            <i class="iconfont icon-star"></i>
                            <i class="iconfont icon-xingxingbange"></i>
                            <span>347</span>
                    </div>
                </li> 
                <li>
                        <div class="Fcontop">
                              <i class="iconfont icon-xihuan2"></i>
                        </div>
                         <p>整套公寓.哥本哈根</p>
                         <h4>penthouse, 4-5 rooms + 5 balconies</h4>
                         <h3>￥1586每晚.免费取消预订</h3>
                         <div class="starsBox">
                                 <i class="iconfont icon-star"></i>
                                 <i class="iconfont icon-star"></i>
                                 <i class="iconfont icon-star"></i>
                                 <i class="iconfont icon-star"></i>
                                 <i class="iconfont icon-xingxingbange"></i>
                                 <span>347</span>
                         </div>
                     </li> 
                     <li>
                            <div class="Fcontop">
                                  <i class="iconfont icon-xihuan2"></i>
                            </div>
                             <p>整套公寓.哥本哈根</p>
                             <h4>penthouse, 4-5 rooms + 5 balconies</h4>
                             <h3>￥1586每晚.免费取消预订</h3>
                             <div class="starsBox">
                                     <i class="iconfont icon-star"></i>
                                     <i class="iconfont icon-star"></i>
                                     <i class="iconfont icon-star"></i>
                                     <i class="iconfont icon-star"></i>
                                     <i class="iconfont icon-xingxingbange"></i>
                                     <span>347</span>
                             </div>
                         </li> 
                         <li>
                                <div class="Fcontop">
                                      <i class="iconfont icon-xihuan2"></i>
                                </div>
                                 <p>整套公寓.哥本哈根</p>
                                 <h4>penthouse, 4-5 rooms + 5 balconies</h4>
                                 <h3>￥1586每晚.免费取消预订</h3>
                                 <div class="starsBox">
                                         <i class="iconfont icon-star"></i>
                                         <i class="iconfont icon-star"></i>
                                         <i class="iconfont icon-star"></i>
                                         <i class="iconfont icon-star"></i>
                                         <i class="iconfont icon-xingxingbange"></i>
                                         <span>347</span>
                                 </div>
                             </li> 
            </ul>



        </div>
<div class="showall">
     <a href="#">显示全部(2000+)</a>
</div>





    </div>
    

    </div>
    </div>
</template>

<script>
export default {
    name:"abyIndexPart2",
    data(){
        return{

        }
    }
}
</script>

<style>
.fangyuan{
    width: calc(100% - 0.5rem);
    padding: 0 0.25rem;
   
    overflow: hidden;
}

.plusfangyuan{
    width: 100%;
    height: 3.68rem;
}
.plusfangyuan h2{
    font-size: 0.2rem;
    color: #424242;
    margin-top: 0.32rem;
    margin-bottom: 0.14rem;
}

.plusfangyuan p{
    font-size: 0.13rem;
    color: #4b4b4b;
    margin-bottom: 0.27rem;
}
.liulan{
    width: 100%;
    height: 2.58rem;
    background: gray;
    font-size: 0.11rem;
    position: relative;
    text-align: center;
}
.liulan a{
    padding: 0.2rem 0.25rem;
    color: #424242;
    border: 1px solid #e3e5e3;
    border-radius: 5px;
    position: absolute;
    bottom: 0.39rem;
    left: 0.85rem;
}

.globfangyuan{
    width: 100%;
    height: 100%;
}
.globfangyuan h2{
    font-size: 0.2rem;
    color: #424242;
    margin-bottom: 0.27rem;
}
/* fangyuanBox */
.fangyuanBox{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.fangyuanBox ul li{
    width: 1.55rem;
    height: 2.5rem;
    margin-right: 0.074rem;
    float: left;
}
.Fcontop{
    width: 1.55rem;
    height: 1.04rem;
    background: yellow;
    position: relative;
    margin-bottom: 0.13rem;
    border-radius: 5px;
}
.Fcontop .icon-xihuan2{
    font-size: 0.21rem;
    color: #fff;
    position: absolute;
    top: 0.13rem;
    right: 0.12rem;
    
}
.fangyuanBox ul li p{
    font-size: 0.1rem;
    color: #afafaf;
}

.fangyuanBox ul li h4{
    font-size: 0.12rem;
    color: #343434;
    margin: 0.06rem 0;
}

.fangyuanBox ul li h3{
    font-size: 0.13rem;
    color: #afafaf;
    margin-bottom: 0.08rem;
}
.starsBox{
    display: flex;
    align-items: center;
}
.starsBox i{
    font-size: 0.1rem;
    color: #00868b;
}
.starsBox span{
    font-size: 0.1rem;
    color: #191919;
    margin-left: 0.06rem;
}
.showall{
    width: 100%;
    height: 0.48rem;
    border: 2px solid #b5dbdd;
    font-size: 0.12rem;
    text-align: center;
    line-height: 0.48rem;
    border-radius: 5px;
    font-weight: 700;
}
.showall a{
    color: #27888c;

}
</style>

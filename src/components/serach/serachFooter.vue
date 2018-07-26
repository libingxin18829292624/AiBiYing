<template>
    <footer>
        <div class="moren" id="moren">
            <div class="moren-top">

                <div class="moren-top-top">
                    <a href="#">全部</a>
                    <a href="#">房源</a>
                    <a href="#">体验</a>
                </div>

                <ul>
                    <li><i class="iconfont icon-dizhi"></i>附近</li>
                    <li><i class="iconfont icon-dizhi"></i>任何地方</li>
                </ul>

            </div>
            <div class="moren-bottom">
                <p>最近的搜索</p>
                <ul>
                    <li><i class="iconfont icon-shijianlishijilujishizhongbiaomianxing"></i>曼谷·任何时间，1位</li>
                    <li><i class="iconfont icon-shijianlishijilujishizhongbiaomianxing"></i>西安·任何时间，1位</li>
                    <li><i class="iconfont icon-shijianlishijilujishizhongbiaomianxing"></i>深圳·任何时间，1位</li>
                </ul>
            </div>
        </div>


        <div class="xian" id="xian">
            <ul>
                <li><i class="iconfont icon-dizhi"></i>中国陕西省西安市</li>
                <li><i class="iconfont icon-dizhi"></i>中国陕西省西安市钟楼商圈西安钟楼</li>
                <li><i class="iconfont icon-dizhi"></i>中国陕西省西安市雁塔区</li>
                <li><i class="iconfont icon-dizhi"></i>中国陕西省西安市莲湖区钟楼商圈西安鼓楼</li>
            </ul>
        </div>

        <div class="mangu" id="mangu">
            <ul>
                <li><i class="iconfont icon-dizhi"></i>泰国曼谷</li>
                <li><i class="iconfont icon-dizhi"></i>泰国曼谷是隆路</li>
                <li><i class="iconfont icon-dizhi"></i>泰国曼谷巴吞旺县</li>
                <li><i class="iconfont icon-dizhi"></i>泰国曼谷汇权车站</li>
                <li><i class="iconfont icon-dizhi"></i>曼谷民宿Atom@Ekk3 Ekkamai 3</li>
            </ul>
        </div>
    </footer>
</template>

<script>
export default {
    name:"serachFooter",
    data(){
        return{

        }
    }
}
</script>

<style>
footer{
    width:100%;
    position: relative;
}
.moren{
    width:100%;
}
.moren-top{
    width:100%;
}
.moren-top-top{
    width: 3.25rem;
    border-bottom:2px solid #eaeaea;
    margin:0 auto;
    display:-webkit-flex;
    padding-top:0.07rem;
    padding-bottom: 0.29rem;
}
.moren-top-top a{
    display: block;
    width:0.58rem;
    height:0.32rem;
    background:#f2f2f2;
    color:#2e2e2e;
    font-size: 0.12rem;
    line-height: 0.32rem;
    text-align: center;
    border-radius: 5px;
    margin-right: 0.08rem;
}
.moren-top ul{
    width:100%;
}
.moren-top ul li{
    color:#2e2e2e;
    display: block;
    width:3.25rem;
    margin:0 auto;
    font-size: 0.12rem;
    border-bottom:2px solid #eaeaea;
    line-height: 0.66rem;
}
.moren-top ul li .icon-dizhi{
    font-size: 0.14rem;
    margin-right: 0.15rem;
}

.moren-bottom{
    width:100%;
}
.moren-bottom p{
    font-weight: 600;
    font-size:0.1rem;
    color:#2e2e2e;
   width:3.25rem;
   margin:0.26rem auto 0;
}
.moren-bottom ul{
    width:100%;
}
.moren-bottom ul li{
    color:#2e2e2e;
    display: block;
    width:3.25rem;
    margin:0 auto;
    font-size: 0.12rem;
    border-bottom:2px solid #eaeaea;
    line-height: 0.66rem;
}
.moren-bottom ul li .icon-shijianlishijilujishizhongbiaomianxing{
    font-size: 0.14rem;
    margin-right: 0.15rem;
}
.xian{
    width:100%;
    position: absolute;
    top:0.07rem;
    left: 0;
    display: none;
}
.xian ul{
    width:100%;
}
.xian ul li{
    color:#2e2e2e;
    display: block;
    width:3.25rem;
    margin:0 auto;
    font-size: 0.12rem;
    border-bottom:2px solid #eaeaea;
    line-height: 0.66rem;
}
.xian ul li .icon-dizhi{
    font-size: 0.14rem;
    margin-right: 0.15rem;
}

.mangu{
    width:100%;
    position: absolute;
    top:0.07rem;
    left: 0;
    display: none;
}
.mangu ul{
    width:100%;
}
.mangu ul li{
    color:#2e2e2e;
    display: block;
    width:3.25rem;
    margin:0 auto;
    font-size: 0.12rem;
    border-bottom:2px solid #eaeaea;
    line-height: 0.66rem;
}
.mangu ul li .icon-dizhi{
    font-size: 0.14rem;
    margin-right: 0.15rem;
}
</style>

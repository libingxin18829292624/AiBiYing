<template>
       <aby-transtion-to-top>
           <div>
            <div class="checkall">

                <div class="headNav">
                  <div class="goback">
                    <i @click="goIndex" class="iconfont icon-houtui"></i>
                    <i @click="goHoslist" class="iconfont icon-search3"></i>
                    </div>
                   <div class="Navbox">
                      <a >精选故事</a>
                      <a >房源</a>
                      <a >景点</a>
                      <a >美食</a>
                      <a >文化</a>
                      <a >活动</a>
                      <a >店铺</a> 
                    </div>   
                </div>
                
                <div class="checktop"> 
                <h1>故事集</h1>
                <p>查看全部  ></p>
                </div>
            <ul>
                <li v-for="(m,n) in arrcnt" :key="n">
                    <a ><img :src="m.img" alt=""></a>
                    <p>{{m.pcot}}</p>
                    <h2>{{m.h2cot}}</h2>
                </li>
            </ul>
        </div>
        <div class="jingxuan">
            <h1>精选故事</h1>
            <ul>
                <li v-for="(x,y) in usersarr" :key="y">
                   <a >
                       <div class="picBox">
                       <img :src="x.img1" alt="">
                        <span>{{x.span1}}</span>   
                        </div>
                        <h2>{{x.h2nr}}</h2>
                        <div class="pingjia">
                            <div class="mylogo">
                                <img :src="x.logoimg" alt="">
                            </div>
                            <i class="iconfont icon-svgdamuzhi-copy"></i>
                            <span>{{x.span2}}</span> 
                            <i class="iconfont icon-icon-test"></i>
                            <span>{{x.span3}}</span>
                        </div>
                    </a>
                </li>
                               
            </ul>
        </div>
        <abyfooter></abyfooter>
    </div>
   </aby-transtion-to-top>
</template>

<script>
import $ from 'jquery'
import abyTranstionToTop from '../components/common/abyTranstionToTop'
import abyfooter from '../components/common/abyfooter'
export default {
    name:"abyStorys",
    data(){
        return{
            arrcnt:[
                {"img":"/src/assets/img/story0.jpg","pcot":"城市合辑","h2cot":"杭州好店 | 老厂房里的创意生活"},
                {"img":"/src/assets/img/story1.jpg","pcot":"城市合辑","h2cot":"北京今夏最值得 | 打卡的新店搜罗"},
                {"img":"/src/assets/img/story2.jpg","pcot":"城市合辑","h2cot":"如何躲避游人 | 体验真正的巴黎"},
            ],
         usersarr:[
             {"img1":"/src/assets/img/storyuser1.jpg","span1":"美食","h2nr":"不吃会后悔，全球仅9家门店的泰国皇室料理","logoimg":"/src/assets/img/mylogo1.jpg","span2":"10","span3":"4"},   
             {"img1":"/src/assets/img/storyuser2.jpg","span1":"美食","h2nr":"环游世界前，你可以先在胡同里喝环游世界手冲","logoimg":"/src/assets/img/mylogo2.jpg","span2":"2","span3":"0"},   
             {"img1":"/src/assets/img/storyuser3.jpg","span1":"美食","h2nr":"糯言，有十个月亮的小酒馆。","logoimg":"/src/assets/img/mylogo3.jpg","span2":"6","span3":"1"},   
             {"img1":"/src/assets/img/storyuser4.jpg","span1":"美食","h2nr":"街头巷尾，绕不开的一碗云吞面—宝华面店","logoimg":"/src/assets/img/mylogo4.jpg","span2":"8","span3":"9"},   
             {"img1":"/src/assets/img/storyuser5.jpg","span1":"文化","h2nr":"baan kang wat 素帖山下的艺术村","logoimg":"/src/assets/img/mylogo5.jpg","span2":"22","span3":"2"},   
             {"img1":"/src/assets/img/storyuser6.jpg","span1":"景点","h2nr":"当我的相机在德国科隆被偷…","logoimg":"/src/assets/img/mylogo6.jpg","span2":"3","span3":"2"},   
             {"img1":"/src/assets/img/storyuser7.jpg","span1":"文化","h2nr":"私藏香港美食之最接地气港式大排档！","logoimg":"/src/assets/img/mylogo7.jpg","span2":"8","span3":"7"},   
             {"img1":"/src/assets/img/storyuser8.jpg","span1":"景点","h2nr":"萌兔领域！京都堆满兔子的神社","logoimg":"/src/assets/img/mylogo8.jpg","span2":"9","span3":"2"},   
             {"img1":"/src/assets/img/storyuser9.jpg","span1":"美食","h2nr":"为了这碗沙茶面，我才去了曾厝垵|闽南夏日","logoimg":"/src/assets/img/mylogo9.jpg","span2":"9","span3":"0"},   
             {"img1":"/src/assets/img/storyuser10.jpg","span1":"景点","h2nr":"时与光之间遇见自己","logoimg":"/src/assets/img/mylogo10.jpg","span2":"17","span3":"4"},   


            ]
        }
    },
    components:{
        abyfooter,
        abyTranstionToTop
    },
    methods:{
        goIndex(){
            this.$router.push("/")
        },
        goHoslist(){
            this.$router.push("/houselist")
        }
    },
    mounted(){
        $(function(){
          $(".Navbox").children().click(function(){
              $(this).addClass("activeaaaaa").siblings().removeClass("activeaaaaa")
          })      
     


        })
    }
}
</script>

<style>
.checkall{
    width: 100%;
    overflow: hidden;
    margin-bottom: 0.2rem;
}
.activeaaaaa{
    border-bottom: 1px solid #339d95;
    padding: 0.05rem;
    box-sizing: border-box;
    transform: scale(1.2); 
}
.headNav{
    width: 100%;
    position: fixed;

    z-index: 10;
    background: #fff;
   
}
.Navbox{
     margin-top: 0.2rem;
    height: 0.3rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 0.1rem;
    border-bottom: 1px solid #ecedf0;
}
.Navbox a{
  color: #484848;
}

.goback{
    width: 100%;
    height: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.goback i{
     font-size: 0.25rem;
    color: #222;
    margin: 0.2rem;
}
.checktop{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 1.2rem;
}
.checktop h1{
    font-size: 0.2rem;
    color: #424242;
   margin-left: 0.25rem;
}
.checktop p{
    font-size: 0.12rem;
    color: #848484; 
     margin-right: 0.25rem;
}
.checkall ul li{
    width: 90%;
    height: 1.5rem;
    position: relative;
      flex-shrink: 0;
      margin-left: 0.1rem;
      overflow: hidden;
}
.checkall ul{
    display: flex;
    overflow-x: scroll;
      margin-top: 0.2rem;
}

.checkall ul li a img{
  width: 100%;
  height:1.5rem;
}
.checkall ul li p{
font-size: 0.1rem;
    color: #444444; 
    padding: 0.05rem;
    background: #fff;
    position: absolute;
    left: 0.2rem;
    top: 40%;
    border-radius: 3px;
}
.checkall ul li h2{
font-size: 0.2rem;
    color: #fff; 
        width: 47%;
    position: absolute;
    left: 0.2rem;
    bottom: 0.1rem;

}
.jingxuan{
    width: 100%;
}
.jingxuan h1{
      font-size: 0.2rem;
    color: #424242;
   margin-left: 0.25rem;
   margin-bottom: 0.25rem;
}
.jingxuan ul{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 0;
    height: 100%;
    margin: 0.25rem;
}   
.jingxuan ul li{
height: 2.45rem;
}
.picBox{
    width: 1.55rem;
    height: 1.55rem;
    position: relative;
}
.picBox img{
    width: 1.55rem;
    height: 1.55rem;
    border-radius: 5px;
}
.picBox span{
    font-size: 0.12rem;
    color: #484848;
    padding: 0.05rem;
    background: #fff;
    position: absolute;
    right: 0.1rem;
    border-radius: 5px;
    bottom: 0.1rem;
}
.jingxuan ul li a h2{
    font-size: 0.14rem;
    color: #4b4b4b;
    width: 1.55rem;
    margin: 0.1rem 0;
}
.pingjia{
    width: 100%;
    display: flex;
    align-items: center;
}
.mylogo{
    width: 0.2rem;
    height: 0.2rem;
    border-radius: 50%;
    display: flex;
}
.mylogo img{
     width: 0.2rem;
    height: 0.2rem;
    border-radius: 50%;
}
.pingjia i{
      font-size: 0.14rem;
    color: #767676;
}
.pingjia .icon-svgdamuzhi-copy{
    margin-left: 0.1rem;
}
.pingjia .icon-icon-test{
    margin-left: 0.05rem;
}

.pingjia span{
      font-size: 0.14rem;
    color: #767676;
}
</style>

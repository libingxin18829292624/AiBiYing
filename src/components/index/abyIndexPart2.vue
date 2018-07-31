<template>
    <div>
        <div class="fangyuan">
    <div class="plusfangyuan">
            <h2>诚意推出爱彼迎Plus</h2>
            <p>品质和舒适性经过验证的精选房源</p>
        <div class="liulan">
            <div class="plusfont"></div>
            <a href="#">浏览 Plus 房源  ></a>
        </div>
    </div>
    <div class="globfangyuan">
        <h2>全球房源</h2>
        <div class="fangyuanBox">
            <ul>
                <li  v-for="(m,n) in fydata" >
                   <div class="Fcontop">
                       <img :src="m.img" alt="">
                         <i  class="iconfont icon-xihuan2"></i>
                         
                   </div>
                    <p>{{m.pcont}}</p>
                    <h4>{{m.h4cont}}</h4>
                    <h3>{{m.h3cont}}</h3>
                    <div class="starsBox">
                            <i class="iconfont icon-star"></i>
                            <i class="iconfont icon-star"></i>
                            <i class="iconfont icon-star"></i>
                            <i class="iconfont icon-star"></i>
                            <i class="iconfont icon-xingxingbange"></i>
                            <span>{{m.spancot}}</span>
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
 import $ from "jquery"
 import BScroll from 'better-scroll'
export default {
    name:"abyIndexPart2",
    data(){
        return{
           
            fydata:[
                {"img":"/src/assets/img/IndexFY1.jpg","pcont":"绳索下降 · 圣乔治","h4cont":"Private East Zion Slot Canyon Tour","h3cont":"每人￥971","spancot":"73" },
                {"img":"/src/assets/img/IndexFY2.jpg","pcont":"看野生动物 · 克萨达(Quesada)","h4cont":"Experiencia con el Oso Perezoso","h3cont":"每人￥123","spancot":"123" },
                {"img":"/src/assets/img/IndexFY3.jpg","pcont":"一日游 · 迪拜","h4cont":"Red Dunes Safari and Al Khayma Camp","h3cont":"每人￥286","spancot":"68" },
                {"img":"/src/assets/img/IndexFY4.jpg","pcont":"邂逅动物 · 西雅图","h4cont":"Wolf Encounter","h3cont":"每人￥1225","spancot":"1054" }
              

            ]
        }
    },
 
    mounted(){
        var a = 0
    $(".Fcontop").find("i").click(function(){
        
        a++
        if(a%2 ==!0){
            $(this).addClass("icon-hongxin").css({
                "animation":"hongxinchange 0.5s 1"
            })
        }else if(a%2== 0){
             $(this).removeClass("icon-hongxin").css({
                   "animation":"hongxinchange2 0.5s 1"
             })
             
        }
       
        })
   
    }
}
</script>

<style>
@keyframes hongxinchange{
    0%{
        transform:scale(1);
    }
    10%{
        transform:scale(0.2);
    }
    20%{
        transform:scale(0.5);
    }
    30%{
        transform:scale(1);
    }
    40%{
        transform:scale(1.2);
    }
    50%{
        transform:scale(1.4);
    }
    100%{
        transform:scale(1);
    }
}
@keyframes hongxinchange2{
    0%{
        transform:scale(1);
    }
    10%{
        transform:scale(0.7);
    }
    20%{
        transform:scale(0.5);
    }
    30%{
        transform:scale(1);
    }
    40%{
        transform:scale(1.2);
    }
    50%{
        transform:scale(1.4);
    }
    100%{
        transform:scale(1);
    }
}




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
    background:url(/src/assets/img/plusFYbg.jpg)no-repeat;
    background-size: cover;
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
    background: #fff;
}
.plusfont{
    width: 2.1rem;
    height: 1.15rem;
    position: absolute;
    background: url(/src/assets/img/plusFont.png)no-repeat;
    background-size:50% 50%;
    bottom: 0.6rem;
    left:1rem;
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
    margin: 0.037rem;
    float: left;
    
}



.Fcontop{
    width: 1.55rem;
    height: 1.04rem;
    
    position: relative;
    margin-bottom: 0.13rem;
    border-radius: 5px;
    overflow: hidden;
}
.Fcontop img{
    width: 1.55rem;
    height: 1.04rem;
}

.Fcontop .icon-xihuan2{
    font-size: 0.21rem;
    color: #fff;
    position: absolute;
    top: 0.13rem;
    right: 0.12rem;
   
}
.Fcontop .icon-hongxin{
    font-size: 0.21rem;
    color: red;
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
     margin-bottom: 0.2rem;
     box-sizing: border-box;
}
.showall a{
    color: #27888c;

}
</style>

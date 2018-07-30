<template>

    <div class="header">
  <div class="serchBox">
    <i class="iconfont icon-search3"></i>
    <input type="text" placeholder="搜索'瓦伦西亚海岸试试(Coast de Valencia)'试试">
     </div>  
    <div class="yincang">
      <router-link to="/Rili" id="myRili" href="#">{{this.$store.state.xdriqi}}</router-link><router-link to="/fangke">{{this.$store.state.num}}位访客</router-link>
  </div>
</div>
  
  
</template>

<script>
import $ from 'jquery'

export default {
    name:"abyIndexHeader",
    methods:{

    },

    mounted(){
        $(window).scroll(function(){
            var topp=$(document).scrollTop();
            if(topp>50){
                $(".yincang").slideUp("20")
                $(".header").animate({
                    "height": "80"
                },20)
            }else{
                 $(".yincang").slideDown("20") 
                 $(".header").animate({
                    "height": "125"
                },20)
            }
        })
        
    },
    methods:{
       
    },
    components:{
       
    }
}
</script>

<style>
.header{
    width: 100%;
    height: 1.25rem;
    border-bottom: 2px solid #ecedf0;
    position: fixed;
    top: 0;
    background: #fff;
    z-index: 10;
}
.serchBox{
    width: 3.25rem;
    height: 0.5rem;
    display: flex;
    box-shadow: 1px 1px 1px 1px;
    border-radius: 5px;
    z-index: 10;
    margin: 0.15rem auto;
    overflow: hidden;
}
.serchBox .icon-search3{
    font-size: 0.18rem;
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    text-align: center;
    line-height: 0.5rem;
}
.serchBox input{
    width: 2.7rem;
    height: 0.5rem;
    outline: none;
    box-sizing: border-box;
    border: none;
}

.yincang{
    font-size: 0.12rem;
    margin-left: 0.25rem;
    padding-top: 0.05rem;
    width: 100%;
    height: 0.3rem;
}
.yincang a{
    padding: 0.05rem;
    color: #3c3c3c;
    border: 1px solid #d3d3d4;
    border-radius: 5px;
    margin-right: 0.075rem;
}

</style>

<template>
    <header>
        <div class="header-top">
            <i class="iconfont icon-houtui1"></i>
            <input type="text">
        </div>
        <div class="header-bottom">
            <a href="#">日期</a>
            <a href="#">1位房客</a>
            <a href="#">筛选条件</a>
        </div>
    </header>
</template>

<script>
import $ from 'jquery'
export default {
    name:"houselistHeader",
    data(){
        return{

        }
    },
 mounted(){
        $(window).scroll(function(){
            var topp=$(document).scrollTop();
            if(topp>40){
                $(".header-bottom").slideUp("20")
            }else{
                 $(".header-bottom").slideDown("20") 
            }
        })
    }
}
</script>

<style>
header{
    position: fixed;
    top:0 ;
    left:0;
    width:100%;
    box-shadow: 0px 2px 3px #e6e7e9;
    background: #fcfdff;
    padding-top: 0.16rem;
    z-index: 999;
}
.header-top{
    width:3.21rem;
    height:0.5rem;
    border:1px solid #dfe0e2;
    border-radius: 5px;
    display: flex;
    margin:0 auto ;
    background:white;
    align-items: center;
    box-shadow: 0 2px 2px #cdcdcf;
}
.icon-houtui1{
    margin-left: 0.19rem;
    margin-right:0.19rem;
}
.header-top input{
    height:100%;
    border:none;
    outline: none;
    font-size: 0.12rem;
}
.header-bottom{
    width:100%;
    display: flex;
    padding-top:0.16rem;
    padding-bottom: 0.09rem;
}
.header-bottom a{
    display: block;
    line-height: 0.3rem;
    padding-left:0.14rem;
    padding-right: 0.14rem;
    font-size: 0.12rem;
    color:#303030 ;
    background: white;
    border:2px solid #c5c5c5;
    margin-right: 0.06rem;
    border-radius: 5px;
}
.header-bottom a:nth-child(1){
    margin-left:0.25rem;
}
</style>

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
export default {
    name:"houselistHeader",
    data(){
        return{

        }
    }
}
</script>

<style>
header{
    width:100%;
    box-shadow: 0px 2px 3px #e6e7e9;
    background: #fcfdff;
}
.header-top{
    width:3.21rem;
    height:0.5rem;
    border:1px solid #dfe0e2;
    border-radius: 5px;
    display: flex;
    margin:0.16rem auto 0;
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
    /* padding-left: 0.25rem; */
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

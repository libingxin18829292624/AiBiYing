<template>
    <div class="banner">
        <h3>只差4步了!</h3>
        <div class="fangkuai">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <p>我们要求每一位爱彼迎用户在侣行或出租之前提供一些具体信息，现在就先来完成这一步吧</p>
    </div>
</template>

<script>
export default {
    name:"myBanner"
}
</script>

<style scoped>
.banner{
    width:3.25rem;
    margin:0.67rem auto 0;
    border-bottom: 2px solid #e5e5e5;
}
.banner h3{
    font-size: 0.14rem;
    font-weight: 100;
}
.fangkuai{
    display: flex;
    margin-top: 0.19rem;
}
.fangkuai div{
    width:20%;
    height:0.42rem;
    background: #f2f2f2;
    border-right: 3px solid #ebebeb;
}
.fangkuai div:nth-child(5){
    border:none;
    border-radius: 0 3px 3px 0;
}
.fangkuai div:nth-child(1){
    background: #d93900;
    border-color: #d93900;
    border-radius: 3px 0 0 3px ;
}
.banner p{
    font-size: 0.12rem;
    color:#303030;
    margin-top: 0.18rem;
    margin-bottom: 0.25rem;
}
</style>

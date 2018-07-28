<template>
    <header>
        <div class="header-left">
            <p>Ice</p>
            <p>查看并编辑个人资料</p>
        </div>
        <img src="../../assets/img/hll-my-tx.jpg" alt="">
    </header>
</template>

<script>
export default {
    name:"myHeader"
}
</script>

<style>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 0.69rem;
}
.header-left{
    margin-left: 0.25rem;
}
.header-left p:nth-child(1){
    font-size: 0.2rem;
    font-weight: 600;
    color:#484848;
}
.header-left p:nth-child(2){
    font-size: 0.13rem;
    color:#191919;
    line-height: 0.26rem;
}
header img{
    width:0.67rem;
    height:0.67rem;
    margin-right: 0.25rem;
}
</style>

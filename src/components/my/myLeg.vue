<template>
    <div class="leg">
        <ul>
            <li>通知<img src="../../assets/img/hll-my-li2.jpg" alt=""></li>
            <li>旅程<img src="../../assets/img/hll-my-li3.jpg" alt=""></li>
            <li>旅行基金和礼金券<img src="../../assets/img/hll-my-li4.jpg" alt=""></li>
            <li>邀请好友<img src="../../assets/img/hll-my-li5.jpg" alt=""></li>
            <li>付款<img src="../../assets/img/hll-my-li1.jpg" alt=""></li>
            <li>发布房源<img src="../../assets/img/hll-my-li6.jpg" alt=""></li>
            <li>设置<img src="../../assets/img/hll-my-li7.jpg" alt=""></li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"myLeg",
    data(){
        return{

        }
    }
}
</script>

<style>
.leg{
    width:100%;
}
.leg ul{
    width:100%;
}
.leg ul li{
    color:#242424;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:3.25rem;
    margin:0 auto;
    font-size: 0.14rem;
    border-bottom:2px solid #eaeaea;
    line-height: 0.66rem;
}
.leg ul li:last-child{
    border:none;
}
.leg ul li img{
    width:0.26rem;
    height:0.26rem;
}
</style>

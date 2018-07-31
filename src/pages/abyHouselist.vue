<template>

    <div class="bodybox">

      <houselist-header></houselist-header>
      <houselist-body></houselist-body>
      <abyfooter></abyfooter>
      <div class="guding"><i class="iconfont icon-dizhi"></i></div>
</div>

</template>

<script>

import houselistHeader from "../components/houselist/houselistHeader"
import houselistBody from "../components/houselist/houselistBody"
import abyfooter from "../components/common/abyfooter"
export default {
    name:"abyHouselist",
    components:{
        houselistHeader,
        houselistBody,
        abyfooter,

    }
}
</script>

<style>

.bodybox{
    padding-bottom: 0.8rem;
    padding-top: 1.27rem;
}

.guding{
    width:0.52rem;
    height:0.52rem;
    background: white;
    border-radius: 50%;
    line-height: 0.52rem;
    text-align: center;

    color:rgb(0, 132, 137);
    box-shadow: rgba(0, 0, 0, 0.14) 0px 1px 1px 1px !important;
    position: fixed;
    bottom:0.7rem;
    right:0.17rem;
    z-index: 99999;


}
.icon-dizhi{
    display: block;
    font-size: 0.24rem;
}
</style>

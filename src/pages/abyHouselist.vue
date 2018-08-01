<template>
  <aby-transtion-to-top-fast>
    <div class="bodybox">
      <houselist-header class="houselist-header" :city="address"></houselist-header>
      <houselist-body :city="address" :data="cityData"></houselist-body>
      <abyfooter></abyfooter>
      <div class="guding"><i class="iconfont icon-dizhi"></i></div>
    </div>
  </aby-transtion-to-top-fast>
</template>

<script>

import houselistHeader from "../components/houselist/houselistHeader"
import houselistBody from "../components/houselist/houselistBody"
import abyfooter from "../components/common/abyfooter"
import abyTranstionToTopFast from '../components/common/abyTranstionToTopFast'
export default {
    name:"abyHouselist",
    data(){
       return{
        allData:this.$store.state.allData,
        address:"",
        cityData:"",
       }

    },
    components:{
        houselistHeader,
        houselistBody,
        abyfooter,
      abyTranstionToTopFast
    },
    created(){
        this.address = this.$route.query.address;
        this.cityData = this.allData[this.address];
    }
}
</script>

<style scoped>

  .houselist-header{
    padding-bottom: .1rem;
  }

.bodybox{
    padding-bottom: 0.8rem;
    margin-top: 1.2rem;
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

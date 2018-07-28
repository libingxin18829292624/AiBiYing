<template>
<div class="bodybox">
      <houselist-header></houselist-header>
      <houselist-body></houselist-body>
      <abyfooter></abyfooter>
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
        abyfooter
    }
}
</script>

<style>

.bodybox{
    padding-bottom: 0.8rem;
    padding-top: 1.27rem;
}


</style>

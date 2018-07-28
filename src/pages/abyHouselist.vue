<template>
<div>
      <houselist-header></houselist-header>
      <houselist-body></houselist-body>
</div>
  
    
</template>

<script>
import houselistHeader from "../components/houselist/houselistHeader"
import houselistBody from "../components/houselist/houselistBody"
export default {
    name:"abyHouselist",
    components:{
        houselistHeader,
        houselistBody
    }
}
</script>

<style>

</style>

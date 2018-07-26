<template>
<div class="myIndex">
  <aby-index-header></aby-index-header>
  <div class="contentmid">
  <aby-index-part1></aby-index-part1>
  <aby-index-part2></aby-index-part2>
  </div>
  <abyfooter></abyfooter>
 </div>
</template>

<script>
import abyIndexHeader from '../components/index/abyIndexHeader'
import abyIndexPart1 from '../components/index/abyIndexPart1'
import abyIndexPart2 from '../components/index/abyIndexPart2'
import abyfooter from '../components/common/abyfooter'
    export default {
        name: "index",
        components:{
            abyIndexHeader,
            abyIndexPart1,
            abyIndexPart2,
            abyfooter
        }
    }
</script>

<style scoped>
.myIndex{
    height: 100%;
    display: flex;
    flex-direction: column
}

   .contentmid { 
    overflow-y: scroll;
    flex: 1; 
    padding: 0.7rem 0;
  }
</style>

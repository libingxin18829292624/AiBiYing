<template>
<div class="myIndex">
  <aby-index-header></aby-index-header>
  <aby-index-part1></aby-index-part1>
  <aby-index-part2></aby-index-part2>
   <aby-index-part3></aby-index-part3>
  <abyfooter></abyfooter>
 </div>
</template>

<script>
import abyIndexHeader from '../components/index/abyIndexHeader'
import abyIndexPart1 from '../components/index/abyIndexPart1'
import abyIndexPart2 from '../components/index/abyIndexPart2'
import abyIndexPart3 from '../components/index/abyIndexPart3'
import abyfooter from '../components/common/abyfooter'
    export default {
        name: "index",
        data(){
            return{
                recemsg:'',
            }
        },
        components:{
            abyIndexHeader,
            abyIndexPart1,
            abyIndexPart2,
            abyIndexPart3,
            abyfooter,

        },
        methods:{
            receive(){
                this.recemsg=a
            }
        }
    }
</script>

<style scoped>


</style>

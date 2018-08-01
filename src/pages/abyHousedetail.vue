<template>
  <aby-transtion-to-top-fast>
    <div>
      <housedetail-header :shuju="shuju"></housedetail-header>
      <housedetail-content :shuju="shuju"></housedetail-content>
      <housedetail-evaluate :shuju="shuju"></housedetail-evaluate>
      <housedetail-option></housedetail-option>
      <housedetail-resource :shuju="shuju"></housedetail-resource>
      <housedetail-footer :shuju="shuju"></housedetail-footer>
    </div>
  </aby-transtion-to-top-fast>
</template>

<script>
  import housedetailHeader from "../components/Housedetail/housedetailHeader"
  import housedetailContent from "../components/Housedetail/housedetailContent"
  import housedetailEvaluate from "../components/Housedetail/housedetailEvaluate"
  import housedetailOption from "../components/Housedetail/housedetailOption"
  import housedetailResource from "../components/Housedetail/housedetailResource"
  import housedetailFooter from "../components/Housedetail/housedetailFooter"
  import abyTranstionToTopFast from '../components/common/abyTranstionToTopFast'
  export default {

        name: "abyHousedetail",
        components:{
          housedetailHeader,
          housedetailContent,
          housedetailEvaluate,
          housedetailOption,
          housedetailResource,
          housedetailFooter,
          abyTranstionToTopFast
        },
      data(){
          return{
              shuju:"",
          }
      },
    created(){
      this.shuju = {
        city:this.$route.query.city,
        index:this.$route.query.index
      }
    },
    mounted(){
          console.log(this.shuju)
    }

    }
</script>

<style scoped>

</style>

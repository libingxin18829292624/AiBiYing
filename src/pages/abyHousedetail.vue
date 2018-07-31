<template>
  <div>
    <housedetail-header></housedetail-header>
    <housedetail-content></housedetail-content>
      <housedetail-evaluate></housedetail-evaluate>
      <housedetail-option></housedetail-option>
      <housedetail-resource></housedetail-resource>
      <housedetail-footer></housedetail-footer>
    <!--<housedetail-ziye></housedetail-ziye>-->
    <!--<housedetail-jubao></housedetail-jubao>-->
    <!--<housedetail-bianlisheshi></housedetail-bianlisheshi>-->
    <!--<housedetail-rili></housedetail-rili>-->

  </div>
</template>

<script>
  import housedetailHeader from "../components/Housedetail/housedetailHeader"
  import housedetailContent from "../components/Housedetail/housedetailContent"
  import housedetailEvaluate from "../components/Housedetail/housedetailEvaluate"
  import housedetailOption from "../components/Housedetail/housedetailOption"
  import housedetailResource from "../components/Housedetail/housedetailResource"
  import housedetailFooter from "../components/Housedetail/housedetailFooter"
  import housedetailZiye from "../components/Housedetail/housedetailZiye"
  import housedetailJubao from "../components/Housedetail/housedetailJubao"
  import housedetailBianlisheshi from "../components/Housedetail/housedetailBianlisheshi"
  import housedetailRili from "../components/Housedetail/housedetailRili"
  export default {
        name: "abyHousedetail",
        components:{
          housedetailHeader,
          housedetailContent,
          housedetailEvaluate,
          housedetailOption,
          housedetailResource,
          housedetailFooter,
          housedetailZiye,
          housedetailJubao,
          housedetailBianlisheshi,
          housedetailRili

        }
    }
</script>

<style scoped>

</style>

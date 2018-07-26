<template>
    <div class="order-agree-li">
      {{data}}
    </div>
</template>

<script>
    export default {
      name: "orderAgreeLi",
      props:['data']
    }
</script>

<style scoped lang="scss" type="text/scss">
  .order-agree-li{
    width: 100%;
    font-size: .13rem;
    color: #343434;
    line-height: .2rem;
    border-bottom: 1px solid #e6e6e6;
    padding: .24rem 0;
  }
</style>

<template>
  <div class="agree">{{data}}</div>
</template>

<script>
    export default {
        name: "orderButton",
      props:['data'],
      data(){
          return {

          }
      }
    }
</script>

<style scoped lang="scss" type="text/scss">
  .agree{
    font-size: .11rem;
    color: #fff;
    width: 100%;
    height: .52rem;
    border-radius:.04rem;
    border: 1px solid #007278;
    background-color: #008489;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

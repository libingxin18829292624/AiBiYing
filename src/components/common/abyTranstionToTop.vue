<template>
  <transition>
    <slot></slot>
  </transition>
</template>

<script>
    export default {
        name: "abyTranstion"
    }
</script>

<style scoped lang="scss" type="text/scss">
  .v-enter,.v-leave-to{
    position: fixed;
    top: 100%;
  }
  .v-enter-to,.v-leave{
    position: fixed;
    top: 0;
  }
  .v-enter-active,.v-leave-active{
    transition: all .35s;
  }
</style>

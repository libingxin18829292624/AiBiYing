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
    left: 100%;
  }
  .v-enter-to,.v-leave{
    position: fixed;
    left: 0;
  }
  .v-enter-active,.v-leave-active{
    transition: all .2s;
  }
</style>

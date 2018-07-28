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
  .v-enter{
    opacity: 0;
  }
  .v-leave-to{
    opacity: 0;
    position: relative;
    top: 0;
  }
  .v-enter-to{
    opacity: 1;
  }
  .v-leave{
    opacity: 1;
    position: relative;
    top: 100%;
  }
  .v-enter-active,.v-leave-active{
    transition: all 1s;
  }
</style>

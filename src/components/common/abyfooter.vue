<template>

  <div class="footer">
    <router-link to="/" @click.native="writeIndex(0)">
      <i class="iconfont icon-search3"></i>
      <p>浏览</p>
    </router-link>
    <router-link to="/abywish" @click.native="writeIndex(1)">
      <i class="iconfont icon-xin"></i>
      <p>心愿单</p>
    </router-link>
    <router-link to="/storys" @click.native="writeIndex(2)">
      <i class="iconfont icon-xiaoshumiao"></i>
      <p>故事</p>
    </router-link>
    <router-link to="/abyinbox" @click.native="writeIndex(3)">
      <i class="iconfont icon-icon-test"></i>
      <p>收件箱</p>
    </router-link>
    <router-link to="/my" @click.native="writeIndex(4)">
      <i class="iconfont icon-wode"></i>
      <p>我的</p>
    </router-link>
  </div>

</template>

<script>
  import $ from 'jquery'

  export default {
    name: "abyfooter",
    methods: {
      writeIndex(index){
        if(index !== 1){
          this.$store.state.index = index;
        }else{
          this.$store.state.index = index + 1;
        }
      }
    },
    mounted() {
      // $('.footer').find("a").click(function () {
      //   $(this).addClass("active").siblings().removeClass("active")
      // })
      $('.footer').find("a").removeClass("active")
      $('.footer').find("a").eq(this.$store.state.index).addClass("active")
    },


  }
</script>

<style scoped lang="scss" type="text/scss">
  .footer {
    width: 100%;
    height: 0.55rem;
    display: flex;
    bottom: 0;
    background: #fff;
    position: fixed;
    z-index: 1000;
  }

  .footer a {
    width: 20%;
    height: 0.5rem;
    display: flex;
    padding-top: 0.05rem;
    flex-direction: column;
    text-align: center;
    align-items: center;
    color: #4f4f4f;
    z-index: 10000;
  }

  .footer a p {
    font-size: 0.1rem;

  }

  .footer a i {
    font-size: 0.25rem;

  }

  .active {
    color: red !important;
  }
</style>

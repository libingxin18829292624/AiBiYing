<template>
    <div class="container">
      <header class="header">
        <i class="iconfont icon-houtui1" @click="back"></i>
        <span class="over" @click="sendOver">完成</span>
      </header>
      <section class="main">
        <article class="toOwner">
          <div class="content">
            <p>自我介绍</p>
            <p>向{{}}简单地介绍一下您自己和您的旅程。</p>
          </div>
          <img class="ownerImg" :src="this.$store.state.ownerImg" alt="">
        </article>
        <textarea ref="userInput" class="userWords" rows="20"></textarea>
      </section>
    </div>
</template>

<script>
  import $ from "jquery"
    export default {
        name: "orderSendToOwner",
      methods:{
        sendOver(){
          if(this.$refs.userInput.value !== ""){
            this.$store.state.isSend = true;
            this.$store.state.toOwnerWords = this.$refs.userInput.value;
            this.back();
          }
        },
        back(){
          window.history.back();
        }
      },
      mounted(){
        $('.userWords').focus();
        this.$refs.userInput.value = this.$store.state.toOwnerWords;
      }
    }
</script>

<style scoped lang="scss" type="text/scss">
  .container{
    letter-spacing: .01rem;
    color: #343434;
  }
  .header{
    width: 100%;
    height: .8rem;
    border-bottom: 1px solid #e6e6e6;
    overflow: hidden;
    padding: 0 .25rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
  }
  .icon-houtui1{
    font-size: .22rem;
    display: block;
    margin-top: .4rem;
  }
  .over{
    font-size: .12rem;
    margin-top: .4rem;
    width: .3rem;
    height: .3rem;
    line-height: .3rem;
    text-align: center;
    display: block;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
  .main{
    padding: 0 .25rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .toOwner{
    width: 100%;
    height: 1.01rem;
    align-items: center;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    .content{
      font-size: .13rem;
      width: 60%;
      p{
        line-height: .21rem;
      }
    }
    .ownerImg{
      width: .69rem;
      height: .69rem;
    }
  }
  .userWords{
    border: 0;
    resize: none;
    outline: 0;
    font-size: .13rem;
    font-family: "微软雅黑";
    color: #343434;
    width: 100%;
    margin-top: .2rem;
    letter-spacing: .01rem;
  }
</style>

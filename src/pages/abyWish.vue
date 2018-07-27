<template>
  <div class="wish">
    <div class="title">
      <h1>心愿单</h1>
    </div>
  <div class="content">
      <p>如果看到了喜欢的东西，您可以轻点心形图标将其保存。如果您计划和其他人一起出行，也可以邀请他们一起来看看，选出各自的最爱。</p>
  </div>
    <div class="footer">
      <a href="#">开始探索</a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "abyWish"
    }
</script>

<style scoped>
.title{
  width: 100%;
}
.title h1{
  font-size: 0.23rem;
   color: #3a3a3a;
  padding-top: 0.65rem;
  padding-left: 0.26rem;
 }
  .content{
    width: 100%;
  }
  .content p{
    font-size: 0.13rem;

    padding-left: 0.25rem;
    padding-right: 0.25rem;
    color: #373737;
    padding-top:0.575rem ;
  }
  .footer{
    width: 100%;
  }
  .footer a{
    font-size:0.13rem;
    color: #007479;
    padding-top: 0.55rem;
    padding-left: 0.25rem;
  }
</style>

<template>
  <div class="inbox">
    <div class="header">
      <img src="../assets/img/s_hezi.png" alt="">
    </div>
    <div class="content">
      <div class="xiaoxi1"><span>消息</span></div>
        <div class="xiaoxi">
          <p>没有消息</p>
          <span>找到喜欢的房源后，和房东取得联系。简单介绍一下自己，并告诉他们您此行的目的。</span>
          <input type="button" value="开始探索">
        </div>
    </div>
    <abyfooter></abyfooter>
  </div>
</template>

<script>
  import abyfooter from '../components/common/abyfooter'
    export default {
        name: "abyInbox",
      components:{
        abyfooter
      }
    }
</script>

<style scoped>
.header{
  width: 100%;
  height: 0.52rem;
  background: #fff;
  align-items: center;
  position: relative;
  display: flex;
}
  .header img{
    width: 0.23rem;
    height: 0.23rem;
    position: absolute;
    right: 0.13rem;
  }
  .content{
    background: url("../assets/img/s_conent_bj2.jpg");
    background-size: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    height:5.5rem;
  }
  .xiaoxi{
    width:3.45rem;
    height: 1.90rem;
    background: #fff;
    margin-top: 2.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .xiaoxi1{
    height: 0.61rem;
    width:100%;
    display: flex;
  }
  .xiaoxi1 span{
    color: #fff;
    font-size: 0.28rem;
    font-weight: 900;
    line-height: 0.61rem;
    padding-left: 0.16rem;
  }
  .xiaoxi p{
    font-size: 0.16rem;
    color: #414141;
    text-align: center;
    padding-top: 0.18rem;
  }
  .xiaoxi span{
    font-size: 0.14rem;
    color: #878b8e;
    text-align: center;
    padding-top: 0.3rem;
  }
  .xiaoxi input{
    width: 1.03rem;
    height: 0.46rem;
    background: #fe5960;
    color: #fffff7;
    font-size: 0.15rem;
    line-height: 0.46rem;
    text-align: center;
    border: none;
  }
</style>

<template>
<div class="footer">
  <div class="footer_1" v-for="n in close">
    <p class="jiage">每晚￥<span class="jiage1">{{cityData.price}}</span></p>
    <p>
      <i class="iconfont icon-star"></i>
      <i class="iconfont icon-star"></i>
      <i class="iconfont icon-star"></i>
      <i class="iconfont icon-star"></i>
      <i class="iconfont icon-star"></i>
      <span class="pingfen">{{cityData.rateNum}}</span>
    </p>
    <p class="tuijian">优质房源{{cityData.commandPercent}}房客推荐</p>
  </div>
  <div class="footer_2">
    <input type="button" value="预定" @click="into">
  </div>
</div>
</template>

<script>
    export default {
      props:['shuju'],
      name: "housedetailFooter",
      data() {
        return {
          allData:this.$store.state.allData,
          cityData:"",
          close: [
            {money: "142"}
          ]
        }
      },
      created () {
        this.cityData = this.allData[this.shuju.city][this.shuju.index];
      },
      methods:{
        into(){
          this.$router.push({
            path:'/order',
            query:this.shuju
          })
        }
      }
    }
</script>

<style scoped="scoped">
  body{
    height: 100%;
  }
.footer{
  width: 100%;
  padding: 0 .25rem;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  height: 0.91rem;
  display: flex;
  background: #fffdef;
  position: fixed;
  border-top: 1px solid #f4f4f4;
  bottom: 0;
  z-index: 1000;
  justify-content: space-between;
}
.footer_1{
  width: 50%;
  display: flex;
  flex-direction: column;
}
  .jiage{
    font-size: 0.13rem;
    color: #212121;
    padding-top: 0.205rem;
  }
  .jiage1{
    font-weight: 900;
  }
  .iconfont{
    font-size: 0.1rem;
    color: #008489;
    display: block;
    padding-top: 0.03rem;
    float: left;
  }
  .pingfen{
    font-size: 0.1rem;
    font-weight: 900;
    color: #212121;
    float: left;
    padding-top: 0.03rem;

  }
  .tuijian{
    font-size: 0.1rem;
    color: #191919;
    float: left;
    padding-top: 0.03rem;
  }
  .footer_2{
    width: 40%;
    float: left;
    display: flex;
    align-items: center;
  }
  input{
    width: 1.55rem;
    height: 0.585rem;
    background: #ff5a5f;
    color: #fff;
    border: none;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    float: right;
  }
</style>

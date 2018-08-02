<template>
  <aby-transtion-to-top-fast>
    <div class="order-container">
      <div class="order-main">
        <header class="header">
          <i class="iconfont icon-houtui1" @click="goback"></i>
        </header>
        <section class="main-info">
          <h2 class="days">{{cityData.address.city}}{{days}}晚</h2>
          <p class="has">{{cityData.rooms.bedroom}}间卧室 · {{cityData.rooms.bathroom}}间卫生间</p>
        </section>
        <article class="owner-words">
          <p>{{cityData.ownerWords}}</p>
        </article>
        <article class="owner-info">
          <p class="owner-name">房东：{{cityData.ownerName}}</p>
          <img :src="cityData.ownerImg" alt="">
        </article>
        <section class="live-info">
          <div class="start-end">
            <div class="start">
              <span>{{this.startWeek}}</span>
              <span>{{this.startDate}}</span>
            </div>
            <img src="/src/assets/img/l2.png" alt="">
            <div class="end">
              <span>{{this.endWeek}}</span>
              <span>{{this.endDate}}</span>
            </div>
          </div>
          <order-li @click.native="writeLiveInfo(index)" v-for="(n,index) in liveInfo" :key="index" :data="n"></order-li>
          <div class="totalMoney">
            <p><span class="money" ref="money">¥{{totalMoney}}</span><span class="money-danwei"> CNY</span></p>
            <a href="#">查看价格明细</a>
          </div>
          <article class="mes">
            <h3 class="mes-title">退订政策：{{cityData.role}}</h3>
            <p class="mes-content">{{mes}}</p>
          </article>
        </section>
        <order-li :data="youHuiQuan"></order-li>
        <p class="finally-title">完成预定的步骤</p>
        <order-li @click.native="attach(index)" v-for="(n,index) in finallyStep" :key="n.left" :data="n"></order-li>
        <p v-if="this.$store.state.finallyStepNums === 0" class="sure">点击确认预定即代表您同意支付所示的总价格（此价格已包含服务费，点“价格”即可查看服务费明细），并同意服务条款、灵活退订政策及房客退款政策。</p>
      </div>
      <div class="btn" ref="btn" @click="toPay">您还差{{this.$store.state.finallyStepNums}}步</div>
    </div>
  </aby-transtion-to-top-fast>
</template>

<script>
  import orderLi from '../components/order/orderLi'
  import orderHeader from '../components/order/orderHeader'
  import abyTranstionToTopFast from '../components/common/abyTranstionToTopFast'
    export default {
      name: "abyOrder",
      data() {
        return {
          "allData":this.$store.state.allData,
          "addressInfo":"",
          "cityData":"",
          "days": this.$store.state.days,
          "startDate":this.$store.state.startDate,
          "startWeek":this.$store.state.startWeek,
          "endWeek":this.$store.state.endWeek,
          "endDate":this.$store.state.endDate,
          "members":"",
          "liveInfo": [
            {"left": "住宿晚数", "right": this.$store.state.days + "晚"},
            {"left": "房客", "right": this.members}
          ],
          "mes": "距离入住日期至少5天按时取消预订可获全额退款（服务费除外）。距离入住日期不足5天时取消预订，首晚房费将不可退还，但剩余晚数可获50%退款。尚未入住、且在预定确认后48小时内取消的预定，将退还服务费。",
          "youHuiQuan": {"left": "礼金券", "right": "无"},
          "finallyStep": [
            {"left": "1.付款", "right": "添加"},
            {"left": "2.给房东发消息", "right": "添加"},
            {"left": "3.房屋守则", "right": "同意"},
            {"left": "4.房客信息", "right": "添加"}
          ],
        }
      },
      watch:{
        members(){
          this.liveInfo[1].right = this.members;
        }
      },
      computed:{
        totalMoney(){
          return this.cityData.price * this.$store.state.days;
        }
      },
      components: {
        orderLi,
        orderHeader,
        abyTranstionToTopFast
      },
      methods: {
        goback(){
          window.history.back();
        },
        attach(n) {
          switch(n){
            case 0:this.$router.push('/addPayMethod');break;
            case 1:this.$router.push({
              path:'/sendToOwner',
              query:{
                ownerName : this.cityData.ownerName,
                ownerImg:this.cityData.ownerImg
              }
            });break;
            case 2:this.$router.push('/agree');break;
            case 3:this.$router.push('/addPersonInfo');break;
          }
        },
        writeLiveInfo(index){
          if(index === 1){
            this.$router.push({
              path:'/addPersons',
              query:{
                data:this.addressInfo
              }
            });
          }else{
            this.$router.push('/orderRili');
          }
        },
        initData(){
          this.$store.state.finallyStepNums = 4;
          if(this.$store.state.isAddPayMethod){
            this.finallyStep[0].right = this.$store.state.payMethod;
            this.$store.state.finallyStepNums--;
          }
          if(this.$store.state.isSend){
            this.finallyStep[1].right = "完成";
            this.$store.state.finallyStepNums--;
          }
          if(this.$store.state.isAgree){
            this.finallyStep[2].right = "已同意";
            this.$store.state.finallyStepNums--;
          }
          if(this.$store.state.isAddPersonInfo){
            this.finallyStep[3].right = "完成";
            this.$store.state.finallyStepNums--;
          }

          if(this.$store.state.members.kid !== 0){
            this.members = (this.$store.state.members.person + this.$store.state.members.children) + "位，" + this.$store.state.members.kid + "名婴幼儿";
          }else{
            this.members = (this.$store.state.members.person + this.$store.state.members.children) + "位";
          }
          if(this.$store.state.finallyStepNums === 0){
            this.$refs.btn.innerHTML = this.totalMoney + "·确认预定"
          }

          if(this.startDate === ""){
            this.startDate = "入住日期";
          }
          if(this.endDate === ""){
            this.endDate = "退房日期";
          }
        },
        toPay(){
          if(this.$store.state.finallyStepNums === 0){
            this.$router.push('/toPay');
          }
        }
      },
      created(){
        this.addressInfo = this.$route.query;
        this.cityData = this.allData[this.addressInfo.city][this.addressInfo.index];
      },
      mounted(){
        this.initData();
      }
    }
</script>
<style scoped lang="scss" type="text/scss">

  @mixin border-bottom{
    border-bottom:1px solid #e6e6e6;
  }
  .header{
    width: 100%;
    height: .75rem;
    overflow: hidden;
  }
  .icon-houtui1{
    font-size: .22rem;
    display: block;
    margin-top: .4rem;
  }
  .order-container{
    width: 100%;
    padding: 0 .25rem;
    color: #343434;
    box-sizing: border-box;
    letter-spacing: .01rem;
    background-color: #fff;
  }
  .order-main{
    width: 100%;
  }
  .main-info{
    width: 100%;
    height: .92rem;
    .days{
      font-size: .24rem;
      font-weight: 900;
      line-height: .33rem;
      height: .33rem;
      margin-top: .12rem;
    }
    .has{
      font-size: .13rem;
      line-height: .29rem;
      height: .29rem;
    }
  }
  .owner-words{
    height: .88rem;
    font-size: .14rem;
    padding-top: .24rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    @include border-bottom;
    P{
      line-height: .21rem;
    }
  }
  .owner-info{
    width: 100%;
    height: 1.23rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .owner-name{
      font-size: .14rem;
    }
    img{
      width: .69rem;
      height: .69rem;
    }
  }
  .live-info{
    width: 100%;
    height: 5.05rem;
  }
  .start-end{
    width: 100%;
    height: .95rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .18rem;
    .start{
      display: flex;
      flex-direction: column;
    }
    img{
      width: .47rem;
      height: .53rem;
    }
    .end{
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  }
  .totalMoney{
    width: 100%;
    height: 1.3rem;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    position: relative;
    p{
      height: 0;
      display: inline-block;
      position: absolute;
      top: -.5rem;
      right: 0;
      .money{
        font-size: .21rem;
        font-weight: 900;
      }
      .money-danwei{
        font-size: .1rem;
        position: relative;
        top: -.07rem;
      }
    }
    a{
      font-size: .13rem;
      color: #007d82;
      position: absolute;
      right: 0;
      top: .8rem;
    }
  }
  .mes{
    width: 100%;
    height: 1.39rem;
    overflow: hidden;
    @include border-bottom;
    .mes-title{
      font-size:.14rem;
      font-weight: 100;
      line-height: .36rem;
      height: .36rem;
      margin-top: .13rem;
    }
    .mes-content{
      font-size:.12rem;
      line-height: .16rem;
    }
  }
  .finally-title{
    font-size: .14rem;
    height: .45rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding-top: .2rem;
  }
  .sure{
    font-size: .12rem;
    line-height: .16rem;
    padding: .2rem 0;
  }
  .btn{
    width: 100%;
    height: .58rem;
    background-color: #ff5a5f;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .15rem;
    color: #fff;
    font-weight: 900;
    padding: 0 .25rem;
    margin-left: -.25rem;
  }
  .order-child-component{
    position: fixed;
    left: 0;
    top: 0;
  }
</style>

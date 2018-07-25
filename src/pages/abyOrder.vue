<template>
  <div class="order-container">
    <div class="order-main">
      <order-header></order-header>
      <section class="main-info">
        <h2 class="days">{{address}}{{days}}晚</h2>
        <p class="has">{{rooms}}间卧室 · {{bathrooms}}间卫生间</p>
      </section>
      <article class="owner-words">
        <p>{{ownerWords}}</p>
      </article>
      <article class="owner-info">
        <p class="owner-name">房东：{{ownerName}}</p>
        <img src="/src/assets/img/l1.png" alt="">
      </article>
      <section class="live-info">
        <div class="start-end">
          <div class="start">
            <span>{{startDay}}</span>
            <span>{{startDate}}</span>
          </div>
          <img src="/src/assets/img/l2.png" alt="">
          <div class="end">
            <span>{{endDay}}</span>
            <span>{{endDate}}</span>
          </div>
        </div>
        <order-li v-for="n in liveInfo" :key="n.left" :data="n"></order-li>
        <div class="totalMoney">
          <p><span class="money">¥{{totalMoney}}</span><span class="money-danwei"> CNY</span></p>
          <a href="#">查看价格明细</a>
        </div>
        <article class="mes">
          <h3 class="mes-title">退订政策：{{duiDingZhengCe}}</h3>
          <p class="mes-content">{{mes}}</p>
        </article>
      </section>
      <order-li :data="youHuiQuan"></order-li>
      <p class="finally-title">完成预定的步骤</p>
      <order-li @click="attach(index)" v-for="(n,index) in finallyStep" :key="n.left" :data="n"></order-li>
    </div>
    <div class="btn">您还差4步</div>
    <router-view class="order-child-component"></router-view>
  </div>
</template>

<script>
  import orderLi from '../components/order/orderLi'
  import orderHeader from '../components/order/orderHeader'
    export default {
      name: "abyOrder",
      data(){
        return {
          "address":"Xi\'an",
          "days":"4",
          "rooms":"1",
          "bathrooms":"1",
          "ownerWords":"「双囍和八两」♡旅行已经很累了，那就睡个好觉吧！",
          "ownerName":"榕",
          "startDay":"周日",
          "startDate":"8月5日",
          "endDay":"周四",
          "endDate":"8月9日",
          "liveInfo":[
            {"left":"住宿晚数","right":"4"},
            {"left":"房客","right":"1位"}
          ],
          "totalMoney":"752.45",
          "duiDingZhengCe":"中等",
          "mes":"距离入住日期至少5天按时取消预订可获全额退款（服务费除外）。距离入住日期不足5天时取消预订，首晚房费将不可退还，但剩余晚数可获50%退款。尚未入住、且在预定确认后48小时内取消的预定，将退还服务费。",
          "youHuiQuan":{"left":"礼金券","right":"添加"},
          "finallyStep":[
            {"left":"1.付款","right":"添加"},
            {"left":"2.给房东发消息","right":"添加"},
            {"left":"3.房屋守则","right":"同意"},
            {"left":"4.房客信息","right":"添加"}
          ]
        }
      },
      components:{
        orderLi,
        orderHeader
      },
      methods:{
        attach(n){
          if(n == 2){

          }
        }
      }
    }
</script>

<style scoped lang="scss" type="text/scss">
  @mixin border-bottom{
    border-bottom:1px solid #e6e6e6;
  }
  .order-container{
    width: 100%;
    padding: 0 .25rem;
    color: #343434;
    box-sizing: border-box;
    letter-spacing: .01rem;
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
    width: 82%;
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
      font-size: .13rem;
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
  .btn{
    width: 3.75rem;
    height: .58rem;
    background-color: #ff5a5f;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .15rem;
    color: #fff;
    font-weight: 900;
    position: relative;
    left: -.25rem;
  }
  .order-child-component{
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
  }
</style>

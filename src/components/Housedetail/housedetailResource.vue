<template>
  <div class="resource">
    <div class="title">
      <span>相似房源</span>
    </div>
      <div class="neirong">
        <ul>
          <li v-for="n in message">
            <img :src="n.img" alt="">
            <p class="duli">独立房间</p>
            <h1 class="xinxi">{{n.name}}</h1>
            <h3 class="jiage">￥{{n.price}}</h3>
            <i class="iconfont icon-star"></i>
            <i class="iconfont icon-star"></i>
            <i class="iconfont icon-star"></i>
            <i class="iconfont icon-star"></i>
            <i class="iconfont icon-star"></i>
            <span class="shuzi">285</span>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
    export default {
      name: "housedetailResource",
      data() {
        return {
          message: [
            {
              img:require("../../assets/img/s_header_bj.jpg"),
              name: "（卧室A）市中心复试洋房带露台/公交直达机场兵马俑/15分钟到回民街",
              price: "130"
            },
            {
              img:require("../../assets/img/s_header_bj.jpg"),
              name: "（卧室B）地铁口复试洋房/公交直达机场兵马俑/15分钟到回民街",
              price: "129"
            },
            {
              img:require("../../assets/img/s_header_bj.jpg"),
              name: "「双囍和八两」♡♡♡远方的家-不赶路、只感受",
              price: "158"
            }

          ],
        }
      }
    }
</script>

<style scoped>
.resource{
  width: 100%;
  /*display: flex;*/
  flex-wrap: wrap;
margin-bottom: 0.91rem;
}
  .title{
    font-size: 0.2rem;
    font-weight: 900;
    color: #484848;
    padding-left: 0.25rem;
    padding-top: 0.28rem;
    padding-bottom: 0.28rem;
  }

  .neirong{
    width: 100%;
    height: 3.04rem;
    overflow: auto;
    border-bottom: 1px solid #f4f4f4;
  }
  .neirong img{
    width: 2.69rem;
    height: 1.795rem;
  }

  .duli{
    color: #21103f;
    font-size: 0.07rem;
  }
  .xinxi{
    font-size: 0.12rem;
    color: #3b3b3b;
  }
  .jiage{
    font-size: 0.09rem;
    display: block;
    width: 100%;
    color: #3b3b3b;
  }
  .iconfont{
    font-size: 0.09rem;
    color: #008489;
    display: block;
    float: left;
  }
  ul{
    width: 8.9rem;
    float: left;

    padding-right: 0.25rem;
  }
  li{
    float: left;
    width: 2.69rem;
    margin-left: 0.25rem;
  }
  .shuzi{
    font-size: 0.09rem;
    color: #3b3b3b;
    display: block;
  }

</style>

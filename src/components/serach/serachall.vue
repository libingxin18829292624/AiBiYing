<template>
  <div class="serach">
    <header>
      <div class="header-tou">
        <span href="" @click="goindex">×</span>
      </div>
      <div class="header-jiao">
        <input type="text" autofocus placeholder="想去哪里？" id="dizhi">
      </div>
    </header>
    <footer>
      <div class="moren" id="moren">
        <div class="moren-top">
          <div class="moren-top-top">
            <div class="top-li">
              <a href="#">全部</a>
              <a href="#">房源</a>
              <a href="#">体验</a>
            </div>
          </div>
          <ul>
            <li>
              <div @click="goindex"><i class="iconfont icon-dizhi"></i>附近</div>
            </li>
            <li>
              <div @click="goindex"><i class="iconfont icon-dizhi"></i>任何地方</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="xian" id="xian">
        <ul>
          <li v-for="n in Xian" :key="n.xadizhi" @click="changeurl('Xian')"><i class="iconfont icon-dizhi"></i>{{n.axdizhi}}
          </li>
        </ul>
      </div>
      <div class="mangu" id="mangu">
        <ul>
          <li v-for="n in Bangkok" :key="n.xadizhi" @click="changeurl('Bangkok')"><i class="iconfont icon-dizhi"></i>{{n.gmdizhi}}
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
  import $ from "jquery"
  export default {
    name: "serachall",
    data() {
      return {
        Xian: [
          {axdizhi: "中国陕西省西安市"},
          {axdizhi: "中国陕西省西安市钟楼商圈西安钟楼"},
          {axdizhi: "中国陕西省西安市雁塔区"},
          {axdizhi: "中国陕西省西安市莲湖区钟楼商圈西安鼓楼"},
        ],
        Bangkok: [
          {gmdizhi: "泰国曼谷"},
          {gmdizhi: "泰国曼谷是隆路"},
          {gmdizhi: "泰国曼谷巴吞旺县"},
          {gmdizhi: "泰国曼谷汇权车站"},
          {gmdizhi: "曼谷民宿Atom@Ekk3 Ekkamai 3"},
        ]
      }
    },

    mounted() {
      $("#dizhi").on("keyup", function () {
          if ($("#dizhi").val() == "西安") {
            $(".xian").css({display: "block"})
            $(".moren").css({display: "none"})
            $(".mangu").css({display: "none"})
          } else if ($("#dizhi").val() == "曼谷") {
            $(".xian").css({display: "none"})
            $(".moren").css({display: "none"})
            $(".mangu").css({display: "block"})
          } else {
            $(".xian").css({display: "none"})
            $(".moren").css({display: "block"})
            $(".mangu").css({display: "none"})
          }
        }
      );
    },
    methods: {
      goindex(){
        this.$router.push('/')
      },
      changeurl(n) {
        this.$router.push({
          path: "/houselist",
          query: {
            address: n
          }
        })
      },
      back() {
        this.$router.push('/');
      }
    }
  }
</script>

<style scoped="scoped">
  .serach{
    background-color: #fff;
  }
  header {
    width: 100%;
    height: 1.39rem;
    box-shadow: 0 1px 5px #c8c8c8;
  }

  .header-tou {
    width: 100%;
    display: -webkit-flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-tou span:nth-child(1) {
    color: #4b4b4b;
    font-size: 0.3rem;
    margin-left: 0.24rem;
    /* font-weight: 600; */
  }

  .header-jiao {
    width: 100%;
    margin-top: 0.18rem;
  }

  .header-jiao input {
    display: block;
    width: 100%;
    height: 0.4rem;
    text-indent: 0.24rem;
    font-size: 0.2rem;
    font-weight: 600;
    color: #414443;
    border: none;
    outline: none;
  }

  input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
    color: #c7c5c5;
  }

  input:-moz-placeholder, textarea:-moz-placeholder {
    color: #c7c5c5;
  }

  input::-moz-placeholder, textarea::-moz-placeholder {
    color: #c7c5c5;
  }

  input:-ms-input-placeholder, textarea:-ms-input-placeholder {
    color: #c7c5c5;
  }

  footer {
    width: 100%;
    position: relative;
  }

  .moren {
    width: 100%;
  }

  .moren-top {
    width: 100%;
  }

  .moren-top-top {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    box-sizing: border-box;
  }

  .top-li {
    border-bottom: 1px solid #eaeaea;
    display: -webkit-flex;
    padding-top: 0.07rem;
    padding-bottom: 0.1rem;
  }

  .moren-top-top a {
    display: block;
    width: 0.58rem;
    height: 0.32rem;
    background: #f2f2f2;
    color: #2e2e2e;
    font-size: 0.12rem;
    line-height: 0.32rem;
    text-align: center;
    border-radius: 5px;
    margin-right: 0.08rem;
  }

  .moren-top ul {
    width: 100%;
  }

  .moren-top ul li {
    color: #2e2e2e;
    display: block;

    padding-left: 0.25rem;
    padding-right: 0.25rem;
    box-sizing: border-box;

    font-size: 0.12rem;
    line-height: 0.66rem;
  }

  .moren-top ul li div {
    border-bottom: 1px solid #eaeaea;
  }

  .moren-top ul li .icon-dizhi {
    font-size: 0.14rem;
    margin-right: 0.15rem;
  }

  .moren-bottom {
    width: 100%;
  }

  .moren-bottom p {
    font-weight: 600;
    font-size: 0.1rem;
    color: #2e2e2e;
    width: 3.25rem;
    margin: 0.26rem auto 0;
  }

  .moren-bottom ul {
    width: 100%;
  }

  .moren-bottom ul li {
    color: #2e2e2e;
    display: block;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    font-size: 0.12rem;
    box-sizing: border-box;
    line-height: 0.66rem;
  }

  .moren-bottom ul li div {
    border-bottom: 1px solid #eaeaea;
  }

  .moren-bottom ul li .icon-shijianlishijilujishizhongbiaomianxing {
    font-size: 0.14rem;
    margin-right: 0.15rem;
  }

  .xian {
    width: 100%;
    position: absolute;
    top: 0.07rem;
    left: 0;
    display: none;
  }

  .xian ul {
    width: 100%;
  }

  .xian ul li {
    color: #2e2e2e;
    display: block;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    font-size: 0.12rem;
    box-sizing: border-box;
    line-height: 0.66rem;
  }

  .xian ul li .icon-dizhi {
    font-size: 0.14rem;
    margin-right: 0.15rem;
  }

  .mangu {
    width: 100%;
    position: absolute;
    top: 0.07rem;
    left: 0;
    display: none;
  }

  .mangu ul {
    width: 100%;
  }

  .mangu ul li {
    color: #2e2e2e;
    display: block;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    font-size: 0.12rem;
    box-sizing: border-box;
    line-height: 0.66rem;
  }

  .mangu ul li .icon-dizhi {
    font-size: 0.14rem;
    margin-right: 0.15rem;
  }
</style>

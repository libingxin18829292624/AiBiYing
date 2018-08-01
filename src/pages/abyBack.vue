<template>
  <div>
    <el-container class="main">
      <el-aside :width="tabWidth+'px'">
        <div>
          <div class="isClossTab">
            <i class="iconfont icon-Airbnb"></i>
          </div>
          <el-menu :class="'menu'"
                   default-active="1-4-1"
                   class="el-menu-vertical-demo"
                   :collapse="isCollapse"
                   background-color="#545c64"
                   text-color="#fff"
                   active-text-color="#ffd04b"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">主页</span>
              </template>
              <el-submenu index="1-4">
                <span slot="title" class="margin">房源</span>
                <el-menu-item index="1-4-1" class="indent">房源管理</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">管理中心</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-setting"></i>
              <span slot="title">我的设置</span>
            </el-menu-item>
          </el-menu>
        </div>
      </el-aside>
      <el-container>
        <el-header class="main-header">
          <h1 class="title">Airbnb <span class="title-tip">爱彼迎后台管理系统</span></h1>
          <el-dropdown>
            <span class="el-dropdown-link">
                <img src="/src/assets/img/hll-my-tx.jpg" alt="">
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <el-main>
          <div>
            <router-view></router-view>
          </div>
        </el-main>
        <el-footer class="main-footer" height="50px">
          <p></p>
        </el-footer>
      </el-container>
      <div class="store" @click="store">保存</div>
    </el-container>
  </div>
</template>
<style>
  *{
    padding: 0;
    margin: 0;
  }

</style>
<style scoped lang="scss">

  $header-height:60px;
  $background-color: #545c64;
  $color: #FFF;

  .main{
    height: 100vh;
    min-width: 800px;
    min-height: 600px;
    overflow: hidden;

    aside{
      overflow: visible;
      height: 100%;
      background-color: $background-color;
      color: $color;

      .isClossTab{
        width: 100%;
        height: $header-height;
        cursor: pointer;
        font-size: 25px;
        text-align: center;
        line-height: $header-height;
        font-weight: bold;
        border-right: 1px solid #807c7c;
        box-sizing: border-box;
      }
      .menu {
        width: 100%;
        border-right:0;


      }

    }

    .main-header {
      background-color: $background-color;
      color: $color;

      .el-dropdown{
        cursor: pointer;
        float: right;
      }
      .el-dropdown-link{

        img{
          $imgMargin: (($header-height - 50)/2);
          display:inline-block;
          width:50px;
          height: 50px;
          border-radius: 25px;
          margin-top: $imgMargin;
        }
      }
    }

    .crumbs {
      margin-bottom: 20px;
    }

    .main-footer{
      text-align: center;
      background-color: $background-color;
      color: $color;
      line-height: 50px;
    }

  }
  .margin{
    margin-left: 20px;
  }
  .indent{
    text-indent: 20px;
  }
  .title{
    position: absolute;
    z-index: 1000;
    color: #fff;
    font-weight: 100;
    font-size: 36px;
    padding-top: 5px;
  }
  .title-tip{
    font-size: 18px;
  }
  .icon-Airbnb{
    font-size:50px;
    font-weight: 100;
  }
  .store{
    font-size: 14px;
    position: absolute;
    right: 30px;
    bottom: 60px;
    padding: 5px 8px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background-color: #409EFF;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    color: #fff;
    cursor: pointer;
  }
</style>

<script>
  import $ from "jquery"
  export default {
    data() {
      return {
        isCollapse: false,
        tabWidth: 200,
        test1: 1,
        intelval: null,
      };
    },
    methods:{
      store(){
        // const fs = require('../../node_modules/fs');
        let storedData = this.$store.state.storedData;
        let storedDataJson = this.$store.state.allData;
        let citys = ["Xian","Bangkok","Index"];
        let index = 0;
        for(let i = 0; i < 3; i ++){
          let len = storedDataJson[citys[i]].length;
          for(let j = 0; j < len; j ++){
            storedDataJson[citys[i]][j].address.country = storedData[index].country;
            storedDataJson[citys[i]][j].address.province = storedData[index].province;
            storedDataJson[citys[i]][j].address.city = storedData[index].city;
            storedDataJson[citys[i]][j].houseTitle = storedData[index].houseTitle;
            storedDataJson[citys[i]][j].price = storedData[index].price;
            storedDataJson[citys[i]][j].type = storedData[index].type;
            storedDataJson[citys[i]][j].stars = storedData[index].stars;
            storedDataJson[citys[i]][j].ownerName = storedData[index].ownerName;
            storedDataJson[citys[i]][j].role = storedData[index].role;
            index++;
          }
        }
        $.get({
          url:'http://localhost:3000/writefile',
          data:{
            storedData:storedDataJson
          },
          function(data){
            console.log(data)
          }
        })
      },
    }
  }
</script>

<template>
    <header>
        <div class="header-top">
            <i class="iconfont icon-houtui1" @click="goindex"></i>
            <input type="text" :value="cityName">
        </div>
      <div class="yincang">
        <router-link to="/Rili"  id="myRili">{{this.$store.state.xdriqi}}</router-link><router-link to="/fangke">{{this.members}}</router-link>
      </div>
        <!--<div class="header-bottom">-->
            <!--<router-link to="/toriqi" style="transition:all 1s" id="changebg">{{this.$store.state.xdriqi}}</router-link>-->
            <!--<router-link to="/persons">{{this.$store.state.num}}位房客</router-link>-->
            <!--<a href="#">筛选条件</a>-->
        <!--</div>-->
    </header>
</template>

<script>
import $ from 'jquery'
export default {
    name:"houselistHeader",
  props:['city'],
    data(){
        return{
          cityName:"",
          "members":"",
        }
    },
  mounted(){
    $(window).scroll(function(){
      var topp=$(document).scrollTop();

      if(topp>40){
        $(".yincang").slideUp('fast')
      } else{
        $(".yincang").slideDown('fast')
      }

    });
    if(this.city === "Xian"){
      this.cityName = "西安";
    }else{
      this.cityName = "曼谷";
    }


    if(this.$store.state.members.kid !== 0){
      this.members = (this.$store.state.members.person + this.$store.state.members.children) + "位，" + this.$store.state.members.kid + "名婴幼儿";
    }else{
      this.members = (this.$store.state.members.person + this.$store.state.members.children) + "位";
    }
  },
    methods:{
        goindex(){
            this.$router.push("/")
        },

    }
}
</script>

<style scoped="scoped">
  .yincang{
    font-size: 0.12rem;
    margin-left: 0;
    width: 100%;
    display: flex;
    margin-bottom: 0.1rem;
  }

  .yincang a{
    display: block;
    padding: 0.05rem;
    color: #3c3c3c;
    border: 1px solid #ddd;
    border-radius: 5px;
    float: left;
    margin-right: .1rem;
  }

header{
    position: fixed;
    top:0 ;
    left:0;
    width:100%;
    box-shadow: 0px 1px 2px #e6e7e9;
    background: #fff;
    padding-top: 0.16rem;
    z-index: 999;
    padding-left:0.25rem;
    padding-right:0.25rem;
    box-sizing: border-box;
}
.header-top{
    height:0.5rem;
    border:1px solid #dfe0e2;
    border-radius: 5px;
    display: flex;
    background:white;
    align-items: center;
    box-shadow: 0 1px 1px #ddd;
  margin-bottom: .1rem;
}
.icon-houtui1{
    margin-left: 0.19rem;
    margin-right:0.19rem;
}
.header-top input{
    height:100%;
    border:none;
    outline: none;
    font-size: 0.12rem;
}
.header-bottom{
    width:100%;
    display: flex;
    padding-top:0.16rem;
    padding-bottom: 0.09rem;
}
.header-bottom a{
    display: block;
    line-height: 0.3rem;
    padding-left:0.14rem;
    padding-right: 0.14rem;
    font-size: 0.12rem;
    color:#303030 ;
    background: white;
    border:1px solid #c5c5c5;
    margin-right: 0.06rem;
    border-radius: 5px;
}

</style>

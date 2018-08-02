<template>

    <div class="header">
  <div @click="goHouse" class="serchBox">
    <i class="iconfont icon-search3"></i>
    <input type="text" placeholder="搜索'瓦伦西亚海岸试试(Coast de Valencia)'试试">
     </div>
    <div class="yincang">
      <router-link to="/Rili"  id="myRili">{{this.$store.state.xdriqi}}</router-link><router-link to="/fangke">{{this.members}}</router-link>
  </div>
</div>


</template>

<script>
import $ from 'jquery'

export default {
    name:"abyIndexHeader",
  data(){
      return {
        "members":"",
      }
  },
    mounted(){

      if(this.$store.state.members.kid !== 0){
        this.members = (this.$store.state.members.person + this.$store.state.members.children) + "位，" + this.$store.state.members.kid + "名婴幼儿";
      }else{
        this.members = (this.$store.state.members.person + this.$store.state.members.children) + "位";
      }

        $(window).scroll(function(){
            var topp=$(document).scrollTop();

            if(topp>40){
              $(".yincang").slideUp('fast')
              } else{
              $(".yincang").slideDown('fast')
            }
         })
        },
    methods:{
       goHouse(){
           this.$router.push('/serach')
       },
    }
}
</script>

<style scoped>
.header{
    width: 100%;
    border-bottom: 1px solid #ecedf0;
    position: fixed;
    top: 0;
    background: #fff;
    z-index: 10;
}
.serchBox{
    width: 3.25rem;
    height: 0.5rem;
    display: flex;
    box-shadow: 1px 1px 5px #ccc;
    border-radius: 5px;
    z-index: 10;
    margin: 0.1rem auto;
    overflow: hidden;
}
.serchBox .icon-search3{
    font-size: 0.18rem;
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    text-align: center;
    line-height: 0.5rem;
}
.serchBox input{
    width: 2.7rem;
    height: 0.5rem;
    outline: none;
    box-sizing: border-box;
    border: none;
}

.yincang{
    font-size: 0.12rem;
    margin-left: 0.25rem;
    width: 100%;
    display: flex;
    margin-bottom: 0.1rem;
}

.yincang a{
    display: block;
    padding: 0.05rem;
    color: #3c3c3c;
    border: 1px solid #d3d3d4;
    border-radius: 5px;
    margin-right: 0.075rem;
}

</style>

<template>
    <div class="addPersons">
      <header class="header">
        <i class="iconfont icon-guanbi" @click="back"></i>
      </header>
      <section class="main">
        <div class="persons">
          <div class="person" v-for="(n,index) in persons" :key="index">
            <div class="left"><span>{{n.person}}</span><span class="detail">{{n.detail}}</span></div>
            <div class="right">
              <div class="sub" ref="sub" @click="sub(index)"><span>-</span></div>
              <div class="num">{{n.num}}</div>
              <div class="add" @click="add(index)"><span>+</span></div>
            </div>
          </div>
          <div class="person">
            <div class="left">宠物</div>
            <div class="right">
              <div class="drag-box" @click="animate">
                <div class="drag-div" ref="drag">
                  <i class="iconfont icon-cuohao"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="tip">{{tip}}</p>
      </section>
      <footer class="footer">
        <order-button :data="'保存'" @click.native="store"></order-button>
      </footer>
      <div class="mes" ref="mes">
        <p class="mes-content">您最多只可以添加{{persons[0].max}}位房客,{{persons[2].max}}名婴幼儿。</p>
        <span class="close" @click="close">关闭</span>
      </div>
    </div>
</template>

<script>
  import $ from "jquery"
  import orderButton from './orderButton'
    export default {
        name: "orderPersons",
      data(){
          return{
            "tip":"最多2位房客。婴幼儿不计入房客人数。",
            "personsLimit":{"person":2,"children":1,"kid":5},
            "persons":[
              {"person":"成人","detail":"","num":this.$store.state.members.person,"max":2,"min":1},
              {"person":"儿童","detail":"2到12岁","num":this.$store.state.members.children,"max":1,"min":0},
              {"person":"婴幼儿","detail":"2岁以下","num":this.$store.state.members.kid,"max":5,"min":0},
            ],
            "pets":false,
            "timeOut":"",
            "flag":0
          }
      },
      components:{
        orderButton
      },
      methods:{
        animate(){
          this.flag++;
          if(this.flag % 2 === 1){
            this.pets = true;
            $(".drag-div").animate({
              "left":".17rem"
            },200);
            $('.drag-div i').removeClass('icon-cuohao').addClass('icon-finish');
          }else{
            this.pets = false;
            $(".drag-div").animate({
              "left":"-.01rem"
            },200);
            $('.drag-div i').removeClass('icon-finish').addClass('icon-cuohao');
          }
        },
        back(){
          this.$router.push('/order');
        },
        sub(index){
          if(this.persons[index].num > this.persons[index].min){
            this.persons[index].num--;
          }else{
            this.persons[index].num = this.persons[index].min;
          }
        },
        check(){
          $('.mes').animate({
            "bottom":'0'
          },80);
          this.timeOut = setTimeout(function(){
            $('.mes').animate({
              "bottom":'-.75rem'
            },80);
          },2000);
        },
        close(){
          clearTimeout(this.timeOut);
          $('.mes').animate({
            "bottom":'-.75rem'
          },80);
        },
        add(index){
          clearTimeout(this.timeOut);
          if(index === 0 || index === 1){
            if(this.persons[0].num + this.persons[1].num === this.persons[0].max){
             this.check();
              return ;
            }
          }
          if(this.persons[index].num < this.persons[index].max){
            this.persons[index].num++;
          }else{
            this.check();
            this.persons[index].num = this.persons[index].max;
          }
        },
        store(){
          this.$store.state.members = {"person":this.persons[0].num,"children":this.persons[1].num,"kid":this.persons[2].num,"pets":this.pets};
          this.$router.push('/order');
        }
      },
      computed:{

      },
      mounted(){

      },
      updated(){

      }
    }
</script>

<style scoped lang="scss" type="text/scss">
  .addPersons{
    width: 100%;
    color: #343434;
  }
  .header {
    width: 100%;
    height: .8rem;
    padding: 0 .25rem;
    box-sizing: border-box;
    overflow: hidden;
    border-bottom: 1px solid #e6e6e6;
    i {
      font-size: .26rem;
      display: block;
      margin-top: .4rem;
    }
  }
  .main{
    width: 100%;
    padding: 0 .25rem;
    box-sizing:border-box;
  }
  .persons{
    width: 100%;
  }
  .person{
    width: 100%;
    height: .84rem;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .left{
    font-size: .14rem;
    display: flex;
    flex-direction: column;
    .detail{
      font-size: .12rem;
    }
  }
  .right{
    display: flex;
    font-size: .14rem;
  }
  .drag-box{
    width: .63rem;
    height: .45rem;
    border: 1px solid #006269;
    border-radius: .23rem;
    background-color: #006269;
  }
  .drag-div{
    width: .45rem;
    height: .45rem;
    border: 1px solid #006269;
    border-radius: .23rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    left: -.01rem;
    top: -.01rem;
    background-color: #fff;
    i{
      color: #006269;
      font-size: .25rem;
    }
  }
  .disabled{
    opacity:0.5;
  }
  .sub, .add{
    display: flex;
    width: .33rem;
    height: .33rem;
    border-radius:50%;
    border: 1px solid #006269;
    color: #006269;
    font-size: .3rem;
  }
  .sub span{
    position: relative;
    left: .1rem;
    top: -.07rem;
  }
  .add span{
    position: relative;
    left: .05rem;
    top: -.07rem;
  }
  .num{
    width: .5rem;
    line-height: .35rem;
    text-align: center;
    font-size: .15rem;
  }
  .tip{
    font-size: .14rem;
    margin-top: .25rem;
  }
  .footer{
    width: 100%;
    height: 1.23rem;
    display: flex;
    align-items: center;
    padding: 0 .25rem;
    box-sizing:border-box;
    position: fixed;
    left: 0;
    bottom: 0;
    border-top: 1px solid #e6e6e6;
  }
  .mes{
    position: fixed;
    left: 0;
    bottom: -.75rem;
    background-color: #fff;
    width: 100%;
    height: .72rem;
    padding: 0 .35rem;
    box-sizing:border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .mes-content{
    font-size: .15rem;
  }
  .close{
    color: #008489;
    font-size: .15rem;
  }
</style>

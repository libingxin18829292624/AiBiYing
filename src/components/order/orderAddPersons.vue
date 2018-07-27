<template>
    <div class="addPersons">
      <header class="header">
        <i class="iconfont icon-guanbi"></i>
      </header>
      <section class="main">
        <div class="persons">
          <div class="person" v-for="(n,index) in persons" :key="index">
            <div class="left"><span>{{n.person}}</span><span class="detail">{{n.detail}}</span></div>
            <div class="right">
              <div class="sub" ref="sub" :class="{disabled:check}" @click="sub(index)"><span>-</span></div>
              <div class="num">{{n.num}}</div>
              <div class="add" @click="add(index)"><span>+</span></div>
            </div>
          </div>
          <div class="person">
            <div class="left">宠物</div>
            <div class="right">
              <div class="drag-box">
                <div class="drag-div">
                  <i class="iconfont icon-guanbi"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="tip">{{tip}}</p>
      </section>
      <footer class="footer">
        <order-button :data="'保存'"></order-button>
      </footer>
    </div>
</template>

<script>
  import orderButton from './orderButton'
    export default {
        name: "orderPersons",
      data(){
          return{
            "tip":"最多2位房客。婴幼儿不计入房客人数。",
            "persons":[
              {"person":"成人","detail":"","num":1,"max":2,"min":1},
              {"person":"儿童","detail":"2到12岁","num":0,"max":1,"min":0},
              {"person":"婴幼儿","detail":"2岁以下","num":0,"max":5,"min":0},
            ]
          }
      },
      components:{
        orderButton
      },
      methods:{
        sub(index){
          if(this.persons[index].num > this.persons[index].min){
            this.persons[index].num--;
          }else{
            this.persons[index].num = this.persons[index].min;
          }
        },
        add(index){
          if(index === 0 || index === 1){
            if(this.persons[0].num + this.persons[1].num >= this.persons[0].max){
              return ;
            }
          }
          if(this.persons[index].num < this.persons[index].max){
            this.persons[index].num++;
          }else{
            this.persons[index].num = this.persons[index].max;
          }
        }
      },
      computed:{

      },
      mounted(){

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
    height: .85rem;
    display: flex;
    align-items: center;
    padding: 0 .25rem;
    box-sizing:border-box;
    position: fixed;
    left: 0;
    bottom: 0;
    border-top: 1px solid #e6e6e6;
  }
</style>

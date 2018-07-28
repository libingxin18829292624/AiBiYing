<template>
<div class="bianli">
  <div class="header">
    <i class="iconfont icon-chacha"></i>
    <h1>便利设施</h1>
  </div>
  <div class="content">
    <ul>
      <li v-for="n in one" class="da">{{n.stairOne}}
            <p>{{n.stairTwo}}</p>
            <span>{{n.stairhtree}}</span>
            <p>{{n.stairFour}}</p>
            <span>{{n.stairFive}}</span>
            <p>{{n.stairSix}}</p>
            <span>{{n.stairSeven}}</span>
            <p>{{n.stairEight}}</p>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
    export default {
        name: "housedetailBianlisheshi",
      data(){
          return{
            one:[
              {
                stairOne:"基础设施",
                stairTwo:"无线网络",
                stairhtree:"可在房源内持续使用",
                stairFour:"生活必须品",
                stairFive:"毛巾、床单、香皂和卫生纸",
                stairSix:"暖气",
                stairSeven:"中央暖气或房源内的暖气设备",
                stairEight:"空调",

              },
              {
                stairOne:"设施",
                stairhtree:"电梯",
              },
              {
                stairOne:"用餐",
                stairhtree:"提供早餐",
              },
              {
                stairOne:"房客使用权限",
                stairhtree:"房东将会迎接您",

              },
              {
                stairOne:"床和浴室",
                stairhtree:"洗发水",
              },
              {
                stairOne:"未配备",
                stairTwo:"",
                stairhtree:"厨房",
                stairFour:"",
                stairFive:"电视",
                stairSix:"",
                stairSeven:"独立入口",
                stairEight:"",
              },

            ],
          }
      }
    }
</script>

<style scoped>
  .bianli{
  }
.header{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
  .iconfont{
    font-size: 0.14rem;
    color: #292929;
    padding-top: 0.255rem;
    padding-left: 0.25rem;
    display: block;
    width: 100%;
  }
  h1{
    font-size: 0.25rem;
    color: #484848;
    padding-left: 0.25rem;
    padding-top: .31rem;
  }

  .content{
    width: 100%;
  }
  .da{
    font-size: 0.215rem;
    color: #464646;
    border-bottom: 1px solid #e5e5e5;
    padding-top: 0.27rem;
    font-weight: 600;
    padding-left: 0.25rem;
  }
 p{
    font-size: 0.15rem;
    color: #464646;
   font-weight: 100;

 }
span{
    font-size: 0.125rem;
    color: #464646;
    padding-top: 0.15rem;
    font-weight: 100;

}
  </style>

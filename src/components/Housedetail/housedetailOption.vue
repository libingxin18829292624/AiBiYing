<template>
  <aby-transtion>
<div class="option">
  <div class="content_5">
    <ul>
      <li @click="sh(index)" v-for="(i,index) in shijian"><span>{{i.condition}}</span><span class="yanse">{{i.degree}}</span></li>
    </ul>
  </div>
</div>
  </aby-transtion>
</template>

<script>
  import abyTranstionToTopfast from "../common/abyTranstionToTopFast"
  import AbyTranstion from "../common/abyTranstionToLeft";
    export default {
        name: "housedetailOption",
      components: {AbyTranstion},
      abyTranstionToTopfast,
      data(){
        return{

          shijian:[
            { "condition":"房屋守则",
              "degree":"阅读"
            },
            { "condition":"退订政策",
              "degree":"中等"
            },
            { "condition":"其他价格",
              "degree":"查看"
            },
            { "condition":"可订状态",
              "degree":"查看"
            },
            { "condition":"联系房东",
              "degree":"消息"
            },
            { "condition":"举报此房源",
              "degree":"举报"
            }
          ]
        }
      },
      methods:{
        sh(n){
          switch(n){
            case 3:this.$router.push('/housedetailRili');break;
            case 4:this.$router.push('/housedetailJubao');break;
            case 5:this.$router.push('/housedetailZiye');break;
          }
        },
      },
    }
</script>

<style scoped>
  .content_5{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  ul{
    width: 100%;

    margin-right:0.25rem;
    margin-left: 0.25rem;
  }
  li{
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 0.15rem;
    color: #545454;
    line-height: 0.685rem;
    border-bottom: 1px solid #e7e7e7;
  }
  .yanse{
    color: #007c81;
  }

</style>

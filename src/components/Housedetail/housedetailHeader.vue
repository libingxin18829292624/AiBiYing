<template>
    <div class="header">
      <div id="searchBar" class="header_2">
      <i class="iconfont1 iconfont icon-houtui"></i>
      <i class="iconfont2 iconfont icon-xin"></i>
      </div>
    </div>
</template>

<script>
    export default {
      name: "HousedetailHeader",
      mounted () {
        window.addEventListener('scroll', this.handleScroll)
      },
      methods: {
        handleScroll () {
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          var offsetTop = document.querySelector('#searchBar').offsetTop;

          if(scrollTop<=0){
            offsetTop = 0- Number(scrollTop);
            document.querySelector('#searchBar').style.top = offsetTop+'0rem';
            document.querySelector('#searchBar').style.background = 'none';
            document.querySelector('.iconfont1').style.color = '#fff';
            document.querySelector('.iconfont2').style.color = '#fff';

          }else if(scrollTop>=2.285){
            document.querySelector('#searchBar').style.top = '0rem';
            document.querySelector('#searchBar').style.background = '#fff';
            document.querySelector('.iconfont1').style.color = '#000';
            document.querySelector('.iconfont2').style.color = '#000';
          }
        },
      },
      destroyed () {//离开该页面需要移除这个监听的事件
        window.removeEventListener('scroll', this.handleScroll)
      },
      }

</script>

<style scoped>
  .header{
    width: 100%;
    height: 2.285rem;
    background: url("../../assets/img/s_header_bj.jpg") no-repeat;
    background-size:100%;
    display: flex;
    justify-content: space-between;

  }
  .header_2{
    width: 100%;
    height: 0.7rem;
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 999;
    top: 0rem;
    justify-content: space-between;
    transition: all .5s;
  }
  .iconfont{
    font-size: 0.25rem;
    color: #fff;
  }
  .iconfont1{
    padding-left: 0.25rem;
  }
  .iconfont2{
    padding-right: 0.25rem;
  }

</style>

<template>
    <div class="part3">
        <div class="suggess">
            <h1>建议搜索</h1>
            <div class="searchBoxs">
                <a href="#"><h2>曼谷</h2><p>推荐搜索</p></a>
                <a href="#"><h2>西安</h2><p>热门搜索</p></a>
                <a href="#"><h2>北京</h2><p>本周热搜</p></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   name:"abyIndexPart3",
}
</script>

<style scoped>
.suggess{
    width: 100%;
    height: 2rem;
  padding: 0 .25rem;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.suggess h1{
    font-size: 0.2rem;
    color: #424242;
  margin-bottom: .1rem;
}
.searchBoxs{
    display: flex;
    justify-content: space-between;
  margin-bottom: .5rem;
}
.searchBoxs a{
    width: 32%;
    height: 1rem;
    text-align: center;
    border-radius: 5px;
    background: #339d95;
  padding: .2rem 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.searchBoxs a h2{
    font-size: 0.2rem;
    color: #fff;

}
.searchBoxs a p{
    font-size: 0.12rem;
    color: #99ccc9;
}


</style>

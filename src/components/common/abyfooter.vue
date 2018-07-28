<template>
    
        <div class="footer">
    <a href="#">
     <i class="iconfont icon-search3"></i>
        <p>浏览</p>
    </a>
    <a href="#">
            <i class="iconfont icon-xin"></i>
               <p>心愿单</p>
           </a>
           <a href="#">
                <i class="iconfont icon-xiaoshumiao"></i>
                   <p>故事</p>
               </a>
               <a href="#">
                    <i class="iconfont icon-icon-test"></i>
                       <p>收件箱</p>
                   </a>
                   <a href="#">
                        <i class="iconfont icon-people"></i>
                           <p>我的</p>
                       </a>





</div>
   
</template>

<script>
import $ from 'jquery'
export default {
    name:"abyfooter",
    methods:{
       
    },
    mounted(){
        $('.footer').find("a").click(function(){
            $(this).addClass("active").siblings().removeClass("active")
               
        })
    }
    
}
</script>

<style>
.footer{
    width: 100%;
    height: 0.5rem;
    display:flex;
    bottom: 0;
    background: #fff;
    position: fixed;
    padding-top: 0.1rem;
}
.footer a{
    width: 20%;
    height: 0.55rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
     color: #4f4f4f;
}
.footer a p{
    font-size: 0.1rem;
   
}

.footer a i{
    font-size: 0.25rem;
    
}
.active {
    color: red!important;
}
</style>

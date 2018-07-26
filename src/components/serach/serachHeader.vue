<template>

     <header>
        <div class="header-tou">
            <a href="#">×       </a>
            <a href="#">重置</a>
        </div>
        <div class="header-jiao">
            <input type="text" placeholder="想去哪里？" id="dizhi">
        </div>
    </header>
</template>

<script>
export default {
    name:"serachHeader",
    data(){
        return{ 
            
        }
    }
}
</script>

<style>
header{
    width:100%;
    height:1.39rem;
    box-shadow: 0 3px 10px #c8c8c8;
}
.header-tou{
    width:100%;
    display: -webkit-flex;
    justify-content:space-between;
    align-items: center;
}
.header-tou a:nth-child(1){
    color:#4b4b4b;
    font-size: 0.3rem;
    margin-left:0.24rem;
    /* font-weight: 600; */
}
.header-tou a:nth-child(2){
    color:#4b4b4b;
    font-size: 0.12rem;
    margin-right:0.19rem;
}
.header-jiao{
    width:100%;
    margin-top:0.18rem;
}
.header-jiao input{
    display: block;
    width:100%;
    height:0.4rem;
    text-indent: 0.24rem;
    font-size: 0.2rem;
    font-weight: 600;
    color:#414443;
    border:none;
    outline: none;
}

input::-webkit-input-placeholder, textarea::-webkit-input-placeholder { 
    /* WebKit browsers */ 
   color: #c7c5c5; 
   } 
input:-moz-placeholder, textarea:-moz-placeholder { 
   /* Mozilla Firefox 4 to 18 */ 
   color: #c7c5c5; 
   } 
input::-moz-placeholder, textarea::-moz-placeholder { 
    /* Mozilla Firefox 19+ */ 
   color: #c7c5c5; 
   } 
input:-ms-input-placeholder, textarea:-ms-input-placeholder { 
    /* Internet Explorer 10+ */ 
   color: #c7c5c5; 
   } 
</style>

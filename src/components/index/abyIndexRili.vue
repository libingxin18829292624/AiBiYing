 <template>
     <div>
         <div class="Notehead">
       <div class="Notenav">
        <i  class="iconfont icon-chacha"></i>
        <h3>清楚</h3>
       </div>
       <div class="Ndate">
           <h2>开始日期</h2>
           <h2>结束日期</h2>
       </div>
       <div class="Nweeks">
          <p>日</p>
          <p>一</p>
          <p>二</p>
          <p>三</p> 
          <p>四</p>
          <p>五</p>
          <p>六</p>
       </div>
   </div>
<div class="Rili">
    <ul>
        <li>
            <h2>七月</h2>
            <tr>
                <td>1</td>
            </tr>
        </li>
    </ul>
</div>

    <div class="NotFooter">
        <a href="#">保存</a>
    </div>
     </div>
 </template>
 
 <script>
 import $ from 'jquery'
 export default {
     name:"abyIndexRili",
     data(){
         return{
               
                dayarr: [],
                year:new Date().getFullYear(),
                month:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",]
         }
     },
     mounted(){
         console.log()
     }
      
 }
 
 </script>
 
 <style>
 .Notehead{
    width: 100%;
    height: 1.98rem;
    border-bottom: 2px solid #e5e5e5;
}
.Notenav{
    width: calc(100% - 0.5rem);
    height: 0.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.25rem;
}
.Notenav .icon-chacha{
    font-size: 0.17rem;
    color: #484848;
}
.Notenav h3{
    font-size: 0.12rem;
    color: #484848;
}
.Ndate{
    width: calc(100% - 0.5rem);
    height: 0.75rem;
    display: flex;
    padding: 0 0.25rem;
    align-items: center;
    justify-content: space-between;
}
.Ndate h2{
     font-size: 0.21rem;
    color: #3a3a3a;
}
.Nweeks{
      width: 100%;
    height: 0.63rem;
    display: flex;
    justify-content:space-around;
    align-items: center;
}
.Nweeks p{
    font-size: 0.12rem;
    color: #2c2c2c;
    margin-top: 0.3rem;
}

/* rili */
.canlender {
    width: 100%;
    overflow: scroll;
   height: 3.7rem;
}

table {
    border-collapse: collapse;
    width: 100%;
}
table.bgtable tbody tr{
    width: 100%;
    display: flex;
    justify-content: space-around;
}


table.bgtable thead tr th{
    font-size: 0.22rem;
    color: #484848;
    text-align: left;
    padding: 0.22rem;
} 
table.bgtable tbody tr td {
        text-align: center;
        font-size: 0.12rem;
        width: 0.5rem;
        
        height: 0.5rem;
        line-height: 0.5rem;
       
}
table.bgtable tbody tr td.gray{
   visibility: hidden;
}
.asscc{
    background: #008489!important;
    border-radius: 50%;
}

.NotFooter{
    font-size: 0.12rem;
    width: 100%;
    height: 0.85rem;
    text-align: center;
    line-height: 0.85rem;
    
}
.NotFooter a{
    padding: 0.18rem 1.5rem;
    background: #008489;
    border-radius: 5px;
    color: #fff;
}


 </style>
 
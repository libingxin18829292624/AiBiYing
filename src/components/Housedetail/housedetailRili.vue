 <template>
   <aby-transtion-to-top>
     <div class="rili-container">
         <div class="Notehead">
       <div class="Notenav">
        <i class="iconfont icon-chacha" @click="back"></i>
        <h3 @click="reset">清除</h3>
       </div>
       <div class="Ndate">
           <h2 class="start-date">入住日期</h2>
           <img src="/src/assets/img/l2.png" alt="">
           <h2 class="end-date">退房日期</h2>
       </div>
       <ul class="Nweeks">
          <li>日</li>
          <li>一</li>
          <li>二</li>
          <li>三</li>
          <li>四</li>
          <li>五</li>
          <li>六</li>
       </ul>
   </div>
    <div class="Rili">
       <ul class="rili-scrollBox">
         <li class="month-box" v-for="(n,index) in riliData" :key="index">
           <h3 class="month">{{n.month}}</h3>
           <div class="days">
             <span class="day" v-for="(m,Mindex) in n.days" @click="choose(index,$event)">{{Mindex + 1}}<span style="display:none">{{n.year}}/{{n.numberMonths}}/{{Mindex+1}}</span></span>
           </div>
         </li>
       </ul>
     </div>
    <div class="NotFooter">
      <div class="choosed"></div>
      <div class="store" @click="store">保存</div>
    </div>
     </div>
   </aby-transtion-to-top>
 </template>

 <script>
   import $ from 'jquery'
   import abyTranstionToTop from '../common/abyTranstionToTop'
 export default {
     name:"housedetailRili",
     data(){
        return {
          "ppac":false,
          "year":"",
          "currMonth":"",
          "months":[],
          "numberMonths":[],
          "date":[],
          "startWeekday":[],
          "days":"",
          "riliData":[],
          "startDate":"",
          "endDate":"",
          "startIndex":"",
          "endIndex":"",
          "target":"",
          "count":0,
          "dayArr":["周日","周一","周二","周三","周四","周五","周六"],
        }
     },
   components:{
     abyTranstionToTop
   },
   methods:{
     back(){
       window.history.back();
     },
     reset(){
       this.startDate = "";
       this.endDate = "";
       this.target = "";
       this.count = "";
       this.startIndex = "";
       this.endIndex = "";
       $('.start-date').html("入住日期");
       $('.end-date').html("退房日期");
       $('.day').removeClass('active active-start active-end active-middle');
     },
     initData(){
       let date = new Date();
       let monthArr = ["","一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];
       let dayArr = ["",31,28,31,30,31,30,31,31,30,31,30,31];
       this.year = date.getFullYear();
       this.currMonth = date.getMonth() + 1;
       let months = [this.currMonth - 1,this.currMonth,this.currMonth + 1,this.currMonth + 2,this.currMonth + 3,this.currMonth + 4];
       this.numberMonths = months;
       this.date = date.getDate();
       this.months = [monthArr[months[0]],monthArr[months[1]],monthArr[months[2]],monthArr[months[3]],monthArr[months[4]],monthArr[months[5]]];
       this.days = [dayArr[months[0]],dayArr[months[1]],dayArr[months[2]],dayArr[months[3]],dayArr[months[4]],dayArr[months[5]]];
       this.startWeekday = [new Date(date.getFullYear(),months[0] - 1,1).getDay(),new Date(date.getFullYear(),months[1] - 1,1).getDay(),new Date(date.getFullYear(),months[2] - 1,1).getDay(),new Date(date.getFullYear(),months[3] - 1,1).getDay(),new Date(date.getFullYear(),months[4] - 1,1).getDay(),new Date(date.getFullYear(),months[5] - 1,1).getDay()];
       for(let i = 0; i < 6; i++){
         this.riliData.push({
           "year":this.year,
           "month":this.months[i],
           "days":this.days[i],
           "numberMonths":this.numberMonths[i],
           "startWeekday":this.startWeekday[i],
         });
       }
     },
     initUI(){
       for(let i = 0; i < 6; i++){
         console.log($('.days')[i]);
         $('.days')[i].firstChild.style.marginLeft = (this.startWeekday[i] * 14.3) + "%";
       }
     },
     choose(index,$event){
       $event.stopPropagation();
       if($event.target !== this.target){
         this.count = (this.count + 1) % 2;
         this.target = $event.target;
         if(this.count === 1){
           $('.day').removeClass('active active-start active-end active-middle');
           if($(".money").index($event.target) < 0){
             console.log(11111)
             $($event.target).addClass('active');
           }else{
             $($event.target).parent().addClass('active');
           }
           this.startDate = $event.target.firstElementChild.innerHTML;
           this.startIndex = $('.day').index($event.target);
           this.endIndex = "";
           $(".end-date").html("退房日期");
           $(".start-date").html("<span>" + this.dayArr[new Date(this.startDate).getDay()] + "</span><br><span>" + this.startDate + "</span>")
         }else{
           let endDate = $event.target.firstElementChild.innerHTML.split('/');
           let startDate = this.startDate.split('/');
           if(new Date(endDate[0],endDate[1],endDate[2]) - new Date(startDate[0],startDate[1],startDate[2]) < 0){
             this.count++;
             $('.day').removeClass('active active-start active-end active-middle');
             if($(".money").index($event.target) < 0){
               console.log(11111)
               $($event.target).addClass('active');
             }else{
               $($event.target).parent().addClass('active');
             }
             this.startDate = $event.target.firstElementChild.innerHTML;
             this.startIndex = $('.day').index($event.target);
             this.endIndex = "";
             $(".end-date").html("退房日期");
             $(".start-date").html("<span>" + this.dayArr[new Date(this.startDate).getDay()] + "</span><br><span>" + this.startDate + "</span>")
           }else{
             this.endIndex = $('.day').index($event.target);
             for(let i = this.startIndex; i <= this.endIndex; i++){
               $('.day').eq(i).addClass('active-middle');
             }
             $('.day').eq(this.startIndex).removeClass('active').addClass('active-start');
             $('.day').eq(this.endIndex).removeClass('active').addClass('active-end');
             this.endDate = $event.target.firstElementChild.innerHTML;
             $(".end-date").html("<span>" + this.dayArr[new Date(this.endDate).getDay()] + "</span><br><span>" + this.endDate + "</span>")
           }
         }
       }
     },
     store(){
       window.history.back();
     }
   },
    created(){
      this.initData();
      console.log(this.months);
      console.log(this.days);
      console.log(this.startWeekday);
      console.log(this.riliData);
    },
   mounted(){
     this.initUI();
   }
 }
 </script>

 <style type="text/scss" scoped lang="scss">
   .rili-container{
     background-color: #fff;
     z-index: 10000;
   }
 .Notehead{
    width: 100%;
    height: 1.98rem;
    border-bottom: 1px solid #e5e5e5;
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
  font-weight: 100;
}
.Ndate{
    width: calc(100% - 0.5rem);
    height: 0.75rem;
    display: flex;
    padding: 0 0.25rem;
    align-items: center;
    justify-content: space-between;
  img{
    width: 20%;
    height: .5rem;
  }
}
.start-date{
     font-size: 0.21rem;
    color: #3a3a3a;
  font-weight: 100;
  width: 40%;
  text-align:left;
}
 .end-date{
   font-size: 0.21rem;
   color: #3a3a3a;
   font-weight: 100;
   width: 40%;
   text-align: right;
 }
.Nweeks{
      width: 100%;
    height: 0.63rem;
    display: flex;
    justify-content:space-around;
    align-items: center;
}
.Nweeks li{
    font-size: 0.12rem;
    color: #2c2c2c;
    margin-top: 0.3rem;
}

/* rili */
 .rili-scrollBox{
   width: 100%;
 }
 .month-box{
   width: 100%;
 }
 .month{
   font-size: .2rem;
   font-weight: 100;
   margin: .1rem 0 .1rem .2rem;
 }
 .days{
   width: 100%;
   overflow: hidden;
 }
 .day{
   width: .534rem;
   height: .534rem;
   float: left;
   font-size: .13rem;
   text-align: center;
   margin: .1rem 0;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   z-index: 100;
 }

.Rili{
    width: 100%;
    height: 3.85rem;
    overflow-y: scroll;
}

.theday{
    width:100%;
    height:2.5rem;

}
.theday li{
     font-size: 0.12rem;
    color: #484848;
    width: 0.53rem;
    float: left;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: center;
}
.active{
    border-radius: 50%;
    background: #008489;
    color: #000!important;
}
.active-font{
  color:#fff;
}
.active-start{
  border-bottom-left-radius: 50%;
  border-top-left-radius: 50%;
  background: #008489;
}
 .active-end{
   border-bottom-right-radius: 50%;
   border-top-right-radius: 50%;
   background: #008489;
 }
 .active-middle{
   background: #008489;
 }

.NotFooter{
    font-size: 0.12rem;
    width: 100%;
    height: 0.85rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .2rem .25rem;
  box-sizing:border-box;
}
.store{
  width: 100%;
  height: 100%;
  background-color: #008489;
  border-radius:3px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
 </style>

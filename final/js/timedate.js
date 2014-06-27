var show_time=false;
var timerID=null;

function stop(){
   if (show_time){
       clearTimeout(timerID);
       document.clock.date_time.value=" ";
   }
   show_time=false;
}

function start(form){
   var today=new Date();
   var display_value =" The time is now " + today.getHours()
   if(today.getMinutes() < 10){ 
      display_value+=":0" + today.getMinutes();
   }
   else{
      display_value+=":" + today.getMinutes();
   }
   if (today.getSeconds() < 10){
      display_value+=":0" + today.getSeconds();
   }
   else{
      display_value+=":" + today.getSeconds();
   }
   if(today.getHours()>=12){
      display_value+=" P.M."
   }
   else{
      display_value+=" A.M."
   } 
   display_value += " and the date is " + (today.getMonth()+1) + "/"  +
      today.getDate() + "/" + today.getFullYear() + ".";
      document.clock.date_time.value=display_value;
      timerID=setTimeout("start()",100);
      show_time=true;
}
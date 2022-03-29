
var hour = 00;
var minute = 00;
var second = 00;
var millisecond = 00;

var cron;

function start() {
    timer();
    cron = setInterval (timer,1000);
  }
  
  function pause() {
    clearInterval(cron);
  }
  
  function reset() {
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    document.getElementById('timer').innerText='00:00:00'
  }

  function timer() {
    second++
    if (second==60){
        minute++
        second=0
    }
    if(minute==60){
      minute=0
      hour++
    }
   document.getElementById('timer').innerText=returnData(hour)+":"+returnData(minute)+";"+returnData(second)
  }
  
  function returnData(digito) {
if (digito<10){
return("0"+digito)
}
else{
    return(digito)
}
  }

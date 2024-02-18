//splash
var SplashScreen = document.querySelector('.splash_screen');
SplashScreen.addEventListener('click', ()=>{
    SplashScreen.style.opacity = 0;
  
    setTimeout(()=>{
        SplashScreen.classList.add('hidden')
      },610)
})

//splash

let time_value = [second, minute, hour] = [0,0,0];
let ds_time = document.getElementById("display_time");
let timer = null;

function stop_watch() {
    second++;
    if (second == 60){
        second = 0;
        minute++;
        if (minute == 60){
            minute = 0;
            hour++;
        }

    }
    s = second < 10 ? "0" + second : second;
    m = minute < 10 ? "0" + minute : minute;
    h = hour < 10 ? "0" + hour : hour;

    ds_time.innerHTML = h +" "+":"+" "+ m +" "+":"+" "+ s;

}

function start(){
    if (timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(stop_watch, 1000);

}
function stop(){
    clearInterval(timer);   
}
function reset(){
    clearInterval(timer); 
    [second, minute, hour] = [0,0,0];
    ds_time.innerHTML = "00 : 00 : 00"  
}

 
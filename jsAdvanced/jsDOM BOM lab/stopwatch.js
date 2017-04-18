/**
 * Created by k.asenov on 29.3.2017 ã..
 */
function stopwatch(){
    "use strict";
    let startBtn = document.getElementById("startBtn");
    let stopBtn = document.getElementById("stopBtn");
    let time=document.getElementById("time");
    startBtn.addEventListener("click", startCounter);
    stopBtn.addEventListener("click",stopCounter);

    function startCounter(){
        startBtn.disabled = false;
        stopBtn.disabled = true;
        time.innerHTML="00:00";
        setInterval(tick,1000);

    }

    function stopCounter(){
        startBtn.disabled = true;
        stopBtn.disabled = false;


    }
    function tick(){

    }



}

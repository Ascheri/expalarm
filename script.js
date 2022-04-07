// Timer
function startTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s;
    let t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i}; 
    return i;
}

// ShowAndHide
let isHidden = 0;
function showAndHide(){
    if (isHidden === 0) {
    isHidden = isHidden + 1;
    document.getElementById("settings").style.display="block";
    document.getElementById("settings").style.height="100%";
    document.getElementById("settings").style.animation="brighter 0.3s";
    hidebutton.value="굿";
    }
    else {
    isHidden = isHidden - 1;
    document.getElementById("settings").style.animation="darker 0.3s forwards";
    document.getElementById("settings").style.height="0px";
    hidebutton.value="굿";
    }
}

// get minute
const bringtime = new Date();

//audio
let audio1 = new Audio("sounds/beach.mp3");
audio1.loop = true;
audio1.volume = 0.5;

//playaud
function playaud(){
    audio1.play();
    audio1.volume = 0.5;
}

//stopaud
function stopaud(){
    audio1.volume = 0.0;
}

//시간 출력, 오디오 재생
function writeTime(){
    let bringtime5 = new Date();

    if(bringtime5.getMinutes() == 14 && bringtime5.getSeconds() >= 30){
        playaud();
        }
    else if (bringtime5.getMinutes() == 44 && bringtime5.getSeconds() >= 30){
        playaud();
    }
    else{
        stopaud();
    }

}
setInterval(writeTime, 500);

// 콘솔로그 -     console.log(` ${bringtime5.getMinutes()}분${bringtime5.getSeconds()}초`);

//This is Javascript.It is external!!!
var sec = 00;
var min = 00;
var milisec = 00;
var hou = 00;
function startit() {
    checkthekey();
    var resultlabel = document.createElement('label');
    var contdiv = document.getElementById('container');
    var startbtn = document.getElementById('btn1');
    var restartbtn = document.createElement('button');
    var restartdiv = document.getElementById('restartdiv');

    var resetbtndiv = document.getElementById("resetdiv");
    var pausebtndiv = document.getElementById("pausediv");

    var resetbtn = document.createElement('button');
    var pausebtn = document.createElement('button');

    resetbtn.id = "btn2";
    pausebtn.id = "btn3";
    restartbtn.id = "btn4";

    resetbtn.title = "Reset!";
    pausebtn.title = "Pause!";
    restartbtn.title = "Resume!";
    startbtn.title = "Disabled!";

    resetbtn.innerHTML = "<img src='refreshing.png' class='img1' width='35px' alt='Reset'><label class='l1'>Reset</label>";
    pausebtn.innerHTML = "<img src='pause.png' class='img1' width='35px' alt='Pause'><label class='l1'>Pause</label>";
    restartbtn.innerHTML = "<img src='play.png' class='img1' width='35px' alt='Resume'><label class='l1'>Resume</label>";
    startbtn.innerHTML = "";
    startbtn.innerHTML = "<img src='power.png' class='img1' width='35px' alt='Start'><label id='l2'>Start</label>";

    resultlabel.id = 'result';
    resultlabel.classList.add('timerlabel');

    resetbtndiv.appendChild(resetbtn);
    pausebtndiv.appendChild(pausebtn);
    contdiv.appendChild(resultlabel);
    contdiv.classList.add("boxborderdiv");
    settimer();

    var rebtn = document.getElementById("btn2");
    var pabtn = document.getElementById("btn3");
    startbtn.disabled = "true";

    rebtn.addEventListener("click", function () {
        location.reload();
    });

    pabtn.addEventListener("click", function () {
        clearInterval(mainthing);
        pabtn.disabled = "true";
        restartdiv.appendChild(restartbtn);
        resultlabel.classList.add('userselectlabel');
        pabtn.title = "Disabled";


        var resbtn = document.getElementById("btn4");
        resbtn.addEventListener("click", function () {
            restartdiv.removeChild(restartbtn);
            pabtn.disabled = false;
            resultlabel.classList.remove('userselectlabel');
            pabtn.title = "Pause!";
            setTimefunc();
        });
    });
    console.clear();
}

function settimer() {
    // var resulttimer = document.getElementById("result").value;
    //document.getElementById("result").innerHTML = "00:00";
    setTimefunc();
}

function setTimefunc() {
    mainthing = setInterval(starttimer, 10);
}

function starttimer() {
    if (milisec >= 100) {
        if (sec >= 10) {
            if (min >= 10) {
                if (hou >= 10) {
                    document.getElementById("result").innerHTML = String(hou) + ":" + String(min) + ":" + String(sec) + ":" + String(milisec);
                } else {
                    document.getElementById("result").innerHTML = String("0" + hou) + ":" + String(min) + ":" + String(sec) + ":" + String(milisec);
                }
            } else {
                if (hou >= 10) {
                    document.getElementById("result").innerHTML = String(hou) + ":" + String("0" + min) + ":" + String(sec) + ":" + String(milisec);
                } else {
                    document.getElementById("result").innerHTML = String("0" + hou) + ":" + String("0" + min) + ":" + String(sec) + ":" + String(milisec);
                }
            }
        } else {
            if (hou >= 10) {
                document.getElementById("result").innerHTML = String(hou) + ":" + String(min) + ":" + String("0" + sec) + ":" + String(milisec);
            } else {
                document.getElementById("result").innerHTML = String("0" + hou) + ":" + String(min) + ":" + String("0" + sec) + ":" + String(milisec);
            }
        }
    } else {
        if (milisec >= 10) {
            if (sec >= 10) {
                if (min >= 10) {
                    if (hou >= 10) {
                        document.getElementById("result").innerHTML = String(hou) + ":" + String(min) + ":" + String(sec) + ":" + String("0" + milisec);
                    } else {
                        document.getElementById("result").innerHTML = String("0" + hou) + ":" + String(min) + ":" + String(sec) + ":" + String("0" + milisec);
                    }
                } else {
                    if (hou >= 10) {
                        document.getElementById("result").innerHTML = String(hou) + ":" + String("0" + min) + ":" + String(sec) + ":" + String("0" + milisec);
                    } else {
                        document.getElementById("result").innerHTML = String("0" + hou) + ":" + String("0" + min) + ":" + String(sec) + ":" + String("0" + milisec);
                    }
                }
            } else {
                if (min >= 10) {
                    if (hou >= 10) {
                        document.getElementById("result").innerHTML = String(hou) + ":" + String(min) + ":" + String("0" + sec) + ":" + String("0" + milisec);
                    } else {
                        document.getElementById("result").innerHTML = String("0" + hou) + ":" + String(min) + ":" + String("0" + sec) + ":" + String("0" + milisec);
                    }
                } else {
                    if (hou >= 10) {
                        document.getElementById("result").innerHTML = String(hou) + ":" + String("0" + min) + ":" + String("0" + sec) + ":" + String("0" + milisec);
                    } else {
                        document.getElementById("result").innerHTML = String("0" + hou) + ":" + String("0" + min) + ":" + String("0" + sec) + ":" + String("0" + milisec);
                    }
                }
            }
        } else {
            if (sec >= 10) {
                if (min >= 10) {
                    if (hou >= 10) {
                        document.getElementById("result").innerHTML = String(hou) + ":" + String(min) + ":" + String(sec) + ":" + String("00" + milisec);
                    } else {
                        document.getElementById("result").innerHTML = String("0" + hou) + ":" + String(min) + ":" + String(sec) + ":" + String("00" + milisec);
                    }
                } else {
                    if (hou >= 10) {
                        document.getElementById("result").innerHTML = String(hou) + ":" + String("0" + min) + ":" + String(sec) + ":" + String("00" + milisec);
                    } else {
                        document.getElementById("result").innerHTML = String("0" + hou) + ":" + String("0" + min) + ":" + String(sec) + ":" + String("00" + milisec);
                    }
                }
            } else {
                if (min >= 10) {
                    if (hou >= 10) {
                        document.getElementById("result").innerHTML = String(hou) + ":" + String(min) + ":" + String("0" + sec) + ":" + String("00" + milisec);
                    } else {
                        document.getElementById("result").innerHTML = String("0" + hou) + ":" + String(min) + ":" + String("0" + sec) + ":" + String("00" + milisec);
                    }
                } else {
                    if (hou >= 10) {
                        document.getElementById("result").innerHTML = String(hou) + ":" + String("0" + min) + ":" + String("0" + sec) + ":" + String("00" + milisec);
                    } else {
                        document.getElementById("result").innerHTML = String("0" + hou) + ":" + String("0" + min) + ":" + String("0" + sec) + ":" + String("00" + milisec);
                    }

                }
            }
        }
    }

    milisec = milisec + 1;
    if (milisec >= 100) {
        sec = sec + 1;
        milisec = 0;
        if (sec >= 60) {
            min = min + 1;
            sec = 0;
            if (min >= 60) {
                hou = hou + 1;
                min = 0;
            }

        }
    }
}

document.onkeydown = function(e){
    if(e.keyCode == 13){
        var btn8 = document.getElementById("btn1");
        if(btn8.disabled == true){
            document.getElementById("btn2").click();
        }else{
            document.getElementById("btn1").click();
        }
        checkthekey();
    }
}

function checkthekey(){
    document.onkeydown = function(e){
        if(e.keyCode == 32){
            var btn = document.getElementById("btn3");
            if(btn.disabled == true){
                document.getElementById("btn4").click();
            }else{
                document.getElementById("btn3").click();
            }
            checkthekey();
        }

        if(e.keyCode == 13){
            var btn8 = document.getElementById("btn1");
            if(btn8.disabled == true){
                document.getElementById("btn2").click();
            }else{
                document.getElementById("btn1").click();
            }
            checkthekey();
        }
    }
}
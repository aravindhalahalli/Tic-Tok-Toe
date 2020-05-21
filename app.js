let sign = "X"
let disp = document.getElementById("player");

function printx(number){
    let isko = document.getElementById("r"+number);
    if(isko.innerText == ""){
        isko.innerHTML = sign;
        checkSign();
        disp.innerHTML = "<center>" + "Now Player" + " " +sign+" " + "Turn" + "</center>"; 
        winner();
    } 
}

function checkSign(){
    if(sign == "X")sign = "O"
    else sign = "X"
}

function getBox(no){
    return document.getElementById("r"+no).innerHTML;
}

function checkMove(a,b,c,m){
    if(getBox(a)==m && getBox(b)==m && getBox(c)==m)
        return true;
    else return false;
}

function winner(){
    if(checkMove(1,2,3,sign)||checkMove(4,5,6,sign)||checkMove(7,8,9,sign)
    ||checkMove(1,4,7,sign)||checkMove(2,5,8,sign)||checkMove(3,6,9,sign)
    ||checkMove(1,5,9,sign)||checkMove(3,5,7,sign)){
    disp.innerHTML = "<center>" + "The Winner Player is" + " " +sign+" " + "</center>";
    for(let i=1;i<=9;i++){
        document.getElementById("r"+i).innerHTML = "";
        }
        throw "Game End !!"
    }
    else{
        if(getBox(1)!="" && getBox(2)!="" && getBox(3)!="" && getBox(4)!="" && getBox(5)!="" && getBox(6)!="" && getBox(7)!="" && getBox(8)!="" && getBox(9)!=""){
            disp.innerHTML = "<center>" + "The Game is Tied " + "</center>";
            for(let i=1;i<=9;i++){
                document.getElementById("r"+i).innerHTML = "";
                }
        }

    }
}
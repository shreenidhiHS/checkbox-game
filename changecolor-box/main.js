var button = document.querySelector("button");
var box =document.getElementById("box");
var txt=document.getElementById("text");

function changecolor(){
    if(box.style.background == "red")
    {
        box.style.background = "blue";
        text.style.background ="red";  
    }
    else{
        box.style.background = "red";
        text.style.background ="blue"; 
    }
}
function revealmsg() {
    var reveal = document.getElementById("hiddenmessage");
    if(reveal.style.display='none'){
        reveal.style.display = 'block';
    }
     
    }

function hidemsg(){
    var hide = document.getElementById("hiddenmessage");
    if(hide.style.display = 'block'){
        hide.style.display='none';
    }
}
function countdown(){
    var crntval = document.getElementById("countdown").innerHTML;
    var newval = 0;
    if(crntval > 0){
        newval = crntval - 1;
    }
    document.getElementById("countdown").innerHTML = newval;
}
function reset(){
    var val = 10;
    document.getElementById("countdown").innerHTML = val;
}
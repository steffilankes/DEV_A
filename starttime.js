var t;
var gb = h-1;
var port = h-2;
var jap = h+7 ;
var han = parseInt(h)+6;
var d = new Date();
var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();
var time = h + ":" + m + ":" + s
var utcOffsetMinutes = new Date().getUTCDate(); // getTimezoneOffset();


function clickme() {
    if (document.getElementById('txt').innerHTML == "") startTime();
    else {
        clearTimeout(t);
        leeresFeld();
    }
}

function getDate(utcOffsetMinutes){
    var returnDate = new Date(Date.now() + (utcOffsetMinutes * 60 *1000));
    return returnDate;
}

function startTime() {
    var d = getDate(utcOffsetMinutes);
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    var time = h + ":" + m + ":" + s;
    document.getElementById('txt').innerHTML =
        time;
    t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}



function leeresFeld() {
    var free = "";
    document.getElementById('txt').innerHTML =
        free;
}

 function Uhrzeitaendern(){
     var x = document.getElementById("zeit").value;         
     switch (x) {
         case "deutsch":
         document.getElementById('txt1').innerHTML =
         utcOffsetMinutes = 0;
            break;
         case "gb":
         document.getElementById('txt1').innerHTML =
         utcOffsetMinutes = 120;
            break;
         case "portugal":
         document.getElementById('txt1').innerHTML =
         utcOffsetMinutes = -240;
            break; 
         case "japan":
         document.getElementById('txt1').innerHTML =
         jap + ":" + m;
            break;
         case "hanoi":
         document.getElementById('txt1').innerHTML =
         han + ":" + m;
         break;  
        default: 
        document.getElementById('txt1').innerHTML =
        "Fehler!";
     }
 } 

 function farbeAendern(){
    var y = document.getElementById("farbe").value;             
    switch (y) {
        case "Grün":
        document.getElementById("txt").className="green";
           break;
        case "Rot":
        document.getElementById("txt").className="red";
           break;
        case "Blau":
        document.getElementById("txt").className="blue";
           break; 
        case "Lila":
        document.getElementById("txt").className="violet";
           break;
        case "Orange":
        document.getElementById("txt").className="orange";
        break;  
       default: 
       document.getElementById("txt").className="black";
    }
}

function farbeAendern(){
    var z = document.getElementById("groesse").value;             
    switch (z) {
        case "Grün":
        document.getElementById("txt").className="size1";
           break;
        case "Rot":
        document.getElementById("txt").className="size2";
           break;
        case "Blau":
        document.getElementById("txt").className="size3";
           break; 
        case "Lila":
        document.getElementById("txt").className="size4";
           break;
        case "Orange":
       default: 
       document.getElementById("txt").className="black";
    }
}

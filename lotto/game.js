let szam1;
let szam2;
let szam3;
let szam4;
let szam5;

document.getElementById("sorsolas").onclick = function(){
    szam1 = Math.floor(Math.random() * 90) + 1;
    szam2 = Math.floor(Math.random() * 90) + 1;
    if (szam2 == szam1) {
        szam2 = Math.floor(Math.random() * 90) + 1;  
    }
    szam3 = Math.floor(Math.random() * 90) + 1;
    if (szam3 == szam1 || szam3 == szam2) {
        szam3 = Math.floor(Math.random() * 90) + 1;
    }
    szam4 = Math.floor(Math.random() * 90) + 1;
    if (szam4 == szam1 || szam4 == szam2 || szam4 == szam3) {
        szam4 = Math.floor(Math.random() * 90) + 1;
    }
    szam5 = Math.floor(Math.random() * 90) + 1;
    if (szam5 == szam1 || szam5 == szam2 || szam5 == szam3 || szam5 == szam4) {
        szam5 = Math.floor(Math.random() * 90) + 1;
    }

    document.getElementById("szam1hely").innerHTML = szam1;
    document.getElementById("szam2hely").innerHTML = szam2;
    document.getElementById("szam3hely").innerHTML = szam3;
    document.getElementById("szam4hely").innerHTML = szam4;
    document.getElementById("szam5hely").innerHTML = szam5;
}

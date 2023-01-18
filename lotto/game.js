let szam1;
let szam2;
let szam3;
let szam4;
let szam5;

document.getElementById("sorsolas").onclick = function(){
    szam1 = Math.floor(Math.random() * 90) + 1;
    szam2 = Math.floor(Math.random() * 90) + 1;
    szam3 = Math.floor(Math.random() * 90) + 1;
    szam4 = Math.floor(Math.random() * 90) + 1;
    szam5 = Math.floor(Math.random() * 90) + 1;

    document.getElementById("szam1hely").innerHTML = szam1;
    document.getElementById("szam2hely").innerHTML = szam2;
    document.getElementById("szam3hely").innerHTML = szam3;
    document.getElementById("szam4hely").innerHTML = szam4;
    document.getElementById("szam5hely").innerHTML = szam5;
}
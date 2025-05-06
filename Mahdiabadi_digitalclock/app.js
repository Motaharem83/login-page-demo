/*let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

let time = new Date();

hrs.innerHTML = time.getHours();
min.innerHTML = time.getMinutes();
sec.innerHTML = time.getSeconds();*/


let hrs = document.getElementById("hrs");  
let min = document.getElementById("min");  
let sec = document.getElementById("sec");  

function updateClock() {  
    let time = new Date();  

    
    hrs.innerHTML = String(time.getHours()).padStart(2, '0');  
    min.innerHTML = String(time.getMinutes()).padStart(2, '0');  
    sec.innerHTML = String(time.getSeconds()).padStart(2, '0');  
}  

setInterval(updateClock, 1000);
updateClock();
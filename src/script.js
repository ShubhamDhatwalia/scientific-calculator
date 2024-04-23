
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");


let cal1 = document.querySelector(".basic-calculator");

let cal2 = document.querySelector(".scientific-calculator");


btn1.addEventListener("click", ()=>{
    if(cal2.style.visibility =="visible"){
        cal2.style.visibility ="hidden";
    }
    if(cal1.style.visibility =="hidden"){
        cal1.style.visibility ="visible";
        cal2.style.marginBottom= "50px";
    }
})

btn2.addEventListener("click", ()=>{

    cal1.style.visibility ="hidden";
    cal2.style.visibility ="visible";
    cal2.style.marginTop= "-300px";
})
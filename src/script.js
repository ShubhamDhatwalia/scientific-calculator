
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
    }
})

btn2.addEventListener("click", ()=>{

    cal1.style.visibility ="hidden";
    cal2.style.visibility ="visible";
    cal2.style.marginTop= "-250px";
})



let display = document.querySelector(".container input");
let btns = document.querySelectorAll(".basic-calculator button, .scientific-calculator button");



function evaluateResult(){
    console.log(currValue);

    const convertedValue = currValue
    .replace("%", "*0.01")
    .replace("cos", "Math.cos")
    .replace("sin", "Math.sin")
    .replace("tan", "Math.tan")
    .replace("π", "Math.PI")
    .replace("e", "2.7182818284590")
    .replace("log", "Math.log")
    .replace("√", "Math.sqrt" )
    .replace("EXP", "Math.exp");

    if(currValue.includes("^")){
        
        console.log("Yes entered in the condition");

        let arr = currValue.split("^");
        console.log(arr);

        let x = arr[0];
        let y = arr[1];

        let result = Math.pow(x,y);
        console.log(result);
        display.value = result;
    }


    else{
    const result = eval(convertedValue);
    console.log(result);
    currValue = result.toString();
    display.value = currValue;
    }
}


let currValue ="";

for(let i=0; i<btns.length; i++){
    const btn = btns[i];
    btn.addEventListener("click", ()=>{
        const value = btn.innerText;

    try{
        if(value == "AC"){
            currValue = "";
            display.value = currValue;
        }

        
        else if(value.length == 0){
           currValue = currValue.slice(0,-1);
           display.value = currValue;
        }

        else if(value == "="){
            evaluateResult();
        }
        else if(value == "Ans"){
            evaluateResult();
        }

        else if(value ==  "Xy"){
            
            currValue += "^";
            console.log(currValue);
            display.value = currValue;
        }
        
        else {
        currValue += value;
        
        currValue.replace("EXP", "e");
        display.value = currValue;
        }

    } catch(error){
        currValue = "ERROR";
        display.value = currValue;
    }

    })
}
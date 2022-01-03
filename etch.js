const container = document.querySelector("#container");


for(let i = 0;i<25;i++ ){
    const square = document.createElement("div");

    square.classList.add("squares");
    
    container.appendChild(square);
}
 
function classC(item){
    this.classList.add("squaresB");
}

const sq = document.querySelectorAll(".squares");
sq.forEach(function(x){
    x.addEventListener("mouseenter",classC);
})

var inputt = 10;

const resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click",()=>{
    ask();
    refresh();
    newGrid();
});

function refresh(){
    let todelete = document.querySelectorAll(".squares");
    todelete.forEach(function(x){
        x.remove();
    })
}

function newGrid (){
    for(let i = 0;i<(inputt*inputt);i++){
        const ssquare = document.createElement("div");
        ssquare.classList.add("squares");
        ssquare.style.backgroundColor
        container.appendChild(ssquare);
    } 
    const sqq = document.querySelectorAll(".squares");
sqq.forEach(function(x){
    x.addEventListener("mouseenter",classC);
})


    container.style.gridTemplateColumns=`repeat(${inputt},1fr)`;
    container.style.gridTemplateRows=`repeat(${inputt},1fr)`;
}
function ask(){
    inputt = window.prompt("haw manyy?");
    if (inputt<0){inputt=window.prompt("naa,no minus");}
    else if(inputt>100){inputt=window.prompt("naa,no bigger than 100");}
}
//jkasdkjbcdsbchdsbchdcndchjdscudscdjkscdhiscjhbijjhscdicjdcs
const container = document.querySelector("#container");


for(let i = 0;i<256;i++ ){
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
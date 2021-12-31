const container = document.querySelector("#container");


for(let i = 0;i<256;i++ ){
    const square = document.createElement("div");
    square.classList.add("squares");
    container.appendChild(square);
}
 
const onsquare = document.querySelectorAll(".squares");


onsquare.forEach(function(x){
    x.addEventListener("click",function(x){
       fun();
    })
});
   
 

function fun (item){
    this.classList.add(squaresB);
    this.classList.remove(squares);
}
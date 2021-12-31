const container = document.querySelector("#container");


for(let i = 0;i<256;i++ ){
    const square = document.createElement("div");
    square.classList.add("squares");
    container.appendChild(square);
}
 
const onsquare = document.querySelectorAll("squares");
onsquare.classList.remove("squares");
onsquare.classList.add("squaresHover");
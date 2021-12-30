const container = document.querySelector("#container");



    const square = document.createElement('div');
    
    for(let i = 0;i<5;i++){ 
    
    container.appendChild(square);
    }

    square.className = "squares";
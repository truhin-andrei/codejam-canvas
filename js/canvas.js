let canvas  = document.getElementById("canvas");
let context = canvas.getContext("2d");
let matrix;
fetch('./assets/json/4x4.json')
  .then(function(response) {  
    return response.json();  
  })  
  .then(function(matrix) {
    let dx = 0;
    let dy = 0;
    let width = canvas.width/matrix[0].length;
    let height = canvas.height/matrix.length;
    matrix.forEach((row,index) =>{
      if (dx != 0) dy += height;
       dx =0;
      row.forEach((col, k) => {
        context.fillStyle =`#${col}`;
        context.fillRect(dx, dy, width, height);
        dx += width;
        
      });
    });  
  });

  


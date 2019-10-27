let canvas  = document.getElementById("canvas");
let context = canvas.getContext("2d");
let matrix;
let four = document.getElementById('four');
let thirty_two = document.getElementById('thirty_two');

four.addEventListener('click', () =>
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
  }));

  thirty_two.addEventListener('click', () =>
fetch('./assets/json/32x32.json')
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
        context.fillStyle =`rgba(${col[0]}, ${col[1]}, ${col[2]}, ${col[3]})`;
        context.fillRect(dx, dy, width, height);
        dx += width;  
      });
    });  
  }));

  picture.addEventListener('click', () =>
fetch('./assets/img/image.png')
  .then(function(response) {  
    return response.blob();  
  }) 
  .then(createImageBitmap) 
  .then(function(image) {
    context.drawImage(image, 0, 0, canvas.width, canvas.height); 
  }));
  


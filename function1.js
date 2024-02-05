/* Задача 1 з  циклом for  */
function drawTriangle(height,symbol) {

for (let i=1; i<=height; i++) {
    let line ="";

   for ( let j = 0; j < i; j++) {
line +=symbol;
}
   
console.log(line);

}

}
drawTriangle(5,"+"); 



/* Задача 1 з циклом while */

function drawTriangle (height,symbol) {
    let i = 1;
while ( i <= height) {
      let line = "";
      let j = 0;
      

while (j<i) {
    line +=symbol;
    j++;

}

console.log(line);
i++;
}

}
drawTriangle(5,"+");



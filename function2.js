function pow(x, y) {
   let result = 1;  

for(let i = 0; i < y; i++){
        result = x * result;

}
return result; 

}
let result = pow(5,4);  
console.log(result);  
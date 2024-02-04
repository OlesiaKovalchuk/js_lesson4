let num = prompt("Cкільки тобі років?");
let years = +num;
if ( typeof years === 'number' && years >=1 && years <=100) {
    if (years === 1) {
    console.log(years + " рік");
    } else if (years % 10 >= 2 && years % 10 <= 4){
        console.log(years + " роки");
    } else {
        console.log(years + " років");
    } 
} 
else {
    console.log("Будь ласка, введіть додатне число в діапазоні від 1 до 100.");
}


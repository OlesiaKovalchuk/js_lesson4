let unit = prompt ("Введіть одиницю вимірювання(км, год, кг)");
let value = prompt ("Введіть кількість"); 


switch (unit) {
    case "км": 
    let meters = value * 1000;
    console.log(value + " км це " + meters + " м" );
    break;

        
    case "год":
    let minutes = value * 60;
        console.log(value + " год це " + minutes + " хв");
    break;


    case "кг": 
    let grams = value * 1000; 
    console.log(value + " кг це " + grams + " гр");
    break;
    default:
        console.log("Невідома одиниця вимірювання");
}
var services = {

	"Cтрижка": 60,
	"Гоління": 80,
	"Миття голови": 100,

};
services["Розбите скло"] = 200;


services.price = function(){
var total = 0;
for ( var service in this){
    if (typeof this[service] === "number") {
    total += this[service];
    }
}

return total; 


};

services.minPrice = function (){
    var minPrice = Infinity;
    for (var service in this){
        if (typeof this[service] === 'number' && this[service] < minPrice){
            minPrice = this[service];
        }
    }
    return minPrice
};

services.maxPrice = function(){
    var maxPrice = - Infinity;
    for ( var service in this){
        if (typeof this [service] === "number" && this[service] > maxPrice){
            maxPrice = this[service];
        }
    }
    return maxPrice;
};



console.log("Загальна вартість послуг: " + services.price() + " грн");
console.log("Мінімальна вартість послуг: " + services.minPrice() + "грн"); 
console.log("Максимальна вартість послуг: " + services.maxPrice() + "грн");

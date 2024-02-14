
var services = {

	"Cтрижка": "60 грн",
	"Гоління": "80 грн",
	"Миття голови": "100 грн",

};

services.price = function(){
var total = 0;
for ( var service in this){
     var price = parseFloat(this[service]);
     if (!isNaN(price)){
      total += price ;  
     }
    
    }


return total + " грн"; 
};

services.minPrice = function (){
    var minPrice = Infinity;
    for (var service in this){
        var price = parseFloat(this[service]);
        if (!isNaN(price) && price < minPrice){
              minPrice = price;
        }
    }
    return minPrice + " грн"; 
};

services.maxPrice = function(){
    var maxPrice = - Infinity;
    for ( var service in this){
      var price = parseFloat(this[service]);
      if (!isNaN(price) && price > maxPrice ){
        maxPrice = price;
      }
    }
    return maxPrice + " грн";
};


services["Розбите скло"] = "200 грн";
console.log("Загальна вартість послуг: ", services.price());
console.log("Мінімальна вартість послуг: ", services.minPrice()); 
console.log("Максимальна вартість послуг: " , services.maxPrice());

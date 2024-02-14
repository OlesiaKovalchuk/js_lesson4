 var myObject = {

    name: "Olesia",
    sname: "Kovalchuk",
    occupation: "QA Engineer",
    experience: 3,
     
    getInfo() {
        for (let prop in this){
            if (typeof this[prop] !== 'function') 
                    console.log (prop + ": " + this[prop]);
        }
    }
        
 }

 myObject.getInfo();
 myObject.newProperty = 'Test!';
 myObject.getInfo();
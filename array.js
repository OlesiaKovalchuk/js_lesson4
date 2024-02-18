 const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};


function findValuesByKey(object,companyName){
    if (object.name === companyName) {
        return object
    }
    if( object.clients){
        for(let i = 0; i <object.clients.length; i++){
            const result = findValuesByKey(object.clients[i], companyName);
            if (result){
                return result;
            }
        }
    }
    if(object.partners){
        for (let i = 0; i < object.partners.length; i++){
            const result = findValuesByKey(object.partners[i],companyName);
            if (result){
                return result
            }
        }
    }
    return null;
};

console.log(findValuesByKey(company, 'Клієнт 2'));


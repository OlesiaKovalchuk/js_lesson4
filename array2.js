var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
    
];

var re = /^\w+(?:\.\w+)*@(?:gmail\.com|yahoo\.com)$/;

var trustedEmails = arr.filter(function(item) {
    return re.test(item.email);
}).map(function(item) {
    return item.email;
});

console.log(trustedEmails);




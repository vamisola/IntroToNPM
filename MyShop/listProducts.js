var faker = require('faker');

var randomproductName = faker.commerce.productName(); 
var randomPrice = faker.commerce.price(); 

console.log("===== My Shopping List =====")
for(var i = 1; i< 11;i++){
    console.log(i + "." , faker.fake("{{commerce.productName}} = {{commerce.price}}"));
}
// outputs: "Marks, Dean Sr." 

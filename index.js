var mouse=require("./Mouse");
var cat =require('./cat');
var Dog=require('./Dog')

var cat=new cat();
var mouse=new mouse("jenny");
//cat.eat(mouse);
var Dog=new Dog();
try{
cat.eat(Dog);}
catch(error){
	console.log("loi")
}
console.log(cat);



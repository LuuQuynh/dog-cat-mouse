function cat(){
	console.log("meo meo");
	console.log('helo')
	this.stomach=[];
}
cat.prototype.eat=function (mouse) {
	this.stomach.push(mouse)
 }
 
module.exports=cat;
var Mouse=require ('./Mouse');
function cat(){
	
	this.stomach=[];
}
cat.prototype.eat=function (animal) {
	if(animal instanceof Mouse){
	this.stomach.push(animal);
}
else{
	throw new Error('Cat can only eat mouse');
 }
};
 
module.exports=cat;
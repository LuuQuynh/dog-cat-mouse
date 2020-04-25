function Mouse(name){
console.log("chit chit");
this.name=name;
this.isDead=false;
}
Mouse.prototype.die=function(){
	this.isDead=true;
}
module.exports=Mouse;
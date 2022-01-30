class ClassMates{
	constructor(name,age){
    	this.name=name;
      	this.age=age;
		this.address=address;
    }
  	displayInfo(){
    	return this.name + "is " + this.age + " years old!" + "address"
    }
}

let classmate = new ClassMates("Moulishwaran",28 ,"thanjavur");
classmate.displayInfo(); 
console.log(classmate);
// //FACTORY FUNCTION
// function PersonMaker(name, age) {
//     const personv={
//         name: name,
//         age: age,
//         talk() {
//             console.log(`${this.name} is ${this.age} years old.`);
//         }
//     };
//     return person;
// }

// // Example usage: alg alg copy obj ki dono examp ka lia create hogi
// const p1 = PersonMaker('John Doe', 30); //obj creation
// const p1 = PersonMaker('Doe', 35); 




//CONSTRUCTOR -> dosen't return anything & start with capital
/* 
function Person(name,age){
    this.name=name;
    this.age=age; // The properties this.name and this.age are dynamically created and assigned to the instance when the constructor function is called with the new keyword.
}

Person.prototype.talk = function() {  //constructor prototype property  !(visit mdn new operator compulsory best explaination)
    console.log(`Hi, my name is ${this.name}`);
}
//for both example(is called newinstance) same copy of obj will be created
let p1 = new Person('John Doe', 30);  //agr constructor ka pas prototype property hoga than sara newinstance ka prototype constructor ka protoype ko point karega
//all references to this in the constructor function now refer to newInstance(p1)
let p2 = new Person('adam' , 45); 
*/




// //CLASS - best way to create object
// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     talk(){
//         console.log( `Hi, my name is ${this.name}`);
//     }
// }

// let p1 = new Person('John Doe', 30);
// let p1 = new Person('adam', 30);




//Inheritance -> inheriting property of parent class
class Person{  //parent class
    constructor(name,age,){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hello, my name is ${this.name}`);
    }
}

class Student extends Person{
    constructor(name, age, marks){
        super(name, age) //parent class constructor is being called
        this.marks = marks;
    }
}
class Teacher extends Person{
    constructor(name, age, subj){
        super(name, age) //parent class constructor is being called
        this.subj = subj;
    }
}




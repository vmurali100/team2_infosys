var main: string = "10";
var mobile: number = 9663856625;
var isEdit: boolean = true;
var response: null = null;
var data: any = "some";

function random() {
  return null;
}
var someFunction = random();

interface Person {
  fname: string;
  lname: string;
  mobile: number;
  email?: string;
  newEmail: string;
}

// var newPerson: Person = {
//   fname: "Ram",
//   lname: "Krishna",
//   mobile: 9663856625,
//   newEmail: "murali@gmail.com",
// };

// newPerson = {
//     fname:"",
//     lname:"",
//     mobile:0,
//     newEmail:""
// }

// class Animal {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   move(distance: number) {
//     console.log(`${this.name} moved ${distance} Meters`)
//   }
// }

// class Dog extends Animal {
//     bark(){
//         console.log("The Dog is barking !!")
//     }
// }
// let myDog = new Dog("Bingo")

// myDog.bark()
// myDog.move(10)

var calculate = (num1: number, num2: number, num3?: number) => {
  if (num3) {
    return num1 * num2 * num3;
  } else {
    return num1 * num2;
  }
};

var total: number = calculate(12, 10);
console.log(total);

// super = keyword is used in classes to call the constructor or
//         access the properties and methods of a parent (superclass)
//         this = this object
//         super = the parent

class Animal {

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
class Rabbit extends Animal {

  constructor(name, age, runSpeed) {
    super(name, age);
    this.runSpeed = runSpeed;
  }
}
class Fish extends Animal {

  constructor(name, age, swimSpeed) {
    super(name, age);
    this.swimSpeed = swimSpeed;
  }
}
class Hawk extends Animal {

  constructor(name, age, flySpeed) {
    super(name, age);
    this.flySpeed = flySpeed;
  }
}

const rabbit = new Rabbit("Lola", 3, 24);
const fish = new Fish("Nemo", 1, 11);
const hawk = new Hawk("Falcon", 4, 50);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);
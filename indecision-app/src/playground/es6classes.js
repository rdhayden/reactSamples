class Person {
  constructor(name = anonymous, age) {
    this.name = name;
    this.age = age;
  }

  getLabel() {
    console.log(`${this.name} is ${this.age} years old`);
  }
}

const jeff = new Person('Jeff', 26);
jeff.getLabel();

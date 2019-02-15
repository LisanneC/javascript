export default class Parent {
  constructor(amount){

    this.child = [];

    let i = 0;
    for (i; i < amount; i++) {
      this.child.push(new Child());
    };

    console.log(this.child.id);
  }
};

class Child {
  constructor(id) {
    this.id = id;
  }
}

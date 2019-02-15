export default class Parent {
  constructor(){
    
    this.child = [];

    let i = 0;
    for (i; i < 5; i++) {
      this.child.push(new Child());
    };

    console.log(this.child);
  }
};

class Child {
  constructor() {
  }
}

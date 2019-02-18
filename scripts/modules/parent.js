export default class Parent {
  constructor(settings){
    this.child = [];
    this.activeIndex = settings.activeIndex;

    let i = 0;
    for (i; i < settings.amount; i++) {
      this.child.push(new Child(i));
    };
  }

  prev() {
    return this.getChild(this.activeIndex - 1);
  }

  next() {
    return this.getChild(this.activeIndex + 1);
  }

  getChild(index) {
    // if statement if index is true use index else use this.activeIndex
    this.activeIndex = index ? index : this.activeIndex;
    // Geeft nieuwe index waarde
    return this.child[this.activeIndex];
  }

  getActiveChild() {
    return this.child[this.activeIndex];
  }
};

class Child {
  constructor(id) {
    this.id = id;
  }
}

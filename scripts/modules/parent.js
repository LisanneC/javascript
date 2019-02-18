export default class Parent {
  constructor(settings){
    this.child = [];

    const {
      amount,
      activeIndex,
    } = { ...Parent.defaultSettings, ...settings };

    this.activeIndex = activeIndex;

    let i = 0;
    for (i; i < amount; i++) {
      this.child.push(new Child(i));
    };
  }

  static defaultSettings = {
    amount: 0,
    activeIndex: 0,
  }

  prev() {
    return this.getChild(this.activeIndex - 1);
  }

  next() {
    return this.getChild(this.activeIndex + 1);
  }

  getChild(index) {
    // If statement if index is true use index else use this.activeIndex
    this.activeIndex = index ? index : this.activeIndex;
    // Gives new activeIndex
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

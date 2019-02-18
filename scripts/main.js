import Parent from './modules/parent.js';

document.addEventListener('DOMContentLoaded', function() {
  window.myClass = new Parent({
    amount: 8,
    activeIndex: 3
  });
  window.myClass2 = new Parent({
    amount: 8,
    activeIndex: 0
  });
});

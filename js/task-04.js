const counterValue = {
  velue: 0,
  increment() {
    console.log("increment=>this", this);
    this.velue += 1;
  },
  decrement() {
    console.log("decrement=>this", this);
    this.velue -= 1;
  },
};

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");
// console.log(decrementBtn);
// console.log(incrementBtn);
// console.log(valueEl);
decrementBtn.addEventListener("click", () => {
  console.log("Клікнули на декримент");
  counterValue.decrement();
  console.log(counterValue);
  valueEl.textContent = counterValue.velue;
});
incrementBtn.addEventListener("click", () => {
  console.log("Клікнули на інкримент");
  counterValue.increment();
  console.log(counterValue);
  valueEl.textContent = counterValue.velue;
});

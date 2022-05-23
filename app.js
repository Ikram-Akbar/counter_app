let drawCounter = () => {
  document.getElementById("counter").innerHTML = store.counter;
};

let bindEvents = () => {
  document.getElementById("increase").addEventListener("click", function () {
    increase();
    drawCounter();
  });
  document.getElementById("decrease").addEventListener("click", function () {
    decrease();
    drawCounter();
  });
};

const store = {
  counter: 0,
};

// increase function
const increase = () => store.counter++;
// decrease function
const decrease = () => store.counter--;

let init = function () {
  bindEvents();
  drawCounter();
};

init();

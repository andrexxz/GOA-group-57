class Calculator {
  constructor(display) {
    this.display = display;
    this.current = "";
  }

  append(value) {
    this.current = this.current + value;
    this.update();
  }

  clear() {
    this.current = "";
    this.update();
  }

  update() {
    if (this.current === "") {
      this.display.textContent = "0";
    } else {
      this.display.textContent = this.current;
    }
  }

  calculate() {
    try {
      let result = this.simpleCalc(this.current);
      this.current = result.toString();
    } catch (e) {
      this.current = "Error";
    }
    this.update();
  }

  simpleCalc(text) {
    let numbers = text.split(/[\+\-\*\/]/);
    let operators = text.match(/[\+\-\*\/]/g);

    let result = parseFloat(numbers[0]);

    for (let i = 0; i < operators.length; i++) {
      let num = parseFloat(numbers[i + 1]);
      let op = operators[i];

      if (op === "+") result = result + num;
      if (op === "-") result = result - num;
      if (op === "*") result = result * num;
      if (op === "/") result = result / num;
    }

    return result;
  }
}

let display = document.getElementById("display");
let calc = new Calculator(display);

let buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let value = this.textContent;

    if (value === "C") {
      calc.clear();
    } else if (value === "=") {
      calc.calculate();
    } else {
      calc.append(value);
    }
  });
}
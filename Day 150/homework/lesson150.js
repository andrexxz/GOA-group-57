// 1) Car კლასი
class Car {
  constructor(brand, model, year) {
    this.brand = brand
    this.model = model
    this.year = year
  }

  getInfo() {
    return `${this.year} ${this.brand} ${this.model}`
  }
}

const car1 = new Car("Mercedes", "CLS63", 2020)
console.log(car1.getInfo())
console.log(car1)


// 2) User კლასი
class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  changeName(newName) {
    this.name = newName
  }

  increaseAge(num) {
    this.age += num
  }
}

const user1 = new User("Andria", 18)
user1.changeName("Giorgi")
user1.increaseAge(2)
console.log(user1)


// 3) Calculator კლასი
class Calculator {
  add(a, b) {
    return a + b
  }

  subtract(a, b) {
    return a - b
  }

  multiply(a, b) {
    return a * b
  }

  divide(a, b) {
    return a / b
  }
}

const calc = new Calculator()
console.log(calc.add(5, 3))
console.log(calc.subtract(10, 4))
console.log(calc.multiply(6, 2))
console.log(calc.divide(8, 2))


// 4) Product კლასი
class Product {
  constructor(name, price, quantity) {
    this.name = name
    this.price = price
    this.quantity = quantity
  }

  getTotalPrice() {
    return this.price * this.quantity
  }
}

const prod1 = new Product("Laptop", 1000, 3)
console.log(prod1.getTotalPrice())
console.log(prod1)


// 5) BankAccount კლასი
class BankAccount {
  constructor(owner, balance) {
    this.owner = owner
    this.balance = balance
  }

  deposit(amount) {
    this.balance += amount
    console.log(`New balance: ${this.balance}`)
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Not enough money!")
      return
    }
    this.balance -= amount
    console.log(`Remaining balance: ${this.balance}`)
  }
}

const acc1 = new BankAccount("Andria", 500)
acc1.deposit(200)
acc1.withdraw(100)
console.log(acc1)


// 6) Library კლასი
class Library {
  constructor() {
    this.books = []
  }

  addBook(book) {
    this.books.push(book)
  }

  bookList() {
    console.log(this.books)
  }
}

const lib = new Library()
lib.addBook("Harry Potter")
lib.addBook("Lord of the Rings")
lib.bookList()


// 7) Password კლასი
class Password {
  constructor(value) {
    this.value = value
  }

  changePassword(newPass) {
    this.value = newPass
  }

  checkPassword() {
    console.log(this.value)
  }
}

const pass = new Password("1234")
pass.changePassword("abcd")
pass.checkPassword()
console.log(pass)
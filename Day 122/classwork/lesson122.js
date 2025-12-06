/*შექმენით ობიექტი კონსტრუქტორის გამოყენებით სადაც იქნებიან სხვადასხვა ცხოველები და ყველას ასევე ექნება საკუთარი ასაკი */


function Animal(name, age) {
    this.name = name;
    this.age = age;
}
const dog = new Animal('Dog', 5);
const cat = new Animal('Cat', 3);
const bird = new Animal('Bird', 2);

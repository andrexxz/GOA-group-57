/*1)შექმენი ობიექტი შენს შესახებ,შენი დავალებაა რომ გამოიტანო კიები და ვალუები ცალ ცალკე for in ის გამოყენებით

2)შექმენი ობიექტი ავტომობილის შესახებ ,გქონდეს year , model , milage , color , შენი დავალებაა რომ შექმნა სია ვალუებისა,შემდეგ გადაუარო ამ სიას და გმაოიტანო ცალ ცალკე თითოეული value გამოიყენე for of*/

//1
let me = {
    name: "andria",
    age: 15,
    city: "gori",
    profession: "student"
};

for (let key of Object.keys(me)) {
    console.log(key);
}
for (let value of Object.values(me)) {
    console.log(value);
}

//2
let automobile = {
    year: 2020,
    model: "Toyota Camry",
    milage: 15000,
    color: "white"
};
let automobileValues = Object.values(automobile);
for (let value of automobileValues) {
    console.log(value);
}

/*1)შექმენით ერთი სეტი სადაც მოათავსებთ რამდენიმე ელემენტს(ერთნაირი ელემენტები მეორდებოდეს რამდენჯერმე)

შენი დავალებაა რომ სეტში დაამატო რამდენიმე განსხვავებული ელემენტი(გამოიყენე CHAIN + მეთოდი)

შემდეგ ამოშალე ის ელემენტი სეტიდან რომელიც პირველია სეტში

შემდეგ შეამოწმე არის თუ არა თქვენთვის სასურველი ელემენტი სეტში

შემდეგ კონსოლში გამოიტანე სეტის სიგრძე

შემდეგ შექმენი ცვლადი და გამოიყენე ENTRIES მეთოდი სეტზე,ამის შემდეგ გადაუარე FOREACH ით და გამოიტანე წყვილად(სიებად)

ამის შემდეგ გაასუფთავეთ მთლიანი სეტი */


let mySet = new Set(["red", "bananaminions", "red", "orange", "bananaminions"]);

console.log(mySet);


mySet.add("you(nig#@)").add("kiwi(animal)").add("wensdey");

console.log(mySet);


mySet.delete(red);

console.log(mySet);


let checkElement = "bananaminions";

if (mySet.has(checkElement)) {
    console.log(checkElement + " exists in set");
} else {
    console.log(checkElement + " does NOT exist in set");
}

console.log(mySet.size);


let entries = mySet.entries();

entries.forEach(pair => {
    console.log(pair);
});

mySet.clear();

console.log(mySet);
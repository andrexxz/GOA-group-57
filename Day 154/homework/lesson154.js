/*1)შექმენი ცარიელი Map

დაამატე:
"name" → "Goga"
"age" → 20

შემდეგ:

გამოიტანე ორივე მნიშვნელობა შესაბამისი მეთოდით

2)გაქვს:

let map = new Map([
  ["apple", 2],
  ["banana", 3]
]);

შეამოწმე:

არის თუ არა "apple"
არის თუ არა "orange"


თუ არსებობს → დაწერე "არსებობს"
თუ არა → "არ არსებობს"

გამოიყენე ternary

3)გაქვს:

let map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3]
]);

წაშალე "b"
შემდეგ დაბეჭდე განახლებული Map

4)შექმენი Map რამდენიმე ელემენტით

გამოიყენე clear()
გადაამოწმე:

ცარიელია თუ არა (size)

5)გაქვს:

let map = new Map([
  ["x", 10],
  ["y", 20],
  ["z", 30]
]);

დაბეჭდე მხოლოდ:

ყველა key (for...of ითაც და forEach() ით )

ზემოთ მოცემული Map იდან:

დაბეჭდე:

ყველა value

6)გაქვს:

let map = new Map([
  ["apple", 5],
  ["banana", 2],
  ["orange", 8]
]);

forEach-ით:

დაბეჭდე მხოლოდ ის ელემენტები, სადაც value > 4

7)ერთ ხაზში (chain-ით) შექმენი Map და დაამატე:

"a" → 1
"b" → 2
"c" → 3

8)გაქვს Map

დაწერე კოდი, რომელიც:

ამოწმებს თუ Map-ში 3-ზე მეტი ელემენტია → "დიდია"
წინააღმდეგ შემთხვევაში → "პატარაა"

გამოიყენეთ ternary

9)გაქვს:

let map = new Map([
  ["apple", 5],
  ["banana", 2],
  ["orange", 8]
]);

შექმენი ახალი Map, სადაც:

დარჩება მხოლოდ ის მნიშვნელობათა წყვილი რომლის value > 4

გამოიყენე:forEach

10)გაქვს:

let map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3]
]);

გაზარდე ყველა value +10

გამოიყენე:

forEach


11)გაქვს:

let map = new Map([
  ["a", 10],
  ["b", 20],
  ["c", 30]
]);

იპოვე:

ყველა value-ს საშვალო

12)გაქვს:

let word = "javascript";

შექმენი Map, სადაც:

key = ასო
value = რამდენჯერ გვხვდება

13)გაქვს:

let numbers = [1,2,3,4,5,6,7,8,9];

შექმენი Map:

key = "even" / "odd"
value = შესაბამისი რიცხვების მასივი */


//1

const a1 = new Map([])

a1.set("name", "goga").set("age", 20)

console.log(a1.get("name"), a1.get("age"))

//2

let map = new Map([
  ["apple", 2],
  ["banana", 3]
]);

map.has("apple")

switch (map) {
    case has("apple"):
        console.log("arsebobs")
    default:
        console.log("ar arsebobs")
}
switch (map) {
    case has("banana"):
        console.log("arsebobs")
    default:
        console.log("ar arsebobs")
}

//3

let map0 = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3]
]);

map0.delete("b")

console.log(map0)

//4

//i dont get it

//5

let map1 = new Map([
  ["x", 10],
  ["y", 20],
  ["z", 30]
]);

//well be back to it eventually

//6

let map2 = new Map([
  ["apple", 5],
  ["banana", 2],
  ["orange", 8]
]);

//illbe back with this one too, speed writer tho :))

//7

let map3 = new Map([])

map3.set("a", 1).set("b", 2).set("c", 3)

//8

//...

//9

let map4 = new Map([
  ["apple", 5],
  ["banana", 2],
  ["orange", 8]
]);


//10

let map5 = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3]
]);
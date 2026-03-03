/*1)შექმენი ცვლადი სადაც მომხმარებელს შემოატანინებთ რაიმე სახელს

შემდეგ განიხილეთ switch case ის დახმარებით

თუ მომხმარებლის მიერ შემოყვანილი სახელი არის 'girogi'
    დაუკონსოლლოგე "your name is girogi"

თუ მომხმარებლის მიერ შემოყვანილი სახელი არის 'lasha'
    დაუკონსოლლოგე "your name is  lasha"

თუ მომხმარებლის მიერ შემოყვანილი სახელი არის 'nika'
    დაუკონსოლლოგე "your name is nika"

თუ მომხმარებლის მიერ შემოყვანილი სახელი არის 'buba'
    დაუკონსოლლოგე "your name is buba"

სხვა შემთხვევაში 
    დაუკონსოლლოგეთ --> "your name is not any of them" */


let name = prompt("enter your name")

switch(name){
    case "girogi":
        console.log("your name is girogi");
        break;
    case "lasha":
        console.log("your name is lasha");
        break;
    case "nika":
        console.log("your name is nika");
        break;
    case "buba":
        console.log("your name is buba");
        break;
    default:
        console.log("your name is not any of them");
}


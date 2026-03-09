/*1)მოცემულია ობიექტი:

const company = {
  name: "TechCorp",
  location: {
    country: "Georgia",
    city: {
      name: "Tbilisi",
      street: "Rustaveli"
    }
  },
  employees: [
    { name: "Nika", age: 22 },
    { name: "Giorgi", age: 25 }
  ]
}

დესტრუქციის გამოყენებით ერთ ლაინში გამოიტანე კონსოლში:

company name

country

city name

street

პირველი employee-ს name

მეორე employee-ს age


2)const university = {
  name: "TSU",
  faculty: {
    title: "Computer Science",
    head: {
      name: "Irakli",
      age: 50
    }
  },
  students: [
    {
      name: "Ana",
      grades: {
        math: 90,
        js: 95
      }
    }
  ]
}

დესტრუქციის გამოყენებით გამოიტანე კონსოლში:

university name

faculty title

head name

student name

math grade

js grade



3)const store = {
  name: "MegaShop",
  address: {
    city: "Batumi",
    location: {
      street: "Chavchavadze",
      number: 10
    }
  },
  products: [
    {
      name: "Laptop",
      price: 2500
    },
    {
      name: "Phone",
      price: 1200
    }
  ]
}
დესტრუქციით გამოიტანე:

store name

city

street

first product name

second product price


4)const user = {
  name: "Nika",
  surname: "Beridze",
  address: {
    country: "Georgia",
    city: {
      name: "Tbilisi",
      street: "Pekini"
    }
  }
}

📌 დესტრუქციის გამოყენებით გამოიტანე:

name

surname

country

city name

street

5)const car = {
  brand: "BMW",
  model: "M5",
  engine: {
    type: "V8",
    power: {
      hp: 600,
      torque: 750
    }
  }
}

დესტრუქციის გამოყენებით გამოიტანე:

brand

model

engine type

hp

torque */

//1

const company = {
  name: 'TechCorp',
  location: {
    country: 'Georgia',
    city: {
      name: 'Tbilisi',
      street: 'Rustaveli',
    },
  },
  employees: [
    { name: 'Nika', age: 22 },
    { name: 'Giorgi', age: 25 },
  ],
};

const {
  name: companyName,
  location: {
    country: companyCountry,
    city: { name: companyCityName, street: companyStreet },
  },
  employees: [{ name: firstEmployeeName }, { age: secondEmployeeAge }],
} = company;

console.log(
  companyName,
  companyCountry,
  companyCityName,
  companyStreet,
  firstEmployeeName,
  secondEmployeeAge,
);

//2

const university = {
  name: 'TSU',
  faculty: {
    title: 'Computer Science',
    head: {
      name: 'Irakli',
      age: 50,
    },
  },
  students: [
    {
      name: 'Ana',
      grades: {
        math: 90,
        js: 95,
      },
    },
  ],
};

const {
  name: universityName,
  faculty: {
    title: facultyTitle,
    head: { name: facultyHeadName },
  },
  students: [
    {
      name: studentName,
      grades: { math: mathGrade, js: jsGrade },
    },
  ],
} = university;

console.log(
  universityName,
  facultyTitle,
  facultyHeadName,
  studentName,
  mathGrade,
  jsGrade,
);

//3

const store = {
  name: 'MegaShop',
  address: {
    city: 'Batumi',
    location: {
      street: 'Chavchavadze',
      number: 10,
    },
  },
  products: [
    {
      name: 'Laptop',
      price: 2500,
    },
    {
      name: 'Phone',
      price: 1200,
    },
  ],
};

const {
  name: storeName,
  address: {
    city: storeCity,
    location: { street: storeStreet },
  },
  products: [{ name: firstProductName }, { price: secondProductPrice }],
} = store;

console.log(
  storeName,
  storeCity,
  storeStreet,
  firstProductName,
  secondProductPrice,
);

//4

const user = {
  name: 'Nika',
  surname: 'Beridze',
  address: {
    country: 'Georgia',
    city: {
      name: 'Tbilisi',
      street: 'Pekini',
    },
  },
};

const {
  name: userName,
  surname: userSurname,
  address: {
    country: userCountry,
    city: { name: userCityName, street: userStreet },
  },
} = user;

console.log(userName, userSurname, userCountry, userCityName, userStreet);

//5

const car = {
  brand: 'BMW',
  model: 'M5',
  engine: {
    type: 'V8',
    power: {
      hp: 600,
      torque: 750,
    },
  },
};

const {
  brand: carBrand,
  model: carModel,
  engine: {
    type: engineType,
    power: { hp: engineHP, torque: engineTorque },
  },
} = car;

console.log(carBrand, carModel, engineType, engineHP, engineTorque);

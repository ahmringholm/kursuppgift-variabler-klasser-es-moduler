// import { Person } from "./Person.js";

// const person = new Person();

// console.log(person.getFullName());
// console.log(person.getInfo());

// import { Person } from "./Person.js";

// const person = new Person(
//     "Ahm",
//     "Ringholm",
//     29,
//     true,
//     ["programmering", "grafisk design", "film"],
//     { role: "student", country: "Sverige" }
// );

// console.log(person.getFullName());
// console.log(person.getInfo());

// person.toggleActive();
// console.log(person.isActive);

import { Person } from "./Person.js";

const person1 = new Person(
    "Ahm",
    "Ringholm",
    29,
    true,
    ["programmering", "grafisk design", "film"],
    { role: "student", country: "Sverige" }
);

const person2 = new Person(
    "Kent",
    "Andersson",
    67,
    false,
    ["blommor", "laga mat"],
    { role: "pensionär", country: "Sverige" }
);

const person3 = new Person(
    "Birgitta",
    "Malm",
    45,
    false,
    ["böcker", "nyheter", "måla"],
    { role: "bildlärare", country: "Sverige" }
);

const person4 = new Person(
    "Emma",
    "Jonsson",
    16,
    true,
    ["fotboll", "matte"],
    { role: "gymnasieelev", country: "Sverige" }
);

const people = [person1, person2, person3, person4];

console.log(person1.getInfo());
console.log(person2.getInfo());
console.log(person3.getInfo());
console.log(person4.getInfo());

const output = document.querySelector("#output");

person1.toggleActive();
console.log(person1.isActive);

person2.toggleActive();
console.log(person2.isActive);

person3.toggleActive();
console.log(person3.isActive);

person4.toggleActive();
console.log(person4.isActive);
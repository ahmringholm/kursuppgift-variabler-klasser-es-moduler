// export class Person {
//     constructor() {
//         this.firstName = "Ahm";
//         this.lastName = "Ringholm";
//         this.age = 29;
//         this.isActive = true;
//         this.hobbies = ["programmering", "grafisk design", "film"];
//         this.meta = { role: "student", country: "Sverige" }
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }

//     getInfo() {
//         return `${this.getFullName()} är ${this.age} år och är en ${this.meta.role} från ${this.meta.country}.`;
//     }
// }

export class Person {
    constructor(firstName, lastName, age, isActive, hobbies, meta) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isActive = isActive;
        this.hobbies = hobbies;
        this.meta = meta;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getInfo() {
        return `${this.firstName} ${this.lastName} är ${this.age} år och är en ${this.meta.role} i ${this.meta.country}.` + ` Aktiv: ${this.isActive ? "Ja" : "Nej"}.`;
    }

    toggleActive() {
        this.isActive = !this.isActive;
    }
}
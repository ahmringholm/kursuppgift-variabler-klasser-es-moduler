export class Person {
    constructor() {
        this.firstName = "Ahm";
        this.lastName = "Ringholm";
        this.age = 29;
        this.isActive = true;
        this.hobbies = ["programmering", "grafisk design", "film"];
        this.meta = { role: "student", country: "Sverige" }
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getInfo() {
        return `${this.getFullName()} är ${this.age} år och är en ${this.meta.role} från ${this.meta.country}.`;
    }
}
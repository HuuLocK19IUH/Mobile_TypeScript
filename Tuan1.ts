// Bài 1
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    displayInfo(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

// Bài 2
class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    displayAllInfo(): void {
        super.displayInfo();
        console.log(`Grade: ${this.grade}`);
    }
}

const st = new Student("Nguyễn Hữu Lộc", 21, "A");
st.displayAllInfo();

// Bài 3
class Car {
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    showInfo(): void {
        console.log(`Car: ${this.brand} ${this.model} (${this.year})`);
    }
}

const car = new Car("Toyota", "Camry", 2020);
car.showInfo();

// Bài 4
class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

const rect = new Rectangle(5, 10);
console.log("Area:", rect.getArea());
console.log("Perimeter:", rect.getPerimeter());

// Bài 5
class BankAccount {
    balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposit: ${amount}, New balance: ${this.balance}`);
    }

    withdraw(amount: number): void {
        if (amount > this.balance) {
            console.log("Insufficient balance!");
        } else {
            this.balance -= amount;
            console.log(`Withdraw: ${amount}, New balance: ${this.balance}`);
        }
    }
}

const acc = new BankAccount(1000);
acc.deposit(500);
acc.withdraw(300);
acc.withdraw(2000);

// Bài 6
class Book {
    title: string;
    author: string;
    year: number;

    constructor(title: string, author: string, year: number) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    display(): void {
        console.log(`${this.title} - ${this.author} (${this.year})`);
    }
}

const book = new Book("Clean Code", "Robert C. Martin", 2008);
book.display();
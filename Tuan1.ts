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

// Bài 7
class User {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    set name(newName: string) {
        this._name = newName;
    }
}

const user = new User("Loc");
console.log("Name:", user.name);
user.name = "Nguyen Loc";
console.log("Updated Name:", user.name);

// Bài 8
class Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}

const products: Product[] = [
    new Product("Pen", 50),
    new Product("Notebook", 120),
    new Product("Bag", 300)
];

const filtered = products.filter(p => p.price > 100);
console.log("Products > 100:");
filtered.forEach(p => console.log(`${p.name}: ${p.price}`));

// Bài 9
interface Animal {
    name: string;
    sound(): void;
}

class Dog implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sound(): void {
        console.log(`${this.name} says: Woof!`);
    }
}

const dog = new Dog("Buddy");
dog.sound();

// Bài 10
class Account {
    public username: string;
    private password: string;
    readonly id: number;

    constructor(username: string, password: string, id: number) {
        this.username = username;
        this.password = password;
        this.id = id;
    }

    showInfo(): void {
        console.log(`Username: ${this.username}, ID: ${this.id}`);
    }
}

// Test
const acc2 = new Account("loc123", "123456", 1);
acc2.showInfo();

// Bài 11
class AnimalBase {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Dog2 extends AnimalBase {
    bark(): void {
        console.log(`${this.name} is barking`);
    }
}

class Cat2 extends AnimalBase {
    meow(): void {
        console.log(`${this.name} is meowing`);
    }
}

const dog2 = new Dog2("Rex");
dog2.bark();
const cat2 = new Cat2("Mimi");
cat2.meow();

// Bài 12
interface Flyable {
    fly(): void;
}

interface Swimmable {
    swim(): void;
}

class Bird implements Flyable {
    fly(): void {
        console.log("Bird is flying");
    }
}

class Fish implements Swimmable {
    swim(): void {
        console.log("Fish is swimming");
    }
}

const bird = new Bird();
bird.fly();
const fish = new Fish();
fish.swim();

// Bài 13
abstract class Shape {
    abstract area(): number;
}

class Square extends Shape {
    side: number;

    constructor(side: number) {
        super();
        this.side = side;
    }

    area(): number {
        return this.side * this.side;
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

const square = new Square(4);
console.log("Square area:", square.area());
const circle = new Circle(3);
console.log("Circle area:", circle.area());

// Bài 14
class Employee {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Manager extends Employee {
    manage(): void {
        console.log(`${this.name} is managing team`);
    }
}

class Developer extends Employee {
    code(): void {
        console.log(`${this.name} is writing code`);
    }
}

const manager = new Manager("Alice");
manager.manage();
const dev = new Developer("Bob");
dev.code();

// Bài 15
class Library {
    books: Book[] = [];
    users: User[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }
}

const lib = new Library();
lib.addBook(new Book("TS Guide", "Author A", 2024));
console.log("Library books:", lib.books);

// Bài 16
class Box<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

const numberBox = new Box<number>(100);
console.log(numberBox.getValue());

// Bài 17
class Logger {
    private static instance: Logger;

    private constructor() {}

    static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    log(message: string): void {
        console.log("Log:", message);
    }
}

const logger = Logger.getInstance();
logger.log("Hello Singleton");

// Bài 18
class MathUtil {
    static add(a: number, b: number): number {
        return a + b;
    }

    static subtract(a: number, b: number): number {
        return a - b;
    }

    static multiply(a: number, b: number): number {
        return a * b;
    }

    static divide(a: number, b: number): number {
        return b !== 0 ? a / b : 0;
    }
}

console.log(MathUtil.add(5, 3));

// Bài 19
class AnimalPoly {
    sound(): void {
        console.log("Animal makes sound");
    }
}

class DogPoly extends AnimalPoly {
    sound(): void {
        console.log("Dog barks");
    }
}

class CatPoly extends AnimalPoly {
    sound(): void {
        console.log("Cat meows");
    }
}

const animals: AnimalPoly[] = [new DogPoly(), new CatPoly()];
animals.forEach(a => a.sound());

// Bài 20 
interface Vehicle {
    move(): void;
}

class Car2 implements Vehicle {
    move(): void {
        console.log("Car is moving");
    }
}

class Bike implements Vehicle {
    move(): void {
        console.log("Bike is moving");
    }
}

const car2 = new Car2();
car2.move();

// Bài 21
class Repository<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getAll(): T[] {
        return this.items;
    }
}

const repo = new Repository<string>();
repo.add("Item 1");
console.log(repo.getAll());

// Bài 22
class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }
}

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
console.log(stack.peek());
stack.pop();

// Bài 23
interface Payment {
    pay(amount: number): void;
}

class CashPayment implements Payment {
    pay(amount: number): void {
        console.log(`Paid ${amount} by cash`);
    }
}

class CardPayment implements Payment {
    pay(amount: number): void {
        console.log(`Paid ${amount} by card`);
    }
}

const payment: Payment = new CashPayment();
payment.pay(100);

// Bài 24
abstract class Appliance {
    abstract turnOn(): void;
}

class Fan extends Appliance {
    turnOn(): void {
        console.log("Fan is on");
    }
}

class AirConditioner extends Appliance {
    turnOn(): void {
        console.log("AC is on");
    }
}

const fan = new Fan();
fan.turnOn();

// Bài 25
class ShapeUtil {
    static describe(): void {
        console.log("Shapes have area and perimeter");
    }
}

ShapeUtil.describe();

// Bài 26
class Order {
    products: Product[];

    constructor(products: Product[]) {
        this.products = products;
    }

    getTotal(): number {
        return this.products.reduce((sum, p) => sum + p.price, 0);
    }
}

const order = new Order(products);
console.log("Total:", order.getTotal());

// Bài 27

class Teacher extends Person {
    subject: string;

    constructor(name: string, age: number, subject: string) {
        super(name, age);
        this.subject = subject;
    }

    introduce(): void {
        console.log(
            `I am ${this.name}, ${this.age} years old, and I teach ${this.subject}.`
        );
    }
}

const teacher = new Teacher("John", 35, "Math");
teacher.introduce();


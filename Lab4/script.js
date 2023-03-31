//Zad 1:
class Book {
    constructor(author, bookName, year) {
        this.author = author;
        this.bookName = bookName;
        this.year = year;
    }

    info(){
        return "Tytuł: " + this.bookName + ". Autor: " + this.author + ". Rok wydania: " + this.year;  ;
    }
}

//Zad 2:
class Student{
    constructor(firstName, lastName, albumNumber, math, physics, programming) {
     this.firstName = firstName;
     this.lastName = lastName;
     this.albumNumber = albumNumber;
     this.math = math;
     this.physics = physics;
     this.programming = programming;
    }
    personInfo() {
        return (this.firstName + " " + this.lastName + " " + this.albumNumber);
    }
    averageGrade() {
     return (this.math + this.physics + this.programming) / 3;
    };
}

//Zad 3 i 4:
class Car{
    constructor(brand, model, year, color, speed) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.speed = speed;
    }
    speedDecrese(speed) {
        this.speed -= speed;
    }
    speedIncrease(speed) {
        this.speed += speed;
    }
    speedShow() {
        console.log("Zad 3: Prędkość wynosi: " + this.speed);
    }
    carInfo() {
        console.log("Zad 3: " + this.brand + " " + this.model + " (" + this.year + "), Kolor: " + this.color + ", Prędkość: ", + this.speed);
    }
    yearShow() {
        var year = new Date();
        year = year.getFullYear() - this.year;
        console.log("Zad 4: Wiek samochodu wynosi " + year)
    }
}

//zad 5
class Rectangle {
    constructor (sideA, sideB) {
        this.sideA = sideA;
        this.sideB = sideB;
    }
    area() {
        var area = this.sideA * this.sideB;
        console.log("Zad 5: Pole prostokąta wynosi: " + area);
    }
    circumference() {
        var circumference = this.sideA * 2 + this.sideB * 2;
        console.log("Zad 5: Obwód prostokąta wynosi: " + circumference);
    }
    isSquare() {
        if(this.sideA == this.sideB) {
            console.log("Zad 5: prostokąt jest kwadratem!");
        } else {
            console.log("Zad 5: prostokąt nie jest kwadratem!");
        }
    }
}

//Zad 6:
function info() {
    rectangle = new Rectangle(document.getElementById("sideA").value, document.getElementById("sideB").value)
    document.getElementById("result").innerHTML = "Obwód prostokąta wynosi: " + rectangle.circumference() + " a pole wynosi: " + rectangle.area() + ". " + rectangle.isSquare();
}

//Zad 1:
const witcher = new Book("Andrzej Sapkowski", "Wiedźmin", "1995");

console.log("Zad 1: " + witcher.info());

//Zad 2:
const student = new Student("Jakub", "Tokarski", "w68892", 3, 4, 5);

console.log("Zad 2: Student " + student.personInfo() + " ma średnią: " + student.averageGrade())

//Zad 3:
const car = new Car("Skoda", "Octavia", 2010, "Srebrny", 200);

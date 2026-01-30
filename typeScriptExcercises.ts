// 1. Union Types ( | means OR ) 

// Exercise 1: 
// Create a type called IDType that can be either a number OR a string. 
// Write a function showID that prints "Your ID is: ...". 
// Call the function with both a number and a string. 

type IDType = number | string;

const showID = (ID: IDType) => {
    console.log(`Your ID is: ${ID}`);
}

//showID(1);
//showID("1");

// Exercise 2: 
// Make a type Fruit that can be "apple" OR "banana" OR "orange". 
// Write a function eatFruit that prints "You ate an ...". 
// Test with "apple" and "orange". 

type Fruit = ("apple" | "banana" | "orange");

const eatFruit = (fruit: Fruit) => {
    console.log(`You ate an ${fruit}`);
}

//eatFruit("apple");
//eatFruit("orange");

// Exercise 3: 
// Create a type Result that can be either true OR false. 
// Write a function printResult that prints "Pass" if true, and "Fail" if false. 
// Test with both values. 

type Result = ("true" | "false");

const printResult = (result: Result) => {
    if (result === "true") {
        console.log("Pass!");
    } else {
        console.log("Fail...");
    };
};

//printResult("true");
//printResult("false");

// 2. Interfaces and Type Aliases ( & means AND ) 

// Exercise 1: 
// Create an interface Book with properties title (string) and pages (number). 
// Write a function describeBook that prints: 
// "The book [title] has [pages] pages." 

 interface Book {
    title: string;
    pages: number;
 }

 const describeBook = (book: Book) => {
    console.log(`The book ${book.title} has ${book.pages} pages.`)
 }

// describeBook({title:"The Hobbit", pages:380})

// Exercise 2: 
// Create two interfaces: 

// Teacher with name and subject 

// Employee with id and email 

// Make a type SchoolTeacher that is both Teacher AND Employee. 
// Write a function printTeacherInfo to show their data. 

interface Teacher {
    name: string;
    subject: string;
}

interface Employee {
    id: number;
    email: string;
}

type SchoolTeacher = Teacher & Employee;

const printTeacherInfo = (info: SchoolTeacher) => {
    console.log(`The teacher ${info.name} is teaching ${info.subject}. She/He has the employee ID of ${info.id} and email address ${info.email}.`)
}
 
//printTeacherInfo(
//    {name: "Göran", subject: "math", id: 2, email: "göran@mail.com"
//})

// Exercise 3: 
// Make an interface Car with brand and year. 
// Write a function printCar that prints "Brand: ... Year: ...". 
// Call the function with your favorite car. 

interface Car {
    brand: string;
    year: number;
}

const printCar = (car: Car) => {
    console.log(`Brand: ${car.brand} Year: ${car.year}`);
}

//printCar({brand: "Audi A1", year:2011})

// 3. Enums (fixed list of options) 

// Exercise 1: 
// Create an enum Color with values: Red, Green, Blue. 
// Write a function showColor that prints "You chose Red/Green/Blue". 

enum Color {
    Red,
    Green,
    Blue
}

const showColor = (color: Color) => {
    if (color === Color.Red) {
        console.log("You chose red!");
    } else if (color === Color.Green) {
        console.log("You chose green!");
    } else if (color === Color.Blue) {
        console.log("You chose blue!");
    }
}

//showColor(Color.Blue)


// Exercise 2: 
// Create an enum PizzaSize with values: Small, Medium, Large. 
// Write a function orderPizza that prints: 
// "You ordered a [size] pizza." 

enum PizzaSize {
    Small = "small",
    Medium = "medium",
    Large = "large"
}

const orderPizza = (size: PizzaSize) => {
    console.log(`You ordered a ${size} Pizza!`)
}
 
//orderPizza(PizzaSize.Large)

// Exercise 3: 
// Create an enum Role with values: Admin, User, Guest. 
// Write a function printRole that checks the role: 

// Admin → "You have full access" 
// User → "You have limited access" 
// Guest → "You have guest access" 

enum Role {
    Admin,
    User,
    Guest
}

const printRole = (role: Role) => {
    if (role === Role.Admin) {
        console.log("You have full access")
    } else if (role === Role.User) {
        console.log("You have limited access")
    } else {
        console.log("You have guest access")
    }
}

//printRole(Role.Guest)

// 4. Generics ( <T> means reusable placeholder ) 
 
// Exercise 1: 
// Write a generic function wrapInArray<T> that takes one item and returns it inside an array. 
// Example: wrapInArray("cat") → ["cat"] 

const wrapInArray = <T>(array: T): T[] => {
    return [array];
} 

console.log(wrapInArray("Cat"))


// Exercise 2: 
// Write a generic function firstItem<T> that takes an array and returns the first item. 
// Test with [1, 2, 3] and ["a", "b", "c"]. 

const firstItem = <T>(arr: T[], value:T): any => {
    return arr.findIndex((item) => item === value);
}

//console.log(firstItem([1,2,3], 1))
//console.log(firstItem(["a", "b", "c"], "a"))

// Exercise 3: 
// Write a generic function swap<T> that takes two items and returns them in reverse order inside an array. 
// Example: swap("hello", "world") → ["world", "hello"] 

const swap = <T>(item1: T, item2: T) => {
    return [item2, item1]
}

console.log(swap("Hello", "World"))

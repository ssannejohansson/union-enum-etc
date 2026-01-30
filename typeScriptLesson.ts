// Union types (more than one possible type)

// Or use type PasswordFieldType = number | string; 
// And use (code: PasswordFieldType)
const password = (code: number | string) => {
    console.log("password: " + code);
}

// password("123");

type Direction = "left" | "right"

const move = (dir: Direction) => {
    console.log("moving: " + dir)
}

// move("left")

type Payment = "cash" | "card";

const pay = (method: Payment) => {
    console.log("Payment method: " + method)
}

// pay("cash");

// Interfaces and Type Aliases ( & means AND )

interface Person {
    firstName: string;
    age: number;
}

interface Customer {
    customerNumber: number;
    email: string;
}

type Client = Person & Customer;

const clientData = (client: Client) => {
    console.log(`Name: ${client.firstName} email: ${client.email}`);
}

// clientData({
//     firstName: "Sanne", 
//     age: 30, 
//     customerNumber: 1, 
//     email: "sannej0hansson@hotmail.com"});

// Enums (fixed list of options) 

enum LoginError {
    Unauthorized = "unauthorized",
    MissingCredentials = "missingcredentials",
    InternalError = "internalerror"
}

const printErrorMessage = (error: LoginError) => {
    if (error === LoginError.Unauthorized) {
        console.log("You are not authorized.")
    } else if (error === LoginError.MissingCredentials) {
        console.log("You are missing some credentials.")
    }
}

// Or:
// const printErrorMessage = (error: LoginError) => {
//    console.log("Error: " + error)
// }
// That will give "Error: unauthorized"

//printErrorMessage(LoginError.Unauthorized);

enum TrafficLight {
    Red,
    Yellow,
    Green
}

const lightAction = (light: TrafficLight) => {
    if (light === TrafficLight.Red) {
        console.log("STOP!");
    } else if (light === TrafficLight.Yellow) {
        console.log("Get ready...");
    } else if (light === TrafficLight.Green) {
        console.log("Go!");
    }
}

//lightAction(TrafficLight.Red)

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

const planDay = (day: Day) => {
    if (day === Day.Saturday || day === Day.Sunday) {
        console.log("It's weekend!");
    } else {
        console.log("It's a work day...");
    }
}

//planDay(Day.Saturday)

// Generics (<T> means reusable placeholder)

const convertToArray = <T>(input1: T, input2: T): T[] => {
return [input1, input2];
}

//console.log(convertToArray("dog", "cat"))

const getIndex = <T>(array: T[], value: T): number => {
    return array.findLastIndex((item) => item === value);
}

console.log(getIndex([10,20,40], 20))
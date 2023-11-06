// TypeScript interface for a user object
interface User2 {
    name: string;
    age: number;
}


// Extended interface
interface ExtendedUser extends User2 {
    email: string;
}

// Creating an instance of the ExtendedUser interface
const user: ExtendedUser = {
    name: "John Doe",
    age: 30,
    email: "john@example.com"
};


// How to declare an interface for an array
// In JavaScript, you often work with objects, arrays, and functions.

// Define a type for an array of numbers
type NumberArray = number[];

// Define an interface for an array of numbers
interface NumberArrayInterface {
    [index: number]: number;
}

// Create an instance of the NumberArrayInterface
const numbers: NumberArrayInterface = [1, 2, 3];

// Define a function type that takes two numbers and returns a number
type AddFunction = (num1: number, num2: number) => number;

// Define an interface for a function that adds two numbers
interface AddFunctionInterface {
    (num1: number, num2: number): number;
}

// Create an instance of the AddFunctionInterface
const addNumbers: AddFunctionInterface = (num1, num2) => num1 + num2;

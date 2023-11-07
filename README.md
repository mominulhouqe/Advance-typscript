# Wellcome Advance typescript world



# Understanding TypeScript Type Assertions and Error Handling with Try-Catch

This repository contains example code and explanations for understanding TypeScript type assertions and error handling using a try-catch block. 

## Table of Contents

- [Introduction](#introduction)
- [Type Assertion](#type-assertion)
- [Kilograms to Grams Conversion](#kilograms-to-grams-conversion)
- [Try-Catch Block](#try-catch-block)
- [Conclusion](#conclusion)
- [Additional Tips and Considerations](#additional-tips-and-considerations)

## Introduction

In this repository, we explore how to use TypeScript type assertions and handle errors using a try-catch block. We'll provide code examples and explanations to help you understand these concepts better.

## Type Assertion

Type assertions are a way to tell the TypeScript compiler that you know more about the type of a value than it does. This section covers the basics of type assertions and provides code examples to illustrate their use.

### Code Example:

```typescript
// Declare a variable 'anything' of type 'any'
let anything: any;
anything = "welcome ts advance";

// Perform a type assertion to treat 'anything' as a string
const stringValue = anything as string;

// Function for converting kilograms to grams
const kgToGm = (value: string | number | undefined) => {
    // ... (Code for conversion)

    // Type assertion for the result as a number
    const result1 = kgToGm(1000) as number;

    // Type assertion for the result as a string
    const result2 = kgToGm("1000") as string;
}



// Try-catch example with a custom error type
type CustomError = {
    message: string;
}

try {
    // Your code that might throw an error
    throw { message: "An error occurred" };

    // Type assertion: treat 'error' as a 'CustomError' and extract the 'message' property
    console.log("Error:", (error as CustomError).message);
}
```
# TypeScript Interface Extension Example

This is an example of how to extend TypeScript interfaces to build upon the structure of existing interfaces.

## Introduction

In TypeScript, interfaces allow you to define the structure of objects, and you can also extend them to inherit properties and methods from other interfaces. This is a powerful feature that promotes code reusability and maintainability.

## Base Interface

Let's start with a base interface that represents a basic user object:

```typescript
interface User2 {
    name: string;
    age: number;
}
```

# Generic Constraints in TypeScript

This repository demonstrates the usage of generic constraints in TypeScript. It includes a function that adds a "course" property to a student object, and it enforces certain constraints on the input types.

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [Generic Function](#generic-function)
- [Examples](#examples)
- [Issues](#issues)

## Getting Started

- Usage
- In TypeScript, generic constraints allow you to specify certain conditions or constraints on the types that can be used with a generic function. In this repository, the addTocourseStudent function enforces constraints on the input types to ensure that they have id, name, and email properties of specific types.

**Generic Function**
The addTocourseStudent function is defined as follows:


``
Example: 

const addTocourseStudent = <T extends { id: number, name: string, email: string }>(student: T) => {
    const course = "next level web devs";
    return {
        ...student,
        course
    };
}


const student1 = addTocourseStudent<{
    id: number,
    name: string,
    email: string,
    devsType: string
}>({
    id: 23,
    name: "mominul",
    email: "mominul@gmail.com",
    devsType: "nextdvs"
});

``
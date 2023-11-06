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

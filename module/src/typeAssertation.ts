{

    // type asserstion

    /* 
    Note: type assertion hocce je ami sure je amr type ta string or number or undifined etc...ei typscript er sure howake typscript assertion bole.that means ami typsript teke besi buji

    */
    let anything: any;
    anything = "welcome ts advance";
    (anything as string)


    const kgToGm = (value: string | number | undefined) => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000
            return `the converted value ${convertedValue}
`    }
        if (typeof value === "number") {
            return value * 1000
        }
    }
    const result1 = kgToGm(1000) as number;
    const result2 = kgToGm("1000") as string;

    //if i am sure that type is number or string, i will use that asserstion

    // try catch example

    type CustomError = {
        message: string;
    }
    try {

    } catch (error) {
        console.log("types", (error as CustomError));

    }







    /* // Type assertion example
    let anything: any; // Declare a variable 'anything' of type 'any'
    anything = "welcome ts advance"; // Assign a string value to 'anything'
    const stringValue = anything as string; // Type assertion: treat 'anything' as a string
    
    // Function for converting kilograms to grams
    const kgToGm = (value: string | number | undefined) => {
        if (typeof value === "string") {
            // If the input is a string, convert it to a number and then to grams
            const convertedValue = parseFloat(value) * 1000;
            return `The converted value is ${convertedValue} grams`;
        }
        if (typeof value === "number") {
            // If the input is already a number, convert it to grams
            return value * 1000;
        }
    }
    
    const result1 = kgToGm(1000) as number; // Type assertion: treat the result as a number
    const result2 = kgToGm("1000") as string; // Type assertion: treat the result as a string
    
    // If you are sure about the types, you can use type assertions.
    
    // Try-catch example with custom error type
    type CustomError = {
        message: string;
    }
    
    try {
        // Your code that might throw an error
        throw { message: "An error occurred" }; // Simulate an error
    } catch (error) {
        console.log("Error:", (error as CustomError).message); // Type assertion: treat 'error' as a 'CustomError' and extract the 'message' property
    }
     */








}
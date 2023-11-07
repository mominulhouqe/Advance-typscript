{

    // generics types in typscript


    // type GenericArray = Array<number>
    type GenericArray<T> = Array<T>



    // const rollNumber:number[] =[34,53,35]
    // const rollNumber: Array<number> = [34, 53, 35]
    const rollNumber: GenericArray<number> = [34, 53, 35]

    // const mentors:string[]=["mominul","rajibur","fahimur"]
    // const mentors: Array<string> = ["mominul", "rajibur", "fahimur"]
    const mentors: GenericArray<string> = ["mominul", "rajibur", "fahimur"]


    const add = (x: number, y: number) => x + y;
    add(34, 65)
    // by usging array of generic

    const users: GenericArray<{ name: string; age: number }> = [
        {
            name: "mominul",
            age: 5434
        },
        {
            name: "Himel Khan",
            age: 5434
        },

    ]



}
// Define a generic function that adds a "course" property to a student object.
const addTocourseStudent = <T extends { id: number, name: string, email: string }>(student: T) => {
    const course = "next level web devs"; // Set the course name.
    return {
        ...student,
        course // Add the "course" property to the student object.
    };
}

// Attempt to create student objects with different properties.

// This will result in a type error because the input object doesn't match the expected type.
const student3 = addTocourseStudent({
    emni: 'emni',
    id: 345,
    email: "emain",
    name: "EMNI"
});

// Explicitly specify the type parameter for addTocourseStudent, but it still contains an extra property.
// This will also result in a type error.
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

// Another attempt to create a student object with an extra property.
// This will result in a type error as well.
const student2 = addTocourseStudent({
    id: 233,
    name: "Rajibur",
    email: "rajibur@gmail.com",
    devsType: 'bmwl'
});

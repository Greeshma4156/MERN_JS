//array of objects
let students=[
    { sno:1, name: "ravi", age:21},
    { sno:2, name: "ram", age:27},
    { sno:3, name: "manoj", age:51},
    { sno:4, name: "rani", age:12}
];

//find students age less than 20
let r1=students.filter(stuobj=>stuobj.age<20)
console.log(r1)

//Increment age by 2 years for manoj
let r2 = students.map(stuobj => {
    if (stuobj.name === "manoj") {
        return {
            sno: stuobj.sno,
            name: stuobj.name,
            age: stuobj.age + 2
        };
    }
    return stuobj;
});

console.log(r2);


//find the sum of ages of all students
let r3=students.reduce((acc,stuobj)=>acc+stuobj.age,0)
console.log(r3)
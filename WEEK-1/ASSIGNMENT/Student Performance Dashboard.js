let students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

//filter() students who passed (marks ≥ 40)
let r1=students.filter(element=>element.marks >=40)
console.log(r1)

/*map() to add a grade field
        ≥90 → A
        ≥75 → B
        ≥60 → C
        else → D
*/
//let r2=marks.map(ele=>ele.marks>=90)

//reduce() to calculate average marks
let r3=students.reduce((accumulator,element)=>accumulator+element.marks,0)
result=r3/students.length
console.log(result)

//find() the student who scored 92
let r4=students.find(element=>element.marks===92)
console.log(r4)

//findIndex() of student "Kiran"
let r5=students.findIndex(element=>element.name==='kiran')
console.log(r5)
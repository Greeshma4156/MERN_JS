let marks = [78, 92, 35, 88, 40, 67];

//filter() marks ≥ 40 (pass marks)
let r1=marks.filter(element=>element >=40)
console.log(r1)

//map() to add 5 grace marks to each student
let r2=marks.map(element=>element+5)
console.log(r2)

//reduce() to find highest mark
let r3=marks.reduce((acc,el)=>acc>el?acc:el)
console.log(r3)

//find() first mark below 40
let r4=marks.find(element=>element>40)
console.log(r4)

//findIndex() of mark 92
let r5=marks.findIndex(element=>element===92)
console.log(r5)
let marks =[10, 39, 54, 78, 32, 12]
//filter (selection)
//get marks < 70
let result1=marks.filter(element=>element <70)
console.log(result1)

//map(modification / tranformation)
// add 5 marks to all
let r2=marks.map(element=>element+5)
console.log(r2)

//reduce (aggregations)
//find sum of marks
let r3=marks.reduce((accumulator,element)=>accumulator+element)
console.log(r3)

//find small element of marks 
let r4=marks.reduce((acc,el)=>acc<el?acc:el)
console.log(r4)

//condition ? exp-1:exp-2

//find element - 23
let r5=marks.find(element=>element===32)
console.log(r5)

//find index
let r6=marks.findIndex(element=>element===23)
console.log(r6)
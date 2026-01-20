let temperatures = [32, 35, 28, 40, 38, 30, 42];

let r1=temperatures.filter(element=>element>35)
console.log(r1)

let r2=temperatures.map(element=>(element*9/5)+32)
console.log(r2)

let r3=temperatures.reduce((accumulator,element)=>accumulator+element)
result=r3/temperatures.length
console.log(result)

let r4=temperatures.find(element=>element>40)
console.log(r4)

let r5=temperatures.findIndex(element=>element===28)
console.log(r5)
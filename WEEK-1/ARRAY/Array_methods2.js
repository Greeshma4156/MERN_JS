let courses = ["javascript", "react", "node", "mongodb", "express"];

let r1=courses.filter(element=>element.length>5)
console.log(r1)

let r2=courses.map(element=>element.toUpperCase())
console.log(r2)

let r3=r2.reduce((acc,ele)=>acc+' | '+ele)
console.log(r3)

let r4=courses.find(element=>element==='react')
console.log(r4)

let r5=courses.findIndex(element=>element==='node')
console.log(r5)
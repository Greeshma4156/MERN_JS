let skills=['html','css','javascript']

//accessing elements(destructure)
let [skills1,skills2,skills3]=skills;
console.log(skills2)

//inserting
//at start
skills.unshift('angular','java')
console.log(skills)

//at end 
skills.push("python")
console.log(skills)

//in between
//splice(index, delete count, elements)
skills.splice(1,0,'scala')
console.log(skills)

//delete at start
skills.shift()
console.log(skills)

//delete at end
skills.pop()
console.log(skills)

//delete in between
skills.splice(1,2)
console.log(skills)
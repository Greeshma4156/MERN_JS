let empobj={
    empno:100,name:'ravi'}

// accessing properties
console.log(empobj.empno)

//ading new prop(dynamic)
empobj.city="hyd"

//update a prop
empobj.empno=123;

//delete a prop
delete empobj.name;

//freeze an object
Object.freeze(empobj);//object is locked it cannot be changed

empobj.empno=12345;//ignored

console.log(empobj)

//read keys
console.log(Object.keys(empobj))
console.log(Object.values(empobj))
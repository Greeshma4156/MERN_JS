//unpack
/*let test={
    a:10,b:20,c:30
}

//unpack object(destructing)
let {a,b,c}=test;
console.log(a)
console.log(b)
console.log(c)*/

//complex object
let total=0
let student={
    sno:100,
    name:"bhanu",
    marks:[90,89,76],
    address:{
        city:"hyd",
        pincode:501301
    },
    getData : function()
    {
        for (let v of this.marks)
        {
            total=total+v;
        }
        n=this.marks.length
        total=total/n
        console.log(total)
    }
}
console.log(student.marks)
console.log(student.address.city)
console.log(student.getData())
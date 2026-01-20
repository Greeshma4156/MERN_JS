let marks=[90,70,80,23,78]

//filter(selction)
let r = marks.filter(function (element)
{
    return element<50
})
console.log(r)

//write a fun that can extract marks > 70, pack then into an array and return it
function extract_Marks()
{
    for (let v in marks)
    {
        if (v>70)
        {
            empty.push(v)
        }
    }
    console.log(empty)
}
//find all thhe marks between 30 and 50
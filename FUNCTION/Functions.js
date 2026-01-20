
// write a function that recieves marks array has argument and returns the small element
let marks=[90,80,78,67,34]
let smallest=marks[0]
function marksArray(marks)
{
    for (let v of marks)
    {
        if (v<smallest)
        {
            smallest=v
        }
        
    }
    return smallest
}

console.log(marksArray(marks))
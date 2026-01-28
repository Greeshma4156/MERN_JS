/*Given:
      let enrollmentDeadline = new Date("2026-01-20");

Tasks:
  1.Check if:
      * Today is before deadline → "Enrollment Open"
      * Today is after deadline → "Enrollment Closed"

  2. Validate user input date:
      * Input: "2026-02-30"
      * Detect whether the date is valid or invalid */
let enrollmentDeadline = new Date("2026-01-20");
let d=new Date(Date.now())
if (d < enrollmentDeadline)
{
    console.log("Enrollment Open")
}
else{
    console.log("Enrollment Closed")
}
// Validate user input date
let d1="2026-02-30"
let d1obj=new Date(d1)

if (isNaN(d1obj.getTime()))//return NAN for invalid dates 
{
    console.log("Invalid date")
}
else{
    console.log("valid date ")
}

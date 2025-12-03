//QUESTION-1 TONNAGE VALIDATION
let procurementTonnage = 9000
let num = procurementTonnage>=1000
console.log(num)

// QUESTION-2 STRICTNESS CHECK  
//using the loose equality sign ==
let coststr = "5000"
let costNum = 5000
let ans = coststr==costNum
console.log(ans)

//using the strict equality sign ===
let coststr1 = "5000"
let costNum1 = 5000
let ans1 = coststr===costNum
console.log(ans1)

//=== is safer because it checks for both the value and the data type 


//PART 2
//QUESTION-3 COMPLEX VALIDATION
let dealerNAME = "Ritah"
let costUgx = 11000
let answer = (dealerNAME.length>=2) && (costUgx>=10000)
console.log(answer)

//QUESTION-4 DATE LOGGING 
let date = new Date()
let date2 = date.getDate()
let month = date.getMonth()
let year = date.getFullYear()

let sale = `"Sale on: ${date2}/${month}/${year}"`
console.log(sale)
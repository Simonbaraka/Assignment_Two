//String concatenation
let names = "Simon"
let location =" Mowbray"
let product = "Five bed room house "
let finalMessage = `Dealer: ${names},  Location:${location}, Product: ${product}.`
console.log(finalMessage)

//String concatenation using the + Operation
let name1 = "Baraka"
let location1 ="Rondebosch"
let product1 = "Complex Apartment"
let finalMessage1 = "Dealer: " +name1 +"\nLocation: "+location1 +"\nProduct: "+product1
console.log(finalMessage1)

// String method Challenge
let products = "Five Bed room house "
let upper = products.toUpperCase()
console.log(upper)

//toLowerCase
let lower = products.toLowerCase()
console.log(lower)

//trim
let trimmer = products.trim()
console.log(trimmer)

//split
let splitter = products.split(" ")
console.log(splitter)

//replace
let place = products.replace("Five", "Eight")
console.log(place)


//Type checking and conversion

//string
let word1 = typeof("Words")
console.log(word1)
//number
let word2= typeof(123)
console.log(word2)
//boolean
let word3 = typeof(true)
console.log(word3)


//String conversion
//String to Number
let num = "123"
let num1 = parseInt(num)
console.log(num1)

//number to string
let num2= 123
let num3 = parseInt(num2)
console.log(num3)
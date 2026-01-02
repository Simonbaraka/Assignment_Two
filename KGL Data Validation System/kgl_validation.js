//Part A: Variable Declaration and Type Checking
//QUESTION 1

let companyName ="Karibu Groceries LTD"
let minimumTonnage=1000
let isOperational = true
let managerName;
let closedBranches = null

//QUESTION 2
console.log(typeof(companyName))
console.log(typeof(minimumTonnage))
console.log(typeof(isOperational))
console.log(typeof(managerName))
console.log(typeof(closedBranches))

//Part B: String Manipulation and Validation

//QUESTION 4
console.log("QUESTION 4")
let dealerNameInput =" james BOND "
let trimedName = dealerNameInput.trim().toLowerCase().split(" ");
let cleanDealerName =""
for(let i =0;i<trimedName.length;i++){
    let word = trimedName[i].substring(0,1).toUpperCase()+trimedName[i].substring(1);
    cleanDealerName+=word+" "

}
console.log("Cleaned Dealer Name: "+cleanDealerName)

//QUESTION 6
console.log("QUESTION 6")
if(cleanDealerName.length>2 && cleanDealerName!==""){
    console.log("Valid dealer name")
}else{
    console.log("Invalid dealer name")
}

//Part C: Conditional Logic and Business Rules
//QUESTION 7
console.log("QUESTION 7")
let userRole = 'Sales Agent';
let procurementTonnage = 1500;
let produceType = 'Beans';
let costInUgx = '50000';

//QUESTION 8
console.log("QUESTION 8")
if(userRole=="Sales Agent"){
     console.log("Permission denied")
     
}

if(procurementTonnage>=1000){

}else{
    
}


if(costInUgx>10000){

}

//QUESTION 9
console.log("QUESTION 9")
let bool = procurementTonnage&&costInUgx
if(bool){
    console.log("Procurement record valid")
}else{
    console.log("Procurement record invalid")
}


//Part D: Arrays and Produce Management 

//QUESTION  10
console.log("QUESTION 10")
const kglProduce =['Beans',
'Grain Maize', 'Cow peas', 'G-nuts', 'Soybeans']
 console.log(kglProduce)

//QUESTION 11
console.log("QUESTION 11")
kglProduce.push("Green-peas")
console.log(kglProduce)

if (kglProduce.includes("G-nuts")) {
    console.log("G-nuts exists in the array");
} else {
    console.log("G-nuts does not exist in the array");
}




//QUESTION 12
console.log("QUESTION 12")
const branch2Produce = ['Maize', 'Beans'] 
const allProduce = branch2Produce.concat(kglProduce)
console.log(allProduce)
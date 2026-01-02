//Part A: Function Implementation


function calculateProcurementCost(tonnageInKg,pricePerKg){

    if((tonnageInKg<0)||pricePerKg<0){
        console.log("Invalid input")
    }else{
        return tonnageInKg*pricePerKg
    }
    
}

//Arrow function Question 2

const validateBuyerName=(buyreName)=>{
    if(buyerName.length >=2 || buyerName!==""){
        return true
    }else{
        return false
    }
}

//QUESTION 3

function checkUserAuthorization(role){
    switch(role){
        case("Manager"):
            console.log("procurement_and_sales")
            break;
        case("Sales Agent"):
            console.log("procurement_and_sales")
            break;
        case("Director"):
            console.log("view_aggregations")
            break;
        default:
             console.log("unauthorized")
             break

    }   
}

//Part B: OBJECT CREATION AND MANIPULATION
//QUESTION 4
function creatSalesRecord(produceName,tonnage,buyerName,amountPaid){

        this.produceName=produceName
        this.tonnageInKg=tonnage
        this.buyerName=buyerName
        this.amountPaid=amountPaid
        this.saleDate = new Date("31-12-2025") 
        iscreditSale = false;
}

//QUESTION 5
const sales = new creatSalesRecord("Simon",1000,"Baraka",140000)
sales.branch = "Maganjo"
sales.iscreditSale=true
sales["dueDate"]="20-01-2026"
console.log(sales)

//Use Object.keys() to get all property names and log them
let saleProduct = Object.keys(sales);
console.log(saleProduct)

//QUESTION 6 Write a for...in loop that iterates over your sales record object and logs each property name and value in the format: "Property: [name], Value: [value]" 

for(const product in Object.entries(sales)){
   
    
}



//Part C: Loop Implementation and Data Processing 

//QUESTION 7

let weeklyTonnage = [1200,1500,980,2000,1100,1800,1300]
let total=0
let average =0
let averagedaily = weeklyTonnage.length;

for(const word of weeklyTonnage){
   total = total+word
}

console.log(total)
console.log(total/averagedaily)

//QUESTION 8


//QUESTION 9
let inventory =[
    {name:"Beans",tonnage:500},
    {name:"Maize",tonnage:0},
    {name:"G-nuts",tonnage:300}
];

for(const produce of inventory){
    if(produce.tonnage==0){
        console.log("Manager Alert: "+produce.name+" is out of stock")
        break;
    }
}






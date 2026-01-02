// QUESTION 1:
// Create an array of at least 6 procurement record objects

const procurementRecords = [
    {
        id: 1,
        dealerName: "Medina",
        produceType: "Maize",
        tonnageInKgs: 2000,
        costInUgx: 30000,
        procurementDate: new Date("2026-01-03")
    },
    {
        id: 2,
        dealerName: "Kato Traders",
        produceType: "Beans",
        tonnageInKgs: 500,
        costInUgx: 27000,
        procurementDate: new Date("2026-01-04")
    },
    {
        id: 3,
        dealerName: "Green Farm",
        produceType: "Rice",
        tonnageInKgs: 600,
        costInUgx: 125000,
        procurementDate: new Date("2026-01-05")
    },
    {
        id: 4,
        dealerName: "AgroPlus",
        produceType: "Maize",
        tonnageInKgs: 3500,
        costInUgx: 70000,
        procurementDate: new Date("2026-01-06")
    },
    {
        id: 5,
        dealerName: "Harvest Co",
        produceType: "Sorghum",
        tonnageInKgs: 400,
        costInUgx: 80000,
        procurementDate: new Date("2026-01-07")
    },
    {
        id: 6,
        dealerName: "Nile Produce",
        produceType: "Beans",
        tonnageInKgs: 250,
        costInUgx: 50000,
        procurementDate: new Date("2026-01-08")
    }
];


// QUESTION 2:
// Use .map() to add costPerKg to each record

const procurementWithCostPerKg = procurementRecords.map(record => {
    return {
        ...record,
        costPerKg: record.costInUgx / record.tonnageInKgs
    };
});


// Display result
console.log(procurementWithCostPerKg);

// QUESTION 3

let filArray = procurementRecords.filter((procurementRecords)=> procurementRecords.tonnageInKgs>=1000)
console.log(filArray)
console.log(filArray.length)

// QUESTION 4


let totalCost = procurementRecords.reduce((totaltonnage,totalCost)=>{
    return totaltonnage + totalCost.costInUgx
    
},0)


let totaltonnage = procurementRecords.reduce((totaltonnage,totalCost)=>{
    return totaltonnage + totalCost.tonnageInKgs
    
},0)

console.log(`Total Tonnage: ${totaltonnage} KGS\nTotal Cost: Shs.${totalCost}`)

//Part B: Sets for Unique Data Management 
// QUESTION 5
function getUniqueDealers(array){
   const Unique = new Set(array)
    return Unique
}

console.log(getUniqueDealers(procurementRecords))

// QUESTION 6
const authorizedRoles  = new Set()
authorizedRoles.add("Manager")
authorizedRoles.add("Director")

function  isAuthorizedForProcurement (userRole){
    if((authorizedRoles.has(userRole))){
        return true
    }else{
       return  false
    }
}

console.log(isAuthorizedForProcurement("Manager"))
console.log(isAuthorizedForProcurement("Sales Agent"))
console.log(isAuthorizedForProcurement("Director"))

//Part C: Maps for Price Management 
// QUESTION 7

let kglProiceList = new Map()
kglProiceList.set("Beans",5500)
kglProiceList.set("Grain Maize",4800)
kglProiceList.set("Cow Peas",6000)
kglProiceList.set("G-nuts",7200)
kglProiceList.set("Soybeans",5800)
console.log(kglProiceList)

//QUESTION 8
function calculateSaleTotal(produceName,tonnageInKgs){
    for(const price  of kglProiceList){
        if(!kglProiceList.get(produceName)){
            console.log("Price Not Found")
            break
        }else{
            return totalSale = (kglProiceList.get(produceName)*tonnageInKgs)
        }
    }
}

console.log(calculateSaleTotal("Beans",200))
console.log(calculateSaleTotal("Maize",400))
console.log(calculateSaleTotal("Soybeans",100))


//QUESTION 9

for(const [key,value] of kglProiceList){
    console.log(`Produce: ${key}, Price per Kg: ${value} UgX`)

}

let redu = kglProiceList.reduce((kglProiceList.value))
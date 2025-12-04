//USING MULTIPLE IF STATEMENTS
let userRole ="Manger"
let message 

if(userRole=="Director"){
    message = "Viewing Totals Only"
}else if(userRole=="Manager"){
    message = "Can Record Procurement And Sales"
}else if(userRole=="Sales Agent"){
    message="Can Record Sales Only"
}else{
    message="Nothing to view"
}

console.log(message)

// USE A SINGLE IF STATEMENT 
let buyerName = "Wilson"
let AmountDue = 90000
let productName ="Milk"

if((buyerName.length>=2)&&(AmountDue>=5)&&(productName!="")){
    console.log("This is a valid Record")
}else{
    console.log("This is an invalid Record")
}


// PRODUCE SWITCH
let produceType = "Simisim"
let messages

switch(produceType){
    case "Beans":
        messages="Ths produce Type is beans"
        break
     case "G-nuts":
        messages="Ths produce Type is G-nuts"
        break
      default:
        messages=" Handle Cow Peas, Grain Maize, Soybeans"
        break
}
console.log(messages)
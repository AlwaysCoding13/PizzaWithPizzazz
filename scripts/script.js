let order = document.getElementById("order");
let customerID = document.getElementById("customer-id");
let customerIDNum = 0;
let recipt = document.getElementById("recipt");
let pizzaSizes = document.getElementsByName('pizza-size');
let toppings = document.getElementsByName("toppings");
let drink = document.getElementById("drinks");
let drinkSize = document.getElementById("drink-size")
let fullName = document.getElementById("name");
let address = document.getElementById("address");
let cityState = document.getElementById("city-state");
let zip = document.getElementById("zip");
let phone = document.getElementById("phone");




function printRecipt(){
    let sizeSelection;
    let toppingsSelection = "";
    customerIDNum++;
    recipt.style.border = '2px solid black'
    recipt.innerText = ""; 
    customerID.innerText = `Customer #: ${customerIDNum}`
    for (let index = 0; index < pizzaSizes.length; index++) {
        if(pizzaSizes[index].checked){
            sizeSelection = pizzaSizes[index].value;
        }        
    }
    for (let index = 0; index < toppings.length; index++) {
        if(toppings[index].checked){
            toppingsSelection += `${toppings[index].value}\n`;
        }        
    }
    if(fullName.value == "" || address.value == "" || cityState.value == "" || zip.value == "" || phone.value == ""){
        alert("No pizza for you fields not entered correctly");
        recipt.innerText = "";
    }
    else{
           recipt.innerText += `${customerID.innerText}\n`;
            recipt.innerText += `Size: ${sizeSelection}\n`;
            recipt.innerText += `Toppings:\n${toppingsSelection}\n`;
            recipt.innerText += `Drink Selection:\n${drinks.value}\n${drinkSize.value}\n`;
            recipt.innerText += `Name:${fullName.value}\n`;
            recipt.innerText += `Address:${address.value}\n`;
            recipt.innerText += `City & State:${cityState.value}\n`;
            recipt.innerText += `Zip Code:${zip.value}\n`;
            recipt.innerText += `Phone #:${phone.value}\n`;
            recipt.innerText += "Thanks for chosing pizza with pizzazz!"
        }
};
 

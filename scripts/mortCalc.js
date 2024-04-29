"use strict"

  console.log("calculate")
  
  
    //getting the calculation from page to run formula
    const calculateButton = document.querySelector("#calculate");

    calculateButton.addEventListener("click", calculate);
  

//creating a function to claculate monthly estimates
function calculate() {

    //independently identifying variables for calculations
    let principal = (document.querySelector("#principalAmount").value);
    let interest = (document.querySelector("#interestRate").value);
    let loanTerm = (document.querySelector("#loanTerm").value);


    //calculate the monthly interest rate and the total number if payments
    const monthlyRate = interest/ 100 / 12;
    const numOfPayments = loanTerm * 12;
    const denominator = Math.pow(1 + monthlyRate, numOfPayments);

    //calculate monthly payment and total loan amount
    const monthlyPayment = principal * (monthlyRate * denominator) / (denominator - 1);
    let totalPayment = monthlyPayment * numOfPayments;
    let totalIntrest = totalPayment - principal;

    //put the results in the result field
   //document.querySelector("#estimate").value = monthlyPayment.toFixed(2);
const message = "Your expected month payment will be: $" + monthlyPayment.toFixed(2) + " with a total intrest amount of $" + totalIntrest.toFixed(2) + " paid in " + loanTerm + " years. Your total loan amount is $" + totalPayment.toFixed(2);

document.querySelector("#total").innerHTML = message;s


}
//adding the reset button
function resetForm() {
    // Get the form element
    let form = document.getElementById("myForm");
    
    // Reset the form
    form.reset();
  }


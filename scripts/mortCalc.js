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
    //let totalPayment = monthlyPayment * numOfPayments
    //let totalIntrest = totalPayment - Number(principal.value)


    //let result = principal * interest ( 1 + interest) **monthlyTerm / (1 + interest)**monthlyTerm - 1;

    //put the results in the result field
    document.querySelector("#estimate").value = monthlyPayment.toFixed(2);
}

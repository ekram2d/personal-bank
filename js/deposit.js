// DRY ---> Do Not Repeat Yourself
document.getElementById("btn-deposit").addEventListener("click", function () {
  /* 
    1. get the element by id
    2. get the value from the elementthdraw-field
    3. convert string value to a number
    */
  const newDepositAmount = getInputFieldValueById("deposit-field");
  /* 
    1. get previous deposit total by id

    */
  const previousDepositTotal = getTextElementValueById("deposit-total");

  // calculate new deposit total
  //console.log(newDepositAmount);
  if (newDepositAmount) {
    const newDepositTotal = previousDepositTotal + newDepositAmount;

    const previousBalanceTotal = getTextElementValueById("balance-total");
    //console.log(previousBalanceTotal)
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById("balance-total", newBalanceTotal);
    setTextElementValueById("deposit-total", newDepositTotal)


  }
  else {
    return;
  }
});

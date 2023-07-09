/* 
1. add withdraw button event handler
2. get withdraw amount by using getInputFieldValueById function
3. get previous withdraw amount by using getTextElementValueById function
4. calculate new withdraw Total and set the value
4-5: set new withdraw total by using setTextElementValueById function
5. get previous balance total by using getTextElementValueById function
6. calculate new balance total
7. set balance total using setTextElementValueById
*/

document.getElementById("btn-withdraw").addEventListener("click", function () {
  //console.log("yes");
  const newWithdrawAmount = getInputFieldValueById("withdraw-field");

  const previousWithdrawTotal = getTextElementValueById("withdraw-total");
  const previousBalanceTotal = getTextElementValueById("balance-total");
  //console.log(newWithdrawAmount , previousWithdrawTotal);


  //console.log(previousBalanceTotal);

  if (newWithdrawAmount <= previousBalanceTotal && newWithdrawAmount != NaN) {
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    console.log(newWithdrawAmount);
    setTextElementValueById("withdraw-total", newWithdrawTotal);
    setTextElementValueById("balance-total", previousBalanceTotal - newWithdrawAmount)
  }


  else {
    return;
  }

});

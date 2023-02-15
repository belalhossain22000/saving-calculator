function valuConverter(id) {
  const getVal = document.getElementById(id).value;
  const valInt = parseInt(getVal);
  if (isNaN(valInt)) {
    alert("Please enter a valid number");
  } else if (valInt < 0) {
    alert("Please enter a positive number");
  }
  return valInt;
}
function totalCost() {
  const food = valuConverter("food");
  const rent = valuConverter("rent");
  const clothes = valuConverter("clothes");

  const totalExpenses = food + rent + clothes;
  return totalExpenses;
}

document.getElementById("calculatebtn").addEventListener("click", function () {
  const mainexpence = totalCost();
  const income = valuConverter("income");
  const balance = income - mainexpence;
  document.getElementById("totalexpence").innerText = mainexpence;
  document.getElementById("blance").innerText = balance;

  if (mainexpence > income) {
    alert(
      "fokir hoite somoy lagbo na emne khoroc korle!ইনকাম এর চাইতে বেশি খরচ করা যাবে না "
    );
  }
});
document.getElementById("savingbtn").addEventListener("click", function () {
  const savingAmount = valuConverter("saving");
  const incomes = valuConverter("income");

  const totalSavingAmmounnt = (incomes * (100 - savingAmount)) / 100;
  const mainSaving = incomes - totalSavingAmmounnt;

  document.getElementById("savingammunt").innerText = mainSaving;
  const mainexpence = totalCost();
  const income = valuConverter("income");
  
  const balance = income - mainexpence;
  const remainingBalance = balance - mainSaving;

  if (mainSaving > income) {
    alert(' saving is greater than income! তোমার balance এর চাইতে বেশি সেইভ করতে পারবে না।  ');
  }
 
  document.getElementById("remaining").innerText = remainingBalance;
});

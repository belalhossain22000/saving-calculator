function calculateSavings() {
    // Get input values
    var income = document.getElementById("income").value;
    var food = document.getElementById("food").value;
    var rent = document.getElementById("rent").value;
    var clothes = document.getElementById("clothes").value;
    var save = document.getElementById("save").value;
  
    // Calculate total expenses and balance
    var totalExpenses = parseInt(food) + parseInt(rent) + parseInt(clothes);
    var balance = parseInt(income) - totalExpenses;
  
    // Calculate remaining balance and saving amount
    var remainingBalance = balance * (100 - save) / 100;
    var savingAmount = balance - remainingBalance;
  
    // Update result elements
    document.getElementById("totalExpenses").innerHTML = totalExpenses;
    document.getElementById("balance").innerHTML = balance;
    document.getElementById("remainingBalance").innerHTML = remainingBalance;
    document.getElementById("savingAmount").innerHTML = savingAmount;
  }

  const food =  valuConverter('food')
  const rent =  valuConverter('rent')
  const clothes =  valuConverter('clothes')
 
  const totalExpenses = food+rent+clothes;
  
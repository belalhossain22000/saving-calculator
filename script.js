function valuConverter(id){
    const getVal = document.getElementById(id).value;
    const valInt = parseInt(getVal);
   return valInt;
}
function totalCost(){
    const food =  valuConverter('food')
    const rent =  valuConverter('rent')
    const clothes =  valuConverter('clothes')
   
    const totalExpenses = food+rent+clothes;
    return totalExpenses;
}

document.getElementById('calculatebtn').addEventListener('click',function(){
   const mainexpence = totalCost()
    const income = valuConverter('income')
    const balance = income - mainexpence;
   document.getElementById('totalexpence').innerText= mainexpence;
   document.getElementById('blance').innerText= balance;
})
document.getElementById('savingbtn').addEventListener('click',function(){
    const savingAmount = valuConverter('saving');
    const incomes = valuConverter('income')
    const totalSavingAmmounnt = incomes * (100 -savingAmount) / 100;
    const mainSaving = incomes-totalSavingAmmounnt;
    document.getElementById('savingammunt').innerText= mainSaving;
    const mainexpence = totalCost()
    const income = valuConverter('income')
    const balance = income - mainexpence;
    const remainingBalance = balance-mainSaving
    document.getElementById('remaining').innerText= remainingBalance;
})
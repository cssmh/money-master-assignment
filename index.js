function work(id) {
  const convertFloat = document.getElementById(id).value;
  const FloatToNumber = parseFloat(convertFloat);
  return FloatToNumber;
}
// value get function
document.getElementById("calculate-cost").addEventListener('click', function(){
    const incomeHere = work('total-income');
    // income got
    const foodCost = work('food-cost');
    const rentCost = work('rent-cost');
    const clothesCost = work('clothes-cost');
    // cost got

    const totalCost = foodCost + rentCost + clothesCost;

    if(incomeHere < totalCost){
        alert('khoros beshi kore felso eto taka nai');
        return;
    }
    document.getElementById('total-expense').innerText = totalCost;
    document.getElementById('balance').innerText = incomeHere - totalCost;
})
document.getElementById('btn-save').addEventListener('click', function(){
    // repeat
    const foodCost = work('food-cost');
    const rentCost = work('rent-cost');
    const clothesCost = work('clothes-cost');
    // cost got

    const totalCost = foodCost + rentCost + clothesCost;
    // repeat finish
    const incomeHere = work('total-income');
    const saveValue = work('save-value');
    const savingMath = (saveValue / 100) * incomeHere;
    document.getElementById('saving-amount').innerText = savingMath;
    document.getElementById('remaining-balance').innerText = incomeHere - (totalCost + savingMath)
})
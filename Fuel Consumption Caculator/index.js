function calculate() {
    var cashAmount = parseFloat(document.getElementById('cashAmount').value);
    var fuelType = document.getElementById('fuelType').value;

    if (isNaN(cashAmount) || cashAmount <= 0) {
        document.getElementById('result').innerHTML = 'Invalid input. Please enter a valid cash amount.';
    } else {
        var fuelPrice = (fuelType === 'petrol') ? 24.96 : 26.95;  // Rands per liter
        var liters = cashAmount / fuelPrice;
        var distance = liters * /*Assuming a standard efficiency in km per liter*/ 10;

        document.getElementById('result').innerHTML = `
            Amount of ${fuelType.charAt(0).toUpperCase() + fuelType.slice(1)}: R ${cashAmount.toFixed(2)}<br>
            Liters: ${liters.toFixed(2)}<br>
            Distance: ${distance.toFixed(2)} km
        `;
    }
}

function calculateTip() {
    var billAmount = document.getElementById('billAmount').value;
    var tipPercentage = document.getElementById('tipPercentage').value;
    var numberOfPeople = document.getElementById('numberOfPeople').value;

    if (billAmount === "" || tipPercentage === "" || numberOfPeople === "") {
        alert("Please fill in all fields");
        return;
    }

    var tipAmount = (billAmount * (tipPercentage / 100)) / numberOfPeople;
    var totalAmount = (billAmount / numberOfPeople) + tipAmount;

    document.getElementById('result').innerHTML =
        "Tip Amount per Person: $" + tipAmount.toFixed(2) + "<br>" +
        "Total Amount per Person: $" + totalAmount.toFixed(2);
}
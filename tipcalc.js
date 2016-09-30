
function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    } else {
        return true;
    }
}
function tipCalculate(bill, tip, party) {
    var bill = document.getElementById("billTotal").value;
    var tip = document.getElementById("percent").value;
    var people = document.getElementById("partySize").value;
    var tiptotal = Math.round(bill * tip);
    var totalCost = +tiptotal + +bill;
    var totalPP = totalCost / people;

   // console.log("bill: "+bill+ " tip: " +tip+ " party size: " +people+ " total tip: " +tiptotal+ " total: "+totalCost+" totalPP " +totalPP)
   
    if (bill == null || bill == '') {
       alert ("Please entire a bill amount");
        return false;   
    }
    if (tip == null || tip == '') {
       alert ("Please entire a tip amount");
        return false;
    }
    if (bill >= 0) {
        tipAmount.innerHTML = 'The tip should be: $' + Math.round((bill * tip)).toFixed(2);
        totalcost.innerHTML = 'The total cost: $' + totalCost.toFixed(2);
        totalcostPP.innerHTML = 'Each person should pay: $' + totalPP.toFixed(2);

       
    }
}


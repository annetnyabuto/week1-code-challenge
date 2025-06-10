let userInput = prompt("Unatuma Ngapi? (KES): ");
let amountToSend = parseFloat(userInput);


if (isNaN(amountToSend) || amountToSend <= 0) {
    alert("Please enter a valid amount greater than 0.");
} else {
  estimateTransactionFee(amountToSend);
}

function estimateTransactionFee(amountToSend){
  // Calculates the transaction fee based on the amount to send
    let transactionFee = (1.5 / 100) * amountToSend;

    if (transactionFee < 10) {
        transactionFee = 10;
        totalAmount = amountToSend + transactionFee;
    }
    else if (transactionFee > 70) {
        transactionFee = 70;
        totalAmount = amountToSend + transactionFee;
    }
    else{
        totalAmount = amountToSend + transactionFee;
    }

// Outputs the transaction fee and total amount to be debited
console.log(
    `Sending KES ${amountToSend}:
    Calculated Transaction Fee: KES ${transactionFee}
    Total amount to be debited: KES ${totalAmount}
    Send Money Securely!`);
}
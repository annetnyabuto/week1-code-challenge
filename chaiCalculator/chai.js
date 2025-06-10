//chai bora ingredient calculator
function calculateChaiIngredients(){
    //prompt the user to enter number of cups
    const cups = parseFloat(prompt("Karibu! How many cups of Chai Bora would you like to make?"));
//check if input is valid
if (isNaN(cups) || cups <=0){
    alert("Please enter a valid number of cups.");
    return;
}

    const water = 200 * cups; //200ml of water per cup
    const milk = 50 * cups; //50ml of milk per cup
    const teaLeaves = 1 * cups; //1 teaspoon of teaLeaves per cup
    const sugar = 2 * cups; //2 teaspoons of sugar per cup

    //output the ingredients using the calculated values
    console.log(`To make ${cups} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${600} ml`);
    console.log(`Milk: ${150} ml`);
    console.log(`Tea Leaves (Majani): ${3} tablespoons`);
    console.log(`Sugar (Sukari): ${6} teaspoons`);
    console.log(`Enjoy your chai bora!`);
}
calculateChaiIngredients()
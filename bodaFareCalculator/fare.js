//Base fare for the ride
const baseFare = 50;

//other charges
const chargePerKm = 15;

//prompt the user to input distance in kilometers
const input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
const distanceInKm = Number(input);

//check if input is invalid
if(isNaN(distanceInKm) || distanceInKm < 0){
    alert("Naomba uweke namba sahihi ya kilomita");
}

//function to calculate the boda fare
function calculateBodaFare(distanceInKm) {    
    const totalFare = baseFare + (distanceInKm * chargePerKm);
    const tripFare = distanceInKm * chargePerKm;

    //output to the console
    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${tripFare}`);
    console.log(`Total: KES ${totalFare}`);
    console.log(`Panda Pikipiki!`);
}


//call the function to calculate and display fare
calculateBodaFare(distanceInKm)

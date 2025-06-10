const baseFare = 50;
const chargePerKm = 15;

const input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
const distanceInKm = Number(input);

if(isNaN(distanceInKm) || distanceInKm < 0){
    alert("Naomba uweke namba sahihi ya kilomita");
}
function calculateBodaFare(distanceInKm) {    
    const totalFare = baseFare + (distanceInKm * chargePerKm);
    const tripFare = distanceInKm * chargePerKm;

    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${tripFare}`);
    console.log(`Total: KES ${totalFare}`);
    console.log(`Panda Pikipiki!`);
}



calculateBodaFare(distanceInKm)

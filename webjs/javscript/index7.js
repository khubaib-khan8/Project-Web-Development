let convertbtn = document.getElementById("ali");
let inputfield = document.getElementById("input-el");
let lengthfield = document.getElementById("length-url");
let volumefield = document.getElementById("volume-url");
let massfield = document.getElementById("mass-url");

const meterToFeet = 3.281;
const literToGallon = 0.264;
const kiloToPound = 2.204;

convertbtn.addEventListener("click", function() {
    let baseValue = parseFloat(inputfield.value);

    // Convert and update length
    let metersToFeet = (baseValue * meterToFeet).toFixed(3);
    let feetToMeters = (baseValue / meterToFeet).toFixed(3);
    lengthfield.textContent = `${baseValue} meters = ${metersToFeet} feet | ${baseValue} feet = ${feetToMeters} meters`;

    // Convert and update volume
    let litersToGallons = (baseValue * literToGallon).toFixed(3);
    let gallonsToLiters = (baseValue / literToGallon).toFixed(3);
    volumefield.textContent = `${baseValue} liters = ${litersToGallons} gallons | ${baseValue} gallons = ${gallonsToLiters} liters`;

    // Convert and update mass
    let kilosToPounds = (baseValue * kiloToPound).toFixed(3);
    let poundsToKilos = (baseValue / kiloToPound).toFixed(3);
    massfield.textContent = `${baseValue} kilograms = ${kilosToPounds} pounds | ${baseValue} pounds = ${poundsToKilos} kilograms`;
});

//asking user for inputs, first string, second number for conversion and math operations, third string
//strings already converted to upper case to avoid a problem if someone input lowercase letters.
let metricOne = prompt("In which metric is the temperature you are converting? \n C - Celsius \n F - Fahrenheit \n K - Kelvin").toUpperCase();
let degrees = Number(prompt("What is the number you want to convert?"));
let metricTwo = prompt("To which metric would you like to convert the temperature? \n C - Celsius \n F - Fahrenheit \n K - Kelvin").toUpperCase();

//Celsius variables, already converted and declared with const to avoid future changing
const celsiusFromFahrenheit = (degrees - 32) * (5/9);
const celsiusFromKelvin = degrees - 273.15;

//Fahrenheit variables, already converted and declared with const to avoid future changing
const fahrenheitFromCelsius = (degrees * (9/5)) +32;
const fahrenheitFromKelvin = (degrees * (9/5)) - 459.67;

//Kelvin variables, already converted and declared with const to avoid future changing
const kelvinFromCelsius = degrees + 273.15;
const kelvinFromFahrenheit = (degrees + 459.67) * (5/9);

//Celsius converter
if (metricOne == "C" && metricTwo == "C") {
    console.log(`${degrees}C is ${degrees}C `);
}
else if (metricOne == "F" && metricTwo == "C") {
    console.log(`${degrees}F is ${celsiusFromFahrenheit}C`);
}
else if (metricOne == "K" && metricTwo == "C") {
    console.log(`${degrees}K is ${celsiusFromKelvin}C`);
}

//Fahrenheit converter

else if (metricOne == "F" && metricTwo == "F") {
    console.log(`${degrees}F is ${degrees}F `);
}
else if (metricOne == "C" && metricTwo == "F") {
    console.log(`${degrees}C is ${fahrenheitFromCelsius}F`);
}
else if (metricOne == "K" && metricTwo == "F") {
    console.log(`${degrees}K is ${fahrenheitFromKelvin}C`);
}

//Kelvin converter

else if (metricOne == "K" && metricTwo == "K") {
    console.log(`${degrees}K is ${degrees}K `);
}
else if (metricOne == "C" && metricTwo == "K") {
    console.log(`${degrees}C is ${kelvinFromCelsius}K`);
}
else if (metricOne == "F" && metricTwo == "K") {
    console.log(`${degrees}F is ${kelvinFromFahrenheit}C`);
}
else {
    console.log("I don't know what convertion you are trying to make");
};
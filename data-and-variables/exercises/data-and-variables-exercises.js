// Declare and assign the variables below

let shuttleName = 'Determination';
let shuttleSpeedMph = 17500;
let kilometersToMars = 225000000;
let kilometersToMoon = 38400;
const milesPerKilometer = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.

console.log(typeof 'Determination');
console.log(typeof 17500);
console.log(typeof 225000000);
console.log(typeof 38400);
console.log(typeof 0.621);

// Calculate a space mission below

let milesToMars = kilometersToMars * milesPerKilometer;
let hoursToMars = milesToMars / shuttleSpeedMph;
let daysToMars = hoursToMars / 24;
let milesToMoon = kilometersToMoon * milesPerKilometer;`    `
let hoursToMoon = milesToMoon / shuttleSpeedMph;
let daysToMoon = hoursToMoon / 24;

// Print the results of the space mission calculations below

// Calculate a trip to the moon below

console.log(shuttleName + " will take " + 24 + " days to reach the Moon.");

// Print the results of the trip to the moon below
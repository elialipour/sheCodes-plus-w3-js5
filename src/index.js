// Challenge 1
// Create an array weekDays with all days of the week, console log the array
let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
console.log(weekDays);
// Challenge 2
// Log ‘Monday’ and ‘Sunday’
console.log(weekDays[1], weekDays[0]);
// Challenge 3
// Change ‘Sunday’ by ‘Funday’
// Log the array
weekDays[0] = "Funday";
console.log(weekDays);
// Challenge 4
// Remove Monday and Tuesday
// Log the array
weekDays = weekDays.filter((e) => e !== "Monday");
weekDays = weekDays.filter((e) => e !== "Tuesday");

console.log(weekDays);
// Challenge 5
// Log every day of the week this way:`Temperature on Monday is 18 degrees’

let daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let temperatures = [15, 18, 21, 19, 23, 25, 22];

for (let i = 0; i < weekDays.length; i++) {
  let day = daysOfWeek[i];
  let temperature = temperatures[i];

  console.log("Temperature on", day, "is", temperature, "degree.");
}

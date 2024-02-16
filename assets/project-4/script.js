console.log("--- PART 1 ---");

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const today = new Date();
console.log(`One year from today is ${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear() + 1}.`);

console.log("--- PART 2 ---");

const names = [];
let input = "";

while ((input = prompt("Enter names")) != "") {
    names.push(input);
}

names.sort();

console.log(names.join("\n"));

console.log("--- PART 3 ---");

function person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

person.prototype.greet = function(viewer) {
    console.log(`Hi, ${viewer.firstName} ${viewer.lastName}. My name is ${this.firstName} ${this.lastName}.`);
}

const alex = new person("Alex", "Neher");
const viewer = new person("document", "viewer");

alex.greet(viewer);

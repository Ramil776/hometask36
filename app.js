// hometask
const rubleAccount = prompt("Rubl hesabindaki meblegi daxil edin"); 
const dollarAccount = prompt("Dollar hesabindaki meblegi daxil edin"); 
const exchangeRate = 75; 
const totalAmountInRubles = rubleAccount + dollarAccount * exchangeRate;
console.log("Bütün depozitlər üçün məbləğ: " + totalAmountInRubles + " rubl.")
// hometask
const ones = ["", "bir", "iki", "Uc", "dord", "bes", "alti", "yeddi", "sekkiz", "doqquz"];
const teens = ["on bir", "on iki", "on uc", "on dord", "on bes", "on alti", "on yeddi", "on sekkiz", "on doqquz"];
const tens = ["", "10", "iyirmi", "otuz", "qirx", "elli", "altmis", "yetmis", "seksen", "doxsan"];

let number = prompt("1 ile 99 arasinda reqem daxil edin:");

if (number.length === 1) {
    console.log(ones[Number(number)]);
} else if (number === "10") {
    console.log(tens[1]);
} else if (number[0] === "1" && number[1] !== "0") {
    console.log(teens[Number(number[1]) - 1]);
} else {
    let tensPart = tens[Number(number[0])];
    let onesPart = ones[Number(number[1])];
    console.log(tensPart,onesPart.trim());
}
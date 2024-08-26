// 1. Add two numbers and show the result
let num1 = 5;
let num2 = 3;
let sum = num1 + num2;
document.getElementById('results').innerHTML += `The sum of ${num1} and ${num2} is ${sum}<br>`;

// 2. Subtraction, multiplication, division, and modulus
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
let modulus = num1 % num2;

document.getElementById('results').innerHTML += `The difference between ${num1} and ${num2} is ${difference}<br>`;
document.getElementById('results').innerHTML += `The product of ${num1} and ${num2} is ${product}<br>`;
document.getElementById('results').innerHTML += `The quotient of ${num1} divided by ${num2} is ${quotient}<br>`;
document.getElementById('results').innerHTML += `The modulus of ${num1} and ${num2} is ${modulus}<br>`;

// 3. JS Math Expressions
let variable;
document.getElementById('results').innerHTML += `Value after variable declaration is: ${variable}<br>`;
variable = 5;
document.getElementById('results').innerHTML += `Initial value: ${variable}<br>`;
variable++;
document.getElementById('results').innerHTML += `Value after increment is: ${variable}<br>`;
variable += 7;
document.getElementById('results').innerHTML += `Value after addition is: ${variable}<br>`;
variable--;
document.getElementById('results').innerHTML += `Value after decrement is: ${variable}<br>`;
let remainder = variable % 3;
document.getElementById('results').innerHTML += `The remainder is: ${remainder}<br>`;

// 4. Movie ticket cost calculation
let ticketPrice = 600;
let totalCost = ticketPrice * 5;
document.getElementById('results').innerHTML += `The cost of buying 5 tickets is ${totalCost} PKR<br>`;

// 5. Multiplication table
let tableNum = 5;
document.getElementById('results').innerHTML += `<h3>Multiplication Table of ${tableNum}</h3>`;
for (let i = 1; i <= 10; i++) {
    document.getElementById('results').innerHTML += `${tableNum} x ${i} = ${tableNum * i}<br>`;
}

// 6. Temperature Converter
let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
document.getElementById('results').innerHTML += `${celsius}°C is ${fahrenheit}°F<br>`;
fahrenheit = 70;
celsius = (fahrenheit - 32) * 5/9;
document.getElementById('results').innerHTML += `${fahrenheit}°F is ${celsius.toFixed(2)}°C<br>`;

// 7. Shopping cart
let priceItem1 = 650;
let priceItem2 = 300;
let qtyItem1 = 3;
let qtyItem2 = 7;
let shippingCharges = 100;
let totalPrice = (priceItem1 * qtyItem1) + (priceItem2 * qtyItem2) + shippingCharges;
document.getElementById('results').innerHTML += `Total cost of your order is ${totalPrice} PKR<br>`;

// 8. Percentage calculation
let totalMarks = 1100;
let marksObtained = 980;
let percentage = (marksObtained / totalMarks) * 100;
document.getElementById('results').innerHTML += `Percentage: ${percentage.toFixed(2)}%<br>`;

// 9. Currency conversion
let usdToPkr = 104.80;
let riyalToPkr = 28;
let totalCurrency = (10 * usdToPkr) + (25 * riyalToPkr);
document.getElementById('results').innerHTML += `Total currency in PKR: ${totalCurrency}<br>`;

// 10. Arithmetic sequence
let number = 10;
let result = (((number + 5) * 10) / 2);
document.getElementById('results').innerHTML += `Result after arithmetic sequence is: ${result}<br>`;

// 11. Age calculator
let currentYear = 2024;
let birthYear = 2007;
let age1 = currentYear - birthYear;
let age2 = age1 - 1;
document.getElementById('results').innerHTML += `They are either ${age1} or ${age2} years old<br>`;

// 12. Geometrizer
let radius = 10;
let circumference = 2 * 3.142 * radius;
let area = 3.142 * radius * radius;
document.getElementById('results').innerHTML += `The circumference is ${circumference}<br>`;
document.getElementById('results').innerHTML += `The area is ${area}<br>`;

// 13. Lifetime supply calculator
let favoriteSnack = "Chocolate Chip";
let currentAge = 17;
let maxAge = 90;
let amountPerDay = 2;
let totalSnack = (maxAge - currentAge) * 365 * amountPerDay;
document.getElementById('results').innerHTML += `You will need ${totalSnack} ${favoriteSnack}(s) to last you until the ripe old age of ${maxAge}<br>`;

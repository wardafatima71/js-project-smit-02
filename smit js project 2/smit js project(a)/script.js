// 1. Declare 3 variables in one statement
var firstName, lastName, age;

// 2. Declare 5 legal & 5 illegal variable names
// Legal variable names
var myName;
var $price;
var _value;
var first_name;
var my1stVariable;

// Illegal variable names (These would cause an error if uncommented)
// var 1stVariable;
// var my-name;
// var var;
// var alert;
// var 123abc;

// 3. Displaying rules for naming JS variables
var rules = `
    <b>Variable names can only contain</b> letters, numbers, $, and _. 
    For example <code>$my_1stVariable</code><br>
    <b>Variables must begin with</b> a letter, $, or _. 
    For example <code>$name</code>, <code>_name</code> or <code>name</code><br>
    <b>Variable names are case sensitive</b><br>
    <b>Variable names should not be JS keywords</b>
`;

// Display the rules in the browser
document.getElementById('rules').innerHTML = rules;

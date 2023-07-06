// problem 1
var input = window.prompt("Enter Number");
document.write(input);

// problem 2
var inputDivisible = Number(window.prompt("Enter Number"));
if (inputDivisible % 4 == 0 && inputDivisible % 3 == 0) {
  document.write("Yes");
} else {
  document.write("No");
}

// problem 3

var number1 = Number(window.prompt("Enter First Number"));
var number2 = Number(window.prompt("Enter Second Number"));

if (number1 > number2) {
  document.write(number1);
} else if(number2 > number1){
  document.write(number2);
} else {
    document.write("Two Numbers Are Equal");
}

// problem 4

var numberNegativeorPositive = Number(window.prompt("Enter  Number"));

if (numberNegativeorPositive >= 0) {
  document.write("Positive");
} else if (numberNegativeorPositive < 0) {
  document.write("Negative");
} else {
  document.write("Enter Correct Number");
}

// problem 5
var number1 = Number(window.prompt("Enter First Number"));
var number2 = Number(window.prompt("Enter Second Number"));
var number3 = Number(window.prompt("Enter Third Number"));

var maxNum = number1;
if (number2 > maxNum) {
  maxNum = number2;
}
if (number3 > maxNum) {
  maxNum = number3;
}

var minNum = number1;
if (number2 < minNum) {
  minNum = number2;
}
if (number3 < minNum) {
  minNum = number3;
}

document.write("Max Number Is", maxNum);
document.write("Min Number Is", minNum);

// problem 6
var evenOrodd = Number(window.prompt("Enter  Number"));

if (evenOrodd % 2 == 0) {
  document.write("Even");
} else {
  document.write("odd");
}

// problem 7

var character = window.prompt("Enter Char");

if (
  character == "a" ||
  character == "e" ||
  character == "i" ||
  character == "o" ||
  character == "u"
) {
  document.write("vowel");
} else {
  document.write("Consonant");
}
// problem 8
var numberForloop = Number(window.prompt("Enter Number"));

for (let i = 1; i <= numberForloop; i++) {
  document.write(i);
}

// problem 9

var numberMultiply = Number(window.prompt("Enter Number"));
for (let i = 1; i <= 12; i++) {
  document.write(numberMultiply * i);
}

// problem 10

var numberEven = Number(window.prompt("Enter Number"));
for (let i = 1; i <= numberEven; i++) {
  if (i % 2 == 0) {
    document.write(i);
  }
}

// problem 11

var numberPower1 = Number(window.prompt("Enter Number"));
var numberPower2 = Number(window.prompt("Enter Number"));

document.write(numberPower1 ** numberPower2);

// problem 12
var mark1 = Number(window.prompt("Enter Mark"));
var mark2 = Number(window.prompt("Enter Mark"));
var mark3 = Number(window.prompt("Enter Mark"));
var mark4 = Number(window.prompt("Enter Mark"));
var mark5 = Number(window.prompt("Enter Mark"));
var Total = mark1 + mark2 + mark3 + mark4 + mark5;
var Average = Total / 5;
var Percentage = (Total / 500) * 100;
document.write("Total Is", Total);
document.write("Average Is", Average);
document.write("Percentage Is", Percentage);

// problem 13
var numberOfmonthbyif = Number(window.prompt("Enter Month"));
if (numberOfmonthbyif == 1) {
  document.write("Number of Days is 31");
} else if (numberOfmonthbyif == 2) {
  document.write("Number of Days is 28");
} else if (numberOfmonthbyif == 3) {
  document.write("Number of Days is 31");
} else if (numberOfmonthbyif == 4) {
  document.write("Number of Days is 30");
} else if (numberOfmonthbyif == 5) {
  document.write("Number of Days is 31");
} else if (numberOfmonthbyif == 6) {
  document.write("Number of Days is 30");
} else if (numberOfmonthbyif == 7) {
  document.write("Number of Days is 31");
} else if (numberOfmonthbyif == 8) {
  document.write("Number of Days is 31");
} else if (numberOfmonthbyif == 9) {
  document.write("Number of Days is 30");
} else if (numberOfmonthbyif == 10) {
  document.write("Number of Days is 31");
} else if (numberOfmonthbyif == 11) {
  document.write("Number of Days is 30");
} else if (numberOfmonthbyif == 12) {
  document.write("Number of Days is 31");
} else {
  document.write("enter invalid month");
}
// problem 14
var Physics = Number(window.prompt("Enter Mark"));
var Chemistry = Number(window.prompt("Enter Mark"));
var Biology = Number(window.prompt("Enter Mark"));
var Mathematics = Number(window.prompt("Enter Mark"));
var Computer = Number(window.prompt("Enter Mark"));
var sum = Physics + Chemistry + Biology + Mathematics + Computer;
var total = 500;
var percentage = (sum / total) * 100;
if (percentage >= 90) {
  document.write("grade A");
} else if (percentage >= 80) {
  document.write("grade B");
} else if (percentage >= 70) {
  document.write("grade C");
} else if (percentage >= 60) {
  document.write("grade D");
} else if (percentage >= 40) {
  document.write("grade E");
} else if (percentage < 40) {
  document.write("grade F");
}
// problem 15

  var numberOfmonth = Number(window.prompt("Enter Month"));
switch (numberOfmonth) {
  case 1:
    document.write("Number of Days is 31");
    break;
  case 2:
    document.write("Number of Days is 28");
    break;
  case 3:
    document.write("Number of Days is 31");
    break;
  case 4:
    document.write("Number of Days is 30");
    break;
  case 5:
    document.write("Number of Days is 31");
    break;
  case 6:
    document.write("Number of Days is 30");
    break;
  case 7:
    document.write("Number of Days is 31");
    break;
  case 8:
    document.write("Number of Days is 31");
    break;
  case 9:
    document.write("Number of Days is 30");
    break;
  case 10:
    document.write("Number of Days is 31");
    break;
  case 11:
    document.write("Number of Days is 30");
    break;
  case 12:
    document.write("Number of Days is 31");
    break;
  default:
    document.write("Enter Valid Month");
}

// problem 16
var Character = window.prompt("Enter Character");

switch (Character) {
  case "a":
    document.write("Vowel");
    break;
  case "e":
    document.write("Vowel");
    break;
  case "i":
    document.write("Vowel");
    break;
  case "o":
    document.write("Vowel");
    break;
  case "u":
    document.write("Vowel");
    break;
  default:
    document.write("consonant");
}

//problem 17
var number1Switch = Number(window.prompt("Enter Number"));
var number2Switch = Number(window.prompt("Enter Number"));

switch (true) {
  case number1Switch > number2Switch:
    document.write("Max Number Is", number1Switch);
    break;
  case number2Switch > number1Switch:
    document.write("Max Number Is", number2Switch);
    break;
  default:
    document.write("Numbers Equal");
}

// problem 18
var numberGuess = Number(window.prompt("Enter Number"));

switch (true) {
  case numberGuess % 2 == 0:
    document.write("Even");
    break;
  case numberGuess % 2 == 1:
    document.write("odd");
    break;
  default:
    document.write("Enter invalid Number");
}

// problem 19
var numberNPZ = Number(window.prompt("Enter Number"));

switch (true) {
  case numberNPZ > 0:
    document.write("Positive");
    break;
  case numberNPZ < 0:
    document.write("Negative");
    break;
  case numberNPZ == 0:
    document.write("zero");
    break;
  default:
    document.write("Enter Invalid Number");
}

// problem 20
var number1 = Number(window.prompt("Enter Number"));
var number2 = Number(window.prompt("Enter Number"));
var choice = window.prompt("Enter Your Choice");

switch (choice) {
  case "sum":
    document.write(number1 + number2);
    break;
  case "subtract":
    document.write(number1 - number2);
    break;
  case "multiply":
    document.write(number1 * number2);
    break;
  case "divide":
    document.write(number1 / number2);
    break;
  default:
    document.write("Enter Valid Choice");
}

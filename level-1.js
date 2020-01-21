//Question 1
var myText = "Hello Javascript";
//Question 2
var person = {
  name: "Alex",
  age: 30
};
//Question 3
var outOfStock = true;
if (outOfStock === true) {
  console.log("Out of stock");
} else {
  console.log("In stock");
}
//Question 4
var numbers = [40, 65, 85, 66, 12];
for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
//Question 5
for (var i = 15; i <= 25; i++) {
  console.log(i);
}
//Question 6
for (var i = 15; i <= 25; i++) {
  if (i === 20) {
    console.log(i);
  }
}

//Question 7
var cars = [
  {
    name: "BMW",
    model: 2016,
    isInStock: true
  },
  {
    name: "Toyota",
    model: 2019,
    isInStock: false
  }
];

for (i = 0; i < cars.length; i++) {
  console.log(cars[i].name + " model: " + cars[i].model);
  console.log(cars[i].name + " is in stock: " + cars[i].isInStock);
}

//Question 8
function whatIDontLike(dislike) {
  console.log("I don't like " + dislike);
}
whatIDontLike("Seafood");
//Question 9
function subtractTwoNumbers(num1, num2) {
  console.log(num1 - num2);
}
subtractTwoNumbers(20, 10);
//Question 10
var myArray = [];
function addToArray(cars) {
  myArray.push(cars);
}
addToArray("Fiat");

// 1. Declare an empty array called `myArray`.
let myArray=[]


// 2. Create an array called 'fruits' that contains the following elements: 'apple', 'banana', 'cherry'.
let fruits=['apple', 'banana', 'cherry']
// 3. Access the second element of the fruits array and assign it to a variable called 'secondFruit'.
let secondFruit = fruits[1]
// 4. Add the element 'orange' to the end of the 'fruits' array.
fruits.push('orange')
// 5. Remove the first element from the 'fruits' array.
fruits.shift()
// 6. Find the length of the 'fruits' array and assign it to a variable called 'numFruits'.
let numFruits=fruits.length()

// 7. Check if the element 'banana' exists in the 'fruits' array and assign the result to a variable called 'hasBanana'.
let hasBanana=fruits.includes('banana')
console.log(hasBanana)
// 8. Loop through the 'fruits' array and console.log each element.
fruits.forEach(fruit=>console.log(fruit))
// 9. Create a new array called 'numbers' that contains the numbers 1, 2, 3, 4.
let numbers=[1,2,3,4]
// 10 Use the 'map' method to create a new array called 'squares' that contains the squares of each number in the 'numbers' array.
let square=numbers.map(number=>number*number)
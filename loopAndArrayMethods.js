/*Given an array consisting of movie names, 
iterate over the array with the output of the names of each movie to the console */
const movieTitles = ['Titanic', 'Inception', 'Terminator', 'Chocolate', 'Amelie'];
for (movie of movieTitles) {
    console.log(movie)
}

// Given an array of car manufacturers, convert the array to a string and back to an array


const carModels = ['Subaru', 'Mersedes', 'Volvo', 'Honda', 'Toyota'];
console.log(carModels.join(',').split(','))

// Given an array of the names of your friends, add the words hello to each element of the array
const friends = ['Mika', 'Indira', 'Aidos', 'Gumi', 'Zhanar'];
const greetFriends = friends.map(friend => 'Hello, ' + friend)

// Convert numeric array to Boolean
// Converting each element of array
const numbers = [2, 5, 7, 14, 0, 8];
const booleans = numbers.map(number => Boolean(number))
// Converting the whole array
let nums = [1, 2, 5, 20, 8]
console.log(Boolean(nums))


//Sort the array [1,6,7,8,3,4,5,6] in descending order
const arr = [1,6,7,8,3,4,5,6];
const sortedArr = arr.sort(function(a, b) {
    return b - a;
})

// Filter array [1,6,7,8,3,4,5,6] by value> 3
let arr1 = [5, 15, 28, 45, 68, 97, 3, 1]
let filteredArr = arr1.filter(num => num > 3)

/* Write a function that takes two parameters - an array and a number and outputs the index 
of an array element equal to a number */
function indexOfItem(arr, num) {
    return `The index of ${num} is: ${arr.indexOf(num)}`
}

console.log(indexOfItem([2, 5, 8, 10, 18], 10))

// Implement a loop that will print the number 'a' until it is less than 10

i = 0
while (i < 10) {
    console.log(i, 'a')
    i++
}

//Implement a loop that prints prime numbers to the console
let startNum = 1
let stopNumber = 50
for (let i = startNum; i <= stopNumber; i++) {
    isPrime = true;
    
    for (let j = 2; j < i; j++) {
        if (i%j == 0) {
            isPrime = false;
            continue;
        }
    }
     
    if (i > 1 && isPrime) {
        console.log(i);
    }
}
//  Implement a loop that prints odd numbers to the console
num = 100
for (i = 0; i <=num; i++) {
    if (i % 2) {
        console.log(i)
    }
}
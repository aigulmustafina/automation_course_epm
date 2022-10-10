/* Given the string 'ahb acb aeb aeeb adcb axeb'. 
Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'
*/ 

const str = 'ahb acb aeb aeeb adcb axeb'
console.log(str.replace('ahb', 'a').replace('acb', '%').replace('aeb', 'b'))

// Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest
const str1 = '2 + 3 223 2223'
const re = /\d\s\+\s\d/
console.log(str1.match(re))

// Get the day, month and year of the current date and output it to the console separately
let currentDate = new Date()
console.log(currentDate.getDate())
console.log(currentDate.getMonth() + 1)
console.log(currentDate.getFullYear())
// Tasks on 'Objects and Functions' module

// car object

let car = {
    color: 'black',
    enginePower: 300,
    power() {
        console.log('The power in horsepowers is:', this.enginePower)

    }
}

console.log(car)
car.color = 'green'
console.log(car)
car.power()

// function to count apples and peaches
function warehouse(apples, peaches) {
    return apples + peaches
}

let countFruits = warehouse(15, 28)
console.log('The number of accepted fruits is:', countFruits)

// Function to greate user
function helloUser(name) {
    if (name) {
        return 'Hello,' + name
    }
    else {
        return 'There is no such a name'
    }
}

console.log(helloUser())
console.log(helloUser('Anna'))

// This function determines the type of given argument

function argumentType(arg) {
    console.log(typeof arg)
}

argumentType(10)
argumentType('message')
argumentType(true)
argumentType(65.8)

// This function determines whether the given argument is prime 
function isPrime(num) {
    if (num === 2 || num === 3) {
        return true
    }
    if (num % 2 === 0 || num < 2) {
        return false
    }
    for (let i = 3; i < num; i++) {
        if (num%i) {
            return true
        }
        else {
            return false
        }
}
}

console.log(isPrime(17))
// task1
try {
    console.log(a)
    let a = 3
} catch(ReferenceError) {
    console.log('let must be declared')
}

// task2
let result = 1 / 0
if (!isFinite(result)) {
    throw new Error('cannot be divided by zero')
} else {
    console.log(result)
}
    
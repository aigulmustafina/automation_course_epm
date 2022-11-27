// task1
try {
    console.log(a);
    let a = 3;
} catch(ReferenceError) {
    console.log('let must be declared');
}

// task2

try {
    let result = 1/0;
    if (!isFinite(result)) {
        throw DivisionByZeroError;
    }
}
catch (DivisionByZeroError) {
    console.log('cannot be divided by zero');
}

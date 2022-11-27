
let numVal = 10;
let strVal = 'Hello';
let boolVal = true;

// implicite conversion
let result = strVal + boolVal;
result = strVal + numVal;
result = numVal + boolVal;

result = strVal * boolVal;
result = strVal * numVal;
result = numVal * boolVal;

result = strVal/boolVal;
result = strVal/numVal;
result = numVal/boolVal;

// expicit conversion
result = Boolean(strVal) + boolVal;
result = strVal + String(numVal);
result = numVal + Number(boolVal);

result = Boolean(strVal) * boolVal;
result = Boolean(strVal) * numVal;
result = numVal * Number(boolVal);

result = Boolean(strVal) /boolVal;
result = Boolean(strVal)/numVal;
result = numVal/ Number(boolVal);

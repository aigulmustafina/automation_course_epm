// implicite conversion
let num1 = 10;
let str1 = 'Hello';
let bool1 = true;
let res1 = str1 + bool1;
let res2 = str1 + num1;
let res3 = num1 + bool1;
console.log("res1 =", res1, "res2 =", res2, "res3 =", res3)

let res4 = str1 * bool1;
let res5 = str1 * num1;
let res6 = num1 * bool1;
console.log("res4 =", res4, "res5 =", res5, "res6 =", res6)

let res7 = str1/ bool1;
let res8 = str1 / num1;
let res9 = num1 / bool1;
console.log("res7 =", res7, "res8 =", res8, "res9 =", res9)


// expicit conversion
let res10 = Boolean(str1) + bool1;
let res11 = str1 + String(num1);
let res12 = num1 + Number(bool1);
console.log("res10 =", res10, "res11 =", res11, "res12 =", res12)

let res13 = Boolean(str1) * bool1;
let res14 = Boolean(str1) * num1;
let res15 = num1 * Number(bool1);
console.log("res13 =", res13, "res14 =", res14, "res15 =", res15)


let res16 = Boolean(str1) / bool1;
let res17 = num1 / Boolean(str1);
let res18 = num1 / Number(bool1);
console.log("res16 =", res16, "res17 =", res17, "res18 =", res18)
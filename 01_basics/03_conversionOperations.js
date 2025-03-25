let score = true

console.log(typeof score);
console.log(typeof (score));     //another way of writing

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" = NaN
// undefined = NaN
// null = NaN
// true = 1 ; false = 0 

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 = true ; 0 = false
// " " = false
// "sahil" = true ; any value in string gives true value

let anynumber = 33

let stringnumber = String(anynumber);
console.log(stringnumber);
console.log(typeof stringnumber);

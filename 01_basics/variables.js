const accountId = 23456
let accountemail ="sahilkumar@google.com"
var accountPassword = "Hello"
accountCity = "Ranchi"
let accountState;

// acccountId = 2 // not allowed

accountemail = "hello@google.com"
accountPassword = "Bye"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table({accountId, accountemail, accountPassword, accountCity, accountState})
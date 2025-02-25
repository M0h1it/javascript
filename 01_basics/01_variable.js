const accountId = 1445523
let accountEmail = "mohit.janjadiya@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

//accountId = 2 // not allowed
/*
prefer not to use var
because of issue in block scope and functional scope
*/


console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity])
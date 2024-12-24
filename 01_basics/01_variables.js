const accountId = 10;

let accountEmail = "hitesh@google.com";

var accountPassword = "1234Password";

let accountState; // accountState = undefined;

accountCity = " Jaipur"; //shouldn't do that
// console.log("Before changing the values");

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);
{
    // Never use 'var' ->? use 'let'
    console.log("Inside Scope");
    console.log(accountEmail);
    console.log( accountPassword);
}
// accountId = 2; //not allowed
accountEmail = "clickTwice@gmail.com";
accountPassword = "234Password";
accountCity = "Khulna";

console.log("After changing the values");
// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

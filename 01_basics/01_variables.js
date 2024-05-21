const accId = 1445533;
let accEmail = "acc@gmail.com"
var accPassword = "123";
accCity = "Jaipur";
let accState;
/* 
Prefer not using var cause of block scope and functional scope
*/
accEmail = "hac@gmail.com";
accPassword = "1221";
accCity = "Bengaluru";

console.table([accEmail, accPassword, accCity, accId, accState])
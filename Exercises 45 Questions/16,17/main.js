"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guest_list = ["Hassan", "Sanaullah", "Umar", "Usman"];
let guestnotcoming = "Sanaullah";
let Newguest = "Owais";
guest_list[1] = Newguest;
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Respected sir/Madam ` + guest_list[i] + ",\nwe invite you on tomarrow dinner.\nThankyou");
}
guest_list.unshift(`Ashraf`, `Akhter`, `Asif`);
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Respected sir/Madam ` + guest_list[i] + ",\nwe invite you on tomarrow dinner.I found a bigger Dinner table,So now more space is available.\nThankyou");
}
console.log(`Unfortunately We can not arrange big Table,Only Two People Are Allowed`);
while (guest_list.length > 2) {
    let Remove_Guest = guest_list.pop();
    console.log(`Sorry Respected Sir/Madam  ${Remove_Guest} you are not invited tomarrow Dinner`);
}
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Respected sir/Madam ` + guest_list[i] + ",\n You are still invited on Tomarrow Dinner.\nThankyou\n");
}
guest_list.splice(0, 2);
console.log(guest_list);

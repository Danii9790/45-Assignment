"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guest_list = ["Hassan", "Sanaullah", "Umar", "Usman"];
let guestnotcoming = "Sanaullah";
let Newguest = "Owais";
guest_list[1] = Newguest;
for (var i = 0; i < guest_list.length; i++) {
    console.log(`Respected sir/Madam ` + guest_list[i] + ",\nwe invite you on tomarrow dinner.\nThankyou");
}
console.log(`Mr. ${guestnotcoming} is not coming on Tamorrow Dinner`);

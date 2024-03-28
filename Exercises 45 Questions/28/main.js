"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let age = 20;
if (age < 2) {
    console.log("the person is baby");
}
else if (age >= 2 && age < 4) {
    console.log("the person is a toddler");
}
else if (age >= 4 && age < 13) {
    console.log(" the person is a kid");
}
else if (age >= 13 && age < 20) {
    console.log("the person is a teenager");
}
else if (age >= 20 && age < 65) {
    console.log("the person is Adult");
}
else if (age >= 65) {
    console.log("the person is elder");
}

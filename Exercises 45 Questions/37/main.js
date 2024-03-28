"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = "Large", printmessage = "I love typescript.") {
    console.log(`The size of the shirt is ${size} and the message printed on it is ${printmessage}`);
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "I love javascript.");

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function great_magicians(magician) {
    for (let i = 0; i < magician.length; i++) {
        magician[i] = magician[i] + "  great ";
    }
}
const magician2 = ["ali", "hussain", "mohsin"];
great_magicians(magician2);
console.log(magician2);

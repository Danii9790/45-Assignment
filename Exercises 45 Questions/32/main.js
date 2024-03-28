"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let current_users = ["Daniyal", "Bilal", "Jamal", "Ahmed"];
let new_users = ["Umar", "Zuhaib", "Daniyal", "Hamza", "Ahmed"];
//creating loop
new_users.forEach(new_one_user => {
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase());
    if (our_condition) {
        console.log(`some ${new_one_user} is already taken!`);
    }
    else {
        console.log(`This username ${new_one_user} is available!`);
    }
});

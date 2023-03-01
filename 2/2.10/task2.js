import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({input, output});

let nameLanguage = await rl.question('Какое «официальное» название JavaScript?\n');
if (nameLanguage === "ECMAScript") {
    console.log("Верно!");
} else {
    console.log('Не знаете? "ECMAScript"!');
}

rl.close();
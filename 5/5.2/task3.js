import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({input, output});

async function readNumber() {
    let num;

    do {
        num = await rl.question("Введите число: ");
    } while ( !isFinite(num));

    if (num === null || num === '') return null;

    rl.close();
    return +num;
}

console.log(readNumber());

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({input, output});

async function sumInput() {
    const numbers = [];

    while (true) {
        let value = await rl.question("Введите число: ");
        if (value === "" || value === null || !isFinite(value)) break;
        numbers.push(+value);
    }

    let sum = 0;
    numbers.forEach(val => sum+=val);
    return sum;
}

console.log( sumInput() );
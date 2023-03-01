import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({input, output});

let rangePrimeNumber = await rl.question("Введите диапазон: ");

for (let i = 2; i <= rangePrimeNumber; i++) {
    let flag = true;
    if (i > 2 && i % 2 !== 0) {
        for (let j = 3; j**2 <= i; j += 2) {
            if (i%j===0) {
                flag = false;
                break;
            }
        }
    } else if (i !== 2) {
        flag = false;
    }
    if (flag) {
        console.log(i);
    }
}

rl.close();
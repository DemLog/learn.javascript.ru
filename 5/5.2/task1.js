import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({input, output});

let a = +await rl.question("Введите первое число: ");
let b = +await rl.question("Введите второе число: ");

console.log(a + b);

rl.close();
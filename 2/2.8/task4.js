import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({input, output});

let a = await rl.question("Первое число?\n");
let b = await rl.question("Второе число?\n");

console.log(Number(a) + Number(b));

rl.close();
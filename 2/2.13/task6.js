import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({input, output});

let value;

do {
    value = await rl.question("Введите число больше 100:\n");
} while (value <= 100 && value);

rl.close();
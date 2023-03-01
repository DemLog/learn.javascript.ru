// Реализация ввода пользователем в NodeJS за место prompt
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({input, output});

let name = await rl.question("Ваше имя?\n");
console.log(name);

rl.close();
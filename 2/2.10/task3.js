import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({input, output});

let value = await rl.question("Введите число\n");
if (value > 0) {
    console.log(1);
} else if (value < 0){
    console.log(-1);
} else {
    console.log(0);
}

rl.close();
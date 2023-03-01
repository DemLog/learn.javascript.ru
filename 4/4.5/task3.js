import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({input, output});

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = async function() {
        this.value += +await rl.question("Введите число: ");
    };
}

const accumulator = new Accumulator(54);
await accumulator.read();

console.log(accumulator.value);
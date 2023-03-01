import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({input, output});

const calculator = {
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },

    async read() {
        this.a = +await rl.question('a? ');
        this.b = +await rl.question('b? ');
    }
};

await calculator.read();
console.log( calculator.sum() );
console.log( calculator.mul() );

rl.close();
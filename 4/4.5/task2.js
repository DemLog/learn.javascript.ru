import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({input, output});

function Calculator() {

    this.sum = function () {
        return this.a + this.b;
    }

    this.mul = function () {
        return this.a * this.b;
    }

    this.read = async function() {
        this.a = +await rl.question('a? ');
        this.b = +await rl.question('b? ');
    }
}

const calculator = new Calculator();
await calculator.read();

console.log( calculator.sum() );
console.log( calculator.mul() );

rl.close();
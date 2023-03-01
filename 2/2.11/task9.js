import * as readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";

const rl = readline.createInterface({input, output});

let login = await rl.question("Кто там?\n");
if (login === "Админ") {
    let password = await rl.question("Пароль?\n");
    if (password === "Я главный") {
        console.log("Здравствуйте!");
    } else if (password === "" || password === null) {
        console.log("Отменено");
    } else {
        console.log("Неверный пароль");
    }
} else if (login === "" || login === null) {
    console.log("Отменено");
} else {
    console.log("Я вас не знаю");
}

rl.close();
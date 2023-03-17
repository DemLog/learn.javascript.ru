let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys()); // До этого возвращался не массив, а итерируемый объект

keys.push("more");
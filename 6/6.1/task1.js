// Цикл
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Рекурсия
function sumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
}

// Арифметическая прогрессия
function sumTo(n) {
    return n * (n + 1) / 2;
}
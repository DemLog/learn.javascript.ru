function pow(x, n) {
    if (n < 1) {
        throw "Поддерживаются только натуральные значения степени n!"
    }

    let result = x;
    for (let i =1; i < n; i++) {
        result *= x;
    }

    return result;
}
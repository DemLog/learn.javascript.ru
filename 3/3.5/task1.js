it("Возводит x в степень n", function() {
    let x = 5;

    let result = x;
    assert.equal(pow(x, 1), result);

    result *= x;
    assert.equal(pow(x, 2), result);

    result *= x;
    assert.equal(pow(x, 3), result);
});

// 3 теста в одной функции, что помешает в дальнейшем узнать истинную причину падения теста.
// Нужно разделить каждый тест по отдельным блокам it

describe("Возведение x в степень n", () => {
    it("5 в степени 1 = 5", () => {
        assert.equal(pow(x, 1), 5);
    });

    it("5 в степени 2 = 25", () => {
        assert.equal(pow(x, 2), 25);
    });

    it("5 в степени 3 = 125", () => {
        assert.equal(pow(x, 3), 125);
    });
});
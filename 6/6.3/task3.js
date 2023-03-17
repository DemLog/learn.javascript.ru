let phrase = "Hello";

if (true) {
    let user = "John";

    function sayHi() {
        alert(`${phrase}, ${user}`);
    }
}

sayHi(); // Ошибка, т.к. функция объявлена во внутреннем блоке, к чему из внешнего блока нет доступа к ней
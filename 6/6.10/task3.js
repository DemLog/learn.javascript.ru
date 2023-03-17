function sayHi() {
    alert( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
    name: "Вася"
});

alert( bound.test ); // undefined, т.к.используя bind получаем другой объект, у которого уже нет свойства test
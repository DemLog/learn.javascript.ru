new Promise(function(resolve, reject) {
    setTimeout(() => {
        throw new Error("Whoops!");
    }, 1000);
}).catch(alert);

// Не выполнится код в catch, т.к. тут присутсвует скрытый try..catch вокруг функции
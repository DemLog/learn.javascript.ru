// Цикл
function printReverseList(list) {
    let arr = [];
    let temp = list;
    while (tmp) {
        arr.push(temp.value);
        temp = temp.next;
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log( arr[i] );
    }
}

// Рекурсия
function printReverseList(list) {
    if (list.next) {
        printReverseList(list.next);
    }
    console.log(list.value);
}

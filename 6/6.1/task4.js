// Цикл
function printList(list) {
    let temp = list;
    while (temp) {
        console.log(temp.value);
        temp = temp.next;
    }
}

// Рекурсия
function printList(list) {
    console.log(list.value);
    if (list.next) {
        printList(list.next);
    }
}
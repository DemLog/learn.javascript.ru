function pow(x,n) // Пробел в параметрах требуется
{ // В JS фигурная скобка не начинается с новой строки
    let result=1; // Пробел между знаком =
    for(let i=0;i<n;i++) {result*=x;} // Пробелы в аргументах for и само тело должно быть вынесено на другую строку
    return result;
}

let x=prompt("x?",''), n=prompt("n?",'') // Вынести операции в 2 строки
if (n<=0) // Нет пробела, к тому же это новая логическая операция, надо добавить сверху отделить пропуском блок
{ // Фигурные скобки с новой строки
    alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
}
else // else пишут сразу после фигурной закрывающейся скобки, не с новой строки
{
    alert(pow(x,n)) // Нет пробела в параметрах и на конце нет точки с запятой
}
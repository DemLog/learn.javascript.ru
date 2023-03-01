function checkAgeFirst(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAgeSecond(age) {
    return (age > 18) || confirm('Родители разрешили?');
}
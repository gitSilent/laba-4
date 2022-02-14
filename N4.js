//№4
//Сгенерировать массив чисел 1–31 включительно (числа месяца).
//Вывести с помощью console.log для каждого из чисел строку ${число} января, ${день недели}.
//День недели 1 января должен задаваться с помощью переменной, 
//то есть программа должна корректно работать для любого дня недели, с которого начинается месяц. 

let numbersOfMonth = [], 
daysOfWeek = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
firstJanuary = "Вторник", beginDay = 0;

for (let j = 0; j <= 7; j++){
    if (firstJanuary == daysOfWeek[j]){
        beginDay = j;
        break;
    }
}
console.log(beginDay);

for (i = 1; i <= 31; i++){
    numbersOfMonth.push(i);
}
console.log(numbersOfMonth);
i = 1;
while (i <= numbersOfMonth.length){
    console.log(`${i} января ${daysOfWeek[beginDay]}`);
    i++;
    beginDay++
    if (beginDay == 7){
        beginDay = 0;
    }
}
// №1 Напишите генератор массивов длиной count со случайными числами от n до m. 
// Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m. 
// Выведите результат с помощью console.log.
// Выполните задание, используя несколько видов циклов.

let ran_mas = [], n, m, count, i = 0;

n = 0;
m = 100;
count = 10;

min = Math.min(n,m);
max = Math.max(n,m);

while (i < count){
    ran_mas.push(Math.round((Math.random()*Math.abs(max-min)))+min);
    i++;
}
console.log(ran_mas);

// // №1 alternative
// let ran_mas = [], n, m, count;

// n = 0;
// m = 100;
// count = 10;

// min = Math.min(n,m);
// max = Math.max(n,m);

// for (let i = 0; i < count; i++){
//     ran_mas.push(Math.round((Math.random()*Math.abs(max-min)))+min);
    
// }
// console.log(ran_mas);

// //__________________________________________________________________________________

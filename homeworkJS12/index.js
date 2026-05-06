//Задача 1

for(let x = 1; x <= 20; x++){
    if (x % 4 === 0){
        continue;
    }
    console.log(x)
}



//Задача 2

let number = +prompt("Введите число:");
let factorial = 1;
for (let i = 1; i < number; i++){
    factorial *= i;
    console.log(`Факториал числа ${number} = ${factorial}`)
};



//Задача 3

let board = 8;
for (row = 1; row <= board; row++){
    let col ="";
    for(let line = 1; line < board; line++){
        if ((row + line) % 2 === 0){
            col += "#"
        } else {
            col += " "
        }
    }
    console.log(col)
}
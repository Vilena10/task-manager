// let str = "Hello, world!"
// console.log(str);
// alert("Привет " + str)

// let x, y, sum;
// x = parseInt(prompt("Введите первое число", 0));
// y = parseInt(prompt("Введите второе число", 0));
// sum = x + y;
// console.log(sum)

// let num1, num2
// num1 = -5

// console.log(++num1)
// console.log(-num1)


//1.37
// let a, b, c, P;
// a = parseInt(prompt("Введите первый катет", 0))
// b = parseInt(prompt("Введите второй катет", 0))
// c = Math.sqrt(a**2 + b**2)
// P = a + b + c
// console.log(P)


// //2.3
// let kg, ton;
// kg = parseInt(prompt("Введите количество кг"))
// ton = Math.floor(kg / 1000);
// console.log(ton)

//2.19
// let number, sum, x
// number = parseInt(prompt("Введите четырехзначное число"))
// sum = number % 10 + Math.floor((number % 100) / 10) + Math.floor((number % 1000) / 100) + Math.floor((number % 10000) / 1000)
// x = number % 10 * Math.floor((number % 100) / 10) * Math.floor((number % 1000) / 100) * Math.floor((number % 10000) / 1000)
// console.log(sum, x)


///////////////////////if else///////////////////


// let number1, number2, min, max
// number1 = parseFloat(prompt("Введите первое число",0))
// number2 = parseFloat(prompt("Введите второе число",0))
// min = number1
// max = number1


// if (number2 < min) {
//     min = number2
    
// }
// if(number2 > max) {
//     max = number2
// }
// alert("Максимальное: " + max + ", Минимальное: " + min)


// минимум среди трех чисел

// let x1, x2, x3, min
// x1 = parseFloat(prompt("Введите первое число", 0))
// x2 = parseFloat(prompt("Введите первое число", 0))
// x3 = parseFloat(prompt("Введите первое число", 0))
// min = x1
// if (x2 < min) {
//     min = x2
// }
// if (x3 < min) {
//     min = x3
// }
// alert(min)

//найти минимальное среди n чисел

// let n, x, min

// n = parseInt(prompt("Введите количесвто чисел", 1))
// min  = parseFloat(prompt("Введите число", 0))
// for (let i = 1; i <= n - 1; i++) {
//     x = parseFloat(prompt("Введите число", 0))
//     if(x < min) {
//         min = x
//     }
// }
// alert(min)

//найти минимум среди последовательности чисел, ввод которой заканчивается 0. при этом 0 не входит в последовательность

// let x, min

// x = parseFloat(prompt("Введите число", 1))
// min = x
// while (x != 0) {
//     x = parseFloat(prompt("Введите число", 1))
//     if (x<min) min = x;
// }
// alert (min)

// let number, digital
// number = parseInt(prompt("Введите число"))

// while (number != 0) {
//     digital = number % 10
//     console.log (digital)
//     number = Math.floor(number / 10)
// }



//4.28

// let number, digital1, digital2, max
// number = parseInt(prompt("Введите число"))

// digital1 = Math.floor((number / 100))
// digital2 = Math.floor((number % 100) / 10)
// max = digital1
// if(digital2 > max) {
//     max = digital2
// }
// console.log(max)


//4.94
//  let points, res

//  points = parseInt(prompt("Введите кол во очков"))
//  if(points == 3) {
//      console.log("Победа")
//  }
// else if(points == 1) {
//      console.log("Ничья")
//  }
//   else if(points == 0) {
//      console.log("Поражение")
//  }




//5.30

// let a, sum

// a = parseInt(prompt("Введите целое число a"))
// sum = 0
// for(let i = a; i <= 50; i++) {
//     sum = sum + Math.pow(i,2)
// }
// console.log(sum)


//6.22

let a, z, sum

a = parseInt(prompt("Введите натуральное число"))
sum = 1
while(a > 0) {
    z = a % 10
    if(z > 7) {
        sum = sum * z
    }
    a = Math.floor(a / 10)
}

console.log(sum)
const sum = (num1: number, num2: number) => {
    let sum = 0
    sum = num1 + num2
    return sum
}

const x = 123
const y = 456
let sum_numbers = sum(x,y)

console.log("sum of " + x + " and " + y + " is " + sum_numbers)

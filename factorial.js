
function findFactorialRecursive (number) {
    if(number == 2){
        return number;
    }
    return (number) * findFactorialRecursive (number-1);
}
let response = 1;
function findFactorialIterative (number) {
    while(number >= 1){
        response *= number;
        number--; 
    }
    return response;
}
let answer = 0;
let middle = 0;
let past = 0;
function fibonacciIterative(index){
    for(let i = 1; i <= index; i++){
        if(i === 1){
            past = 0;
            answer = 1;
        }
        if(i > 1){
            middle = answer;
            answer = past + answer;
            past = middle;
        }
    }
    return answer;
}
function fibonacciRecursive(index){
    if (index < 2){
        return index;
    }
    return fibonacciRecursive(index-2)+fibonacciRecursive(index-1);
}
console.log(fibonacciIterative(6));
console.log(fibonacciRecursive(6));
console.log(findFactorialRecursive(8));
console.log(findFactorialIterative(8));
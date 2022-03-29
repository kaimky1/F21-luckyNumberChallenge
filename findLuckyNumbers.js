// Write your code below this line.\\
let possibleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array = [];
const luckyNumber = (n) => {
    for(i = 0; i < n; i++){
        let randomNum = Math.floor(Math.random() * 10);
        array.push(possibleNumbers[randomNum])
        possibleNumbers.splice(randomNum,1)
    }
    console.log(array)
}
luckyNumber(3);
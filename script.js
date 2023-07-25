// set good condition to console logging array

const a = 8;
const b = 12;

let arr = [a, b];

for (let i = 0; i < 10; i++) {
  arr.push(i);
}

arr.push("aboba");

const balance = (transaction) => transaction.reduce((a, b) => a + b, 0);
console.log(balance(arr));

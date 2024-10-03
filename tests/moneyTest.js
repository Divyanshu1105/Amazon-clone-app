import { formatCurrency } from '../scripts/utils/money.js';

console.log('test suite : formatCurrency');
// normal test case
console.log('converts cents into the dollars');
if (formatCurrency(2095) === '20.95') {
    console.log('passed');
}
else {
    console.log('failed');
}


//edge case test
console.log('works with the 0');
if (formatCurrency(0) === '0.00') {
    console.log('passed');
}
else {
    console.log('failed');
}

//edge case test
console.log('rounds up to the nearest cent')
if (formatCurrency(2000.5) === '20.01') {
    console.log('passed');
}
else {
    console.log('failed');
}
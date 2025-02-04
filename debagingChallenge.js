// 1) Understanding the problem
// - Array transformed to string,separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into subproblems
// - Transform array into string
// - Transform each element to string with C degris
// - String needs to contain day (index + 1)
// - Add ... btwn elements and start and end of string

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`${data1[0]} C ... ${data1[1]} C ... ${data1[2]} C ...`);
console.log(`${data2[0]} C ... ${data2[1]} C ... ${data2[2]} C ...`);

const printForecast = function (arr) {
  let str = '';
 for(let i = 0; i <arr.length; i++) {
  str = str + `${arr[i]}degrise C in ${i + 1} days`;
 }
 console.log('...' + str);
};

printForecast(data1);
printForecast(data2);
 
// 2+3=5+4=9
// [2, 3, 4]
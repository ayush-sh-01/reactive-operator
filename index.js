// Practical 07 - Reactive Stream Operators
// Name: Ayush Sharma
// Roll No.: 23100BTCSAII14276

// Import RxJS core and operators
const { of, from, merge, concat, zip } = require('rxjs');
const { map, filter, reduce, mergeMap, concatMap } = require('rxjs/operators');

// ---------------------- map() ----------------------
console.log("\n---- map() Operator ----");
from([1, 2, 3, 4])
  .pipe(map(x => x * 10))
  .subscribe(result => console.log(result));

// ---------------------- filter() ----------------------
console.log("\n---- filter() Operator ----");
from([1, 2, 3, 4, 5, 6])
  .pipe(filter(x => x % 2 === 0))
  .subscribe(result => console.log(result));

// ---------------------- reduce() ----------------------
console.log("\n---- reduce() Operator ----");
from([1, 2, 3, 4])
  .pipe(reduce((acc, val) => acc + val, 0))
  .subscribe(result => console.log("Sum:", result));

// ---------------------- flatMap() (mergeMap) ----------------------
console.log("\n---- flatMap() Operator ----");
from([1, 2, 3])
  .pipe(mergeMap(x => of(`${x} * 10 = ${x * 10}`)))
  .subscribe(result => console.log(result));

// ---------------------- concatMap() ----------------------
console.log("\n---- concatMap() Operator ----");
from(['A', 'B', 'C'])
  .pipe(concatMap(x => of(`${x} processed`)))
  .subscribe(result => console.log(result));

// ---------------------- merge() ----------------------
console.log("\n---- merge() Operator ----");
const obs1 = from(['A', 'B']);
const obs2 = from(['1', '2']);
merge(obs1, obs2).subscribe(result => console.log(result));

// ---------------------- concat() ----------------------
console.log("\n---- concat() Operator ----");
const obs3 = from(['X', 'Y']);
const obs4 = from(['Z']);
concat(obs3, obs4).subscribe(result => console.log(result));

// ---------------------- zip() ----------------------
console.log("\n---- zip() Operator ----");
const letters = from(['A', 'B', 'C']);
const numbers = from([1, 2, 3]);
zip(letters, numbers).subscribe(([a, b]) => console.log(a, b));
